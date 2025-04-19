import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { saveNoteForRevision } from '../utilities/saveNoteForRevision';

export interface MindmapNode {
  name: string;
  id: string;
  summary?: string;
  children?: MindmapNode[];
}

type PanelMode = 'choice' | 'answer' | 'recording' | 'feedback';

/**
 * Hook that encapsulates mind map rendering, interaction, and note saving.
 * @param data Mind map data
 * @param category Category name for saving notes
 * @param chapter Chapter number for saving notes
 */
export function useMindMapMaker(
  data: MindmapNode,
  category: 'computerScience' | 'chemistry',
  chapter: number
) {
  const svgRef = useRef<SVGSVGElement>(null);
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [infoContent, setInfoContent] = useState<string>('');
  const [hiddenNodes, setHiddenNodes] = useState<Set<string>>(new Set());
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panelMode, setPanelMode] = useState<PanelMode>('choice');
  const [transcript, setTranscript] = useState<string>('');
  const [saveStatus, setSaveStatus] = useState<string>('');
  const [isSaving, setIsSaving] = useState<boolean>(false);

  // Helper to find node name by id
  const findName = (id: string | null, node: MindmapNode): string | null => {
    if (!id) return null;
    if (node.id === id) return node.name;
    if (node.children) {
      for (const c of node.children) {
        const n = findName(id, c);
        if (n) return n;
      }
    }
    return null;
  };

  const activeNodeName = findName(activeNode, data);
  const isHidden = (id: string) => hiddenNodes.has(id);

  // Interaction handlers
  const handleZoomIn = () => {
    if (svgRef.current && zoomRef.current) {
      d3.select(svgRef.current)
        .transition()
        .duration(300)
        .call(zoomRef.current.scaleBy, 1.3);
    }
  };
  const handleZoomOut = () => {
    if (svgRef.current && zoomRef.current) {
      d3.select(svgRef.current)
        .transition()
        .duration(300)
        .call(zoomRef.current.scaleBy, 0.7);
    }
  };
  const handleReset = () => {
    if (!svgRef.current || !zoomRef.current) return;
    const w = 1200, h = 800;
    d3.select(svgRef.current)
      .transition()
      .duration(500)
      .call(
        zoomRef.current.transform,
        d3.zoomIdentity.translate(w / 2, h / 2).scale(0.8)
      );
  };
  const toggleNodeVisibility = () => {
    if (!activeNode) return;
    const next = new Set(hiddenNodes);
    next.has(activeNode) ? next.delete(activeNode) : next.add(activeNode);
    setHiddenNodes(next);
    if (svgRef.current) {
      d3.select(svgRef.current)
        .selectAll(`text[data-id="${activeNode}"]`)
        .attr('fill', next.has(activeNode) ? '#2D3748' : null);
    }
  };

  // Save note handler
  const handleSaveNote = () => {
    if (!activeNodeName) return;
    saveNoteForRevision(
      activeNodeName,
      infoContent,
      category,
      chapter,
      setSaveStatus,
      setIsSaving
    );
  };

  // Voice capture finished
  const handleTranscript = async (audioBase64: string) => {
    const res = await fetch('/api/speechToText', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ audioBase64 }),
    });
    const { text } = await res.json();
    setTranscript(text);
    setPanelMode('feedback');
  };

  const handleShowAnswer = () => setPanelMode('answer');
  const handleTryAnswer = () => setPanelMode('recording');

  // Render D3 mind map
  useEffect(() => {
    if (!svgRef.current) return;
    const width = 1200, height = 800;
    const radius = (Math.min(width, height) / 2) * 0.9;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .style('font', '10px sans-serif');

    svg.selectAll('*').remove();
    const g = svg.append('g');
    svg.on('contextmenu', (e) => e.preventDefault());

    const root = d3.hierarchy(data);
    const treeData = d3
      .tree<MindmapNode>()
      .size([2 * Math.PI, radius])
      .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth)(root);

    const linkGen = d3
      .linkRadial<
        d3.HierarchyPointLink<MindmapNode>,
        d3.HierarchyPointNode<MindmapNode>
      >()
      .angle((d) => d.x)
      .radius((d) => d.y);

    const linkGroup = g
      .append('g')
      .attr('fill', 'none')
      .attr('stroke', '#ccc')
      .attr('stroke-opacity', 0.7)
      .attr('stroke-width', 1.5)
      .selectAll('path')
      .data(treeData.links())
      .join('path')
      .attr('d', linkGen);

    const colour = d3
      .scaleOrdinal<string>()
      .domain(['0', '1', '2', '3', '4'])
      .range(['#4299E1', '#48BB78', '#F6AD55', '#F56565', '#9F7AEA']);

    const node = g
      .append('g')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-width', 3)
      .selectAll<SVGGElement, d3.HierarchyPointNode<MindmapNode>>('g')
      .data(treeData.descendants())
      .join('g')
      .attr('data-id', (d) => d.data.id)
      .attr('transform', (d) =>
        `rotate(${(d.x * 180) / Math.PI - 90}) translate(${d.y},0)`
      );

    node
      .append('circle')
      .attr('fill', (d) => colour(d.depth.toString()))
      .attr('r', (d) => (d.data.id === `chapter-${chapter}` ? 10 : 6))
      .style('cursor', 'pointer')
      .on('mouseover', (e, d) =>
        d3.select(e.currentTarget)
          .attr('r', d.data.id === `chapter-${chapter}` ? 12 : 8)
          .attr('stroke', 'black')
      )
      .on('mouseout', (e, d) =>
        d3.select(e.currentTarget)
          .attr('r', d.data.id === `chapter-${chapter}` ? 10 : 6)
          .attr('stroke', null)
      );

    node
      .append('text')
      .attr('dy', '0.31em')
      .style('font-weight', 'bold')
      .style('pointer-events', 'none')
      .attr('text-anchor', (d) => (d.x < Math.PI ? 'start' : 'end'))
      .attr('fill', (d) => (hiddenNodes.has(d.data.id) ? '#2D3748' : colour(d.depth.toString())))
      .attr('transform', (d) => {
        const inv = -((d.x * 180) / Math.PI - 90);
        const h = d.x < Math.PI ? 8 : -8;
        return `rotate(${inv}) translate(${h},0)`;
      })
      .text((d) => d.data.name);

    const zoomer = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on('zoom', (ev) => {
        g.attr('transform', ev.transform.toString());
        setZoomLevel(ev.transform.k);
      });

    zoomRef.current = zoomer;
    svg.call(zoomer).on('dblclick.zoom', null);
    svg.call(zoomer.transform, d3.zoomIdentity.translate(0, 0).scale(0.8));

    if (!activeNode) setInfoContent('Click on any node for full exam‑ready notes.');

    return () => { svg.on('.zoom', null); };
  }, [data, hiddenNodes]);

  return {
    svgRef,
    activeNodeName,
    infoContent,
    panelMode,
    transcript,
    saveStatus,
    isSaving,
    zoomLevel,
    isHidden,
    handlers: {
      handleZoomIn,
      handleZoomOut,
      handleReset,
      toggleNodeVisibility,
      handleShowAnswer,
      handleTryAnswer,
      handleSaveNote,
      handleTranscript,
    },
  };
}