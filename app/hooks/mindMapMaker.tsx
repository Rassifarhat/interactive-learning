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
  const initialRenderRef = useRef<boolean>(true);

  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [infoContent, setInfoContent] = useState<string>('');
  const [hiddenNodes, setHiddenNodes] = useState<Set<string>>(new Set());
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panelMode, setPanelMode] = useState<PanelMode>('choice');
  const [transcript, setTranscript] = useState<string>('');
  const [saveStatus, setSaveStatus] = useState<string>('');
  const [isSaving, setIsSaving] = useState<boolean>(false);

  // Storage key - specifically formatted for reliability
  const getStorageKey = () => `chemgraph-nodes-${category}-ch${chapter}`;

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

  // LOAD: Get hidden nodes from localStorage
  const loadHiddenNodesFromStorage = () => {
    const storageKey = getStorageKey();
    console.log(`[DEBUG] Loading hidden nodes from ${storageKey}`);
    
    try {
      const savedData = localStorage.getItem(storageKey);
      if (savedData) {
        const parsedNodes = JSON.parse(savedData);
        if (Array.isArray(parsedNodes)) {
          // Filter to ensure we only have strings
          const nodeIds = parsedNodes.filter(node => typeof node === 'string');
          console.log(`[DEBUG] Loaded ${nodeIds.length} hidden nodes`);
          return new Set<string>(nodeIds);
        }
      }
    } catch (err) {
      console.error('[DEBUG] Error loading hidden nodes:', err);
    }
    
    return new Set<string>();
  };

  // SAVE: Store hidden nodes in localStorage
  const saveHiddenNodesToStorage = (nodes: Set<string>) => {
    const storageKey = getStorageKey();
    const nodesArray = Array.from(nodes);
    
    console.log(`[DEBUG] Saving ${nodesArray.length} hidden nodes to ${storageKey}`);
    try {
      localStorage.setItem(storageKey, JSON.stringify(nodesArray));
    } catch (err) {
      console.error('[DEBUG] Error saving hidden nodes:', err);
    }
  };

  // TOGGLE: Add or remove node from hidden list
  const toggleNodeVisibility = () => {
    if (!activeNode) return;
    
    const updatedNodes = new Set(hiddenNodes);
    if (updatedNodes.has(activeNode)) {
      // Node is currently hidden - show it
      updatedNodes.delete(activeNode);
      console.log(`[DEBUG] Showing node: ${activeNode}`);
    } else {
      // Node is currently visible - hide it
      updatedNodes.add(activeNode);
      console.log(`[DEBUG] Hiding node: ${activeNode}`);
    }
    
    // Update the state (this will trigger the save effect)
    setHiddenNodes(updatedNodes);
    
    // Also update the UI immediately
    updateNodeVisibility(activeNode, updatedNodes.has(activeNode));
  };

  // Helper to update the visual appearance of a node
  const updateNodeVisibility = (nodeId: string, isHidden: boolean) => {
    if (!svgRef.current) return;
    
    // Update the text elements for this node
    const textElements = d3.select(svgRef.current)
      .selectAll(`text[data-id="${nodeId}"]`);
    
    if (textElements.size() === 0) {
      console.log(`[DEBUG] No text elements found for node ${nodeId}`);
      return;
    }
    
    console.log(`[DEBUG] Updating ${textElements.size()} text elements for node ${nodeId} to ${isHidden ? 'hidden' : 'visible'}`);
    
    // Apply the appropriate color
    if (isHidden) {
      textElements.attr('fill', '#2D3748'); // Dark gray for hidden
    } else {
      // Reset to default color (will be applied based on depth in the next render)
      textElements.attr('fill', null);
    }
  };

  // Apply visual updates whenever hidden nodes change
  const updateAllNodesVisibility = () => {
    if (!svgRef.current) return;
    
    console.log(`[DEBUG] Updating all nodes visibility, hidden count: ${hiddenNodes.size}`);
    
    // First, reset all text colors
    d3.select(svgRef.current)
      .selectAll('text')
      .attr('fill', null);
    
    // Then apply hidden style to all hidden nodes
    hiddenNodes.forEach(nodeId => {
      updateNodeVisibility(nodeId, true);
    });
  };

  // INIT: Load hidden nodes on component mount
  useEffect(() => {
    const loadedNodes = loadHiddenNodesFromStorage();
    if (loadedNodes.size > 0) {
      console.log(`[DEBUG] Setting ${loadedNodes.size} hidden nodes on init`);
      setHiddenNodes(loadedNodes);
    }
  }, []); // Empty dependency array - only run on mount

  // SYNC: Save hidden nodes whenever they change
  useEffect(() => {
    // Skip first render
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }
    
    // Save to localStorage
    saveHiddenNodesToStorage(hiddenNodes);
    
  }, [hiddenNodes]);

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

  // Update visibility when hidden nodes change after initial render
  useEffect(() => {
    if (!svgRef.current || initialRenderRef.current) return;
    updateAllNodesVisibility();
  }, [hiddenNodes]);

  // Render D3 mind map
  useEffect(() => {
    if (!svgRef.current) return;
    
    console.log('[DEBUG] Rendering mindmap, hidden nodes count:', hiddenNodes.size);
    
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

    // Add click handler to circles
    node
      .append('circle')
      .attr('fill', (d) => colour(d.depth.toString()))
      .attr('r', (d) => (d.data.id === `chapter-${chapter}` ? 10 : 6))
      .style('cursor', 'pointer')
      .on('click', (e, d) => {
        e.stopPropagation();
        setActiveNode(d.data.id);
        setInfoContent(d.data.summary || 'No details available for this node.');
        setPanelMode('choice');
      })
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

    // Set data-id attribute on text elements for easier selection
    node
      .append('text')
      .attr('dy', '0.31em')
      .style('font-weight', 'bold')
      .style('pointer-events', 'none')
      .attr('data-id', (d) => d.data.id)
      .attr('text-anchor', (d) => (d.x < Math.PI ? 'start' : 'end'))
      .attr('fill', (d) => {
        // Set correct color based on whether node is hidden
        const nodeIsHidden = hiddenNodes.has(d.data.id);
        if (nodeIsHidden) {
          console.log(`[DEBUG] Initial render: Node ${d.data.id} is hidden, setting dark color`);
          return '#2D3748';  // Dark gray for hidden nodes
        }
        return colour(d.depth.toString());
      })
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

    // After initial render is done, update initialRender ref
    initialRenderRef.current = false;

    return () => { svg.on('.zoom', null); };
  }, [data, chapter]);  // Removed hiddenNodes from dependencies to avoid re-rendering

  // After the mindmap is rendered, apply hidden nodes styling
  useEffect(() => {
    if (!svgRef.current) return;
    
    // Small delay to ensure the DOM is ready
    const timer = setTimeout(() => {
      updateAllNodesVisibility();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [data, chapter]); // Run when data or chapter changes

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