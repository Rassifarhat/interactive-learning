'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { saveNoteForRevision } from '../utilities/saveNoteForRevision';
import { VoiceCapture } from '../components/VoiceCapture';
import { AnsweringChoices } from '../components/AnsweringChoices';
import { Assessment } from '../components/Assessment';

// ────────────────────────────────────────────────────────────────────────────────
// Type definitions (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
interface MindmapNode {
  name: string;
  id: string;
  summary?: string;
  children?: MindmapNode[];
}

// ────────────────────────────────────────────────────────────────────────────────
// Chapter 14 – Programming & Data Representation (detailed version)
// Summaries reference the Cambridge International AS & A‑Level Computer Science
// (9618) specification style: Paper 2 – Fundamental Problem‑solving & Programming.
// ────────────────────────────────────────────────────────────────────────────────

// app/components/InfoRepresentationQuestions.tsx


const data: MindmapNode = {
  name: "What topics does Chapter 14: Programming & Data Representation cover?",
  id: "chapter-14",
  summary:
    "This chapter ties the problem‑solving skills from Chapters 12–13 to actual code in Python, VB.NET and Java.  " +
    "It maps every construct back to the *Cambridge AS Level pseudocode reference* so you can translate freely between exam questions and real syntax.",
  children: [
    {
      name: "Why is learning one high‑level language sufficient for AS preparation, and what syntax examples must you recognise?",
      id: "prog-langs",
      summary:
        "Explains why learning ONE high‑level language is sufficient for AS preparation, " +
        "but shows syntax for three popular choices so you can recognise examples in past papers.\n\n" +
        "Key exam points:\n" +
        "• You will *write* solutions in pseudocode, not a real language.\n" +
        "• You must, however, be able to *trace* a short piece of unfamiliar code – often Python‑style.\n" +
        "• Understand interpreted vs compiled (Python ⇢ interpreter; VB/Java ⇢ compiler → byte‑code).\n" +
        "• Know that indentation is significant in Python (common source of logic errors in tracing tasks).",
      children: [
        {
          name: "What are Python’s key characteristics for code tracing and rapid testing?",
          id: "python",
          summary:
            "Interpreted, case‑sensitive, off‑side rule, everything is an *object*.\n" +
            "Interactive shell makes rapid testing of algorithms easy."
        },
        {
          name: "What distinguishes VB.NET’s syntax and compilation process?",
          id: "vbnet",
          summary:
            ".NET, compiled. Not case‑sensitive. Requires explicit `Dim` declarations unless `Option Infer` is on."
        },
        {
          name: "What are Java’s main features relevant to AS‑level tracing?",
          id: "java",
          summary:
            "Compiled to JVM byte‑code. Strong OOP model. Statements end with `;`. Requires a `main` method."
        }
      ]
    },
    {
      name: "How do pseudocode constructs map to Python, VB.NET, and Java syntax?",
      id: "basics",
      summary:
        "Links every pseudocode token from the syllabus to *executable* syntax.\n\n" +
        "✔ Variable declaration  ‑  `DECLARE X : INTEGER` ⇢ `Dim X As Integer` (VB) / `int x;` (Java).\n" +
        "✔ Constant declaration ‑  `CONSTANT Pi = 3.14` ⇢ `Const Pi = 3.14` (VB) / `static final double PI = 3.14;`.\n" +
        "✔ Assignment            ‑  exam uses `←`; languages use `=`.\n" +
        "✔ Output                ‑  `OUTPUT` ⇢ `print`, `Console.WriteLine`, `System.out.println`.\n" +
        "✔ Input                 ‑  remember *prompt then read* pattern for full marks.",
      children: [
        {
          name: "How should you use comments and identifier names for good programming practice?",
          id: "comments",
          summary:
            "Use comments to describe intent, not obvious code. " +
            "The mark scheme often rewards *meaningful identifier names* & comments when asked for “good programming practice”."
        },
        {
          name: "What is the operator precedence order and where do DIV and MOD fit?",
          id: "precedence",
          summary:
            "Exponent → *,/ → +,‑.  Know that `DIV` & `MOD` take the same precedence as * and /."
        }
      ]
    },
    {
      name: "Which data types does the exam cover and what storage/range implications matter?",
      id: "data-types",
      summary:
        "Whole numbers (INTEGER), real numbers (REAL/float/double), CHAR, STRING, BOOLEAN, DATE.\n" +
        "Exam often tests *range* & *storage implications* (e.g. why choose INTEGER vs REAL).",
      children: [
        {
          name: "What distinguishes simple (scalar) vs composite types?",
          id: "simple-composite",
          summary:
            "Simple (scalar) types hold one value; Composite types (arrays, records, strings) hold multiple."
        },
        {
          name: "How do Unicode and ASCII differ across Python, Java, and VB.NET?",
          id: "unicode",
          summary:
            "Python & Java use Unicode internally; VB.NET `Char` is 16‑bit Unicode. " +
            "Important when asked about *character set* limitations."
        }
      ]
    },
    {
      name: "What comparison and logical operators are used, and why use brackets in conditions?",
      id: "boolean",
      summary:
        "Comparison operators: =, <>, >, <, >=, <=.\n" +
        "Logical operators: AND, OR, NOT.\n" +
        "Exam tip: *write conditions as clearly as possible* – brackets reduce logic errors in trace tables."
    },
    {
      name: "What selection (branching) constructs are tested, and when prefer CASE over nested IF?",
      id: "selection",
      summary:
        "Covers IF … THEN … ELSE, nested IFs, CASE/OF.\n" +
        "• DEEP nested IFs often attract a re‑write mark – consider CASE for mutually exclusive values.\n" +
        "• Remember *default* clause (`ELSE` / `default` / `Case Else`) to avoid logic gaps in algorithms.",
      children: [
        {
          name: "How is CASE…ENDCASE pseudocode structured, and what clauses are required?",
          id: "case",
          summary:
            "Pseudocode syntax:\nCASE OF <expression>\n    CASE value1 : statements\n    CASE value2 : statements\n    OTHERWISE …\nENDCASE"
        }
      ]
    },
    {
      name: "Which loop patterns are expected in exams, and what are their characteristics?",
      id: "iteration",
      summary:
        "Three patterns expected in exams:\n" +
        "1. Count‑controlled `FOR counter ← s TO e [STEP i]`.\n" +
        "2. Pre‑condition `WHILE condition DO`.\n" +
        "3. Post‑condition `REPEAT … UNTIL condition`.\n" +
        "Know when each is appropriate; infinite loop prevention is a frequent 1‑mark question.",
      children: [
        {
          name: "How does a FOR loop work and when does it terminate?",
          id: "for",
          summary: "Terminating automatically after counter passes *e*."
        },
        {
          name: "What is the behavior of a WHILE loop with a pre‑condition test?",
          id: "while",
          summary: "Condition tested *before* body – may execute zero times."
        },
        {
          name: "How does REPEAT…UNTIL ensure the loop body runs at least once?",
          id: "repeat",
          summary: "Body always executes at least once; test at end."
        }
      ]
    },
    {
      name: "Which built‑in string and numeric functions should you recognise, and what slicing rules matter?",
      id: "builtins",
      summary:
        "Must recognise common string & numeric routines even if not memorising full syntax.\n\n" +
        "*String*: LEN, LEFT, RIGHT, MID, LCASE, UCASE, concatenation (& or +).\n" +
        "*Character codes*: CHR(), ASC().\n" +
        "*Numeric*: INT() for truncation, ROUND(), RANDOM number generators.\n" +
        "Python “slicing” appears in trace questions – know 0‑based indexing and exclusive upper bound."
    },
    {
      name: "How do you define void procedures in pseudocode and what are best practices?",
      id: "procedures",
      summary:
        "Pseudocode: `PROCEDURE Name([parameterList])` … `ENDPROCEDURE`.\n" +
        "• Declare *before* main code.\n" +
        "• Local variables recommended (global only with justification).\n" +
        "• Use verbs in procedure names for clarity."
    },
    {
      name: "How are functions defined and used in pseudocode, and what does the examiner expect?",
      id: "functions",
      summary:
        "Pseudocode: `FUNCTION Name([parameterList]) RETURNS dataType` … `RETURN value` … `ENDFUNCTION`.\n" +
        "Examiner expects you to *use* the return value inside an expression (e.g. `Total ← Total + Discount(Price)` )."
    },
    {
      name: "What is the difference between pass‑by‑value and pass‑by‑reference in pseudocode and real languages?",
      id: "params",
      summary:
        "By *value* (copy) vs By *reference* (alias).  In Cambridge marking schemes:\n" +
        "• By‑value → changes *inside* subroutine do **not** affect caller variable.\n" +
        "• By‑reference → changes propagate back.\n" +
        "Python workaround: return multiple values (tuple). Java: objects/arrays are reference types."
    },
    {
      name: "How do pseudocode arrays differ from real‑language tables, and what array tasks are tested?",
      id: "arrays",
      summary:
        "1‑D and 2‑D arrays.  Index origin is *1* in pseudocode but *0* in most languages – watch out when translating!\n" +
        "Exam tasks often include initialising, traversing with *nested* loops, and simple algorithms like tally counts."
    },
    {
      name: "Which file‑handling verbs must you know for Paper 2, and what is the EOF tracing tip?",
      id: "text-files",
      summary:
        "Essential for Paper 2 “file‑handling” questions.\n" +
        "Pseudocode verbs:\n" +
        "• `OPENFILE <name> FOR READ/WRITE`\n" +
        "• `READFILE <name>, <var>` – returns *end‑of‑file marker* (length 0 string)\n" +
        "• `WRITEFILE <name>, <string>`\n" +
        "• `CLOSEFILE <name>`\n" +
        "Trace Table Tip: always test for EOF before processing last record."
    },
    {
      name: "Which key skills must you check off in the End‑of‑Chapter Checklist?",
      id: "summary",
      summary:
        "✅ Can you translate every pseudocode construct into Python *and* back again?\n" +
        "✅ Can you state one advantage and one limitation of each loop type?\n" +
        "✅ Can you explain parameter passing with a diagram?\n" +
        "✅ Can you initialise and output a 2‑D array row‑by‑row?\n" +
        "✅ Have you practised reading from a file until EOF?\n\n" +
        "If any ✅ is missing, revisit the corresponding node and attempt the TASK boxes in the textbook."
    }
  ]
};

// ────────────────────────────────────────────────────────────────────────────────
// Component logic – identical to the earlier template (omitted comments for brevity)
// ────────────────────────────────────────────────────────────────────────────────
const CsCh14MindMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [infoContent, setInfoContent] = useState<string>('');
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [hiddenNodes, setHiddenNodes] = useState<Set<string>>(new Set());
  const [saveStatus, setSaveStatus] = useState<string>('');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  type PanelMode = 'choice' | 'answer' | 'recording' | 'feedback';

  const [panelMode, setPanelMode] = useState<PanelMode>('choice');
  const [transcript, setTranscript] = useState<string>('');


  const handleZoomIn = () => {
    if (svgRef.current && zoomRef.current) d3.select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy, 1.3);
  };
  const handleZoomOut = () => {
    if (svgRef.current && zoomRef.current) d3.select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy, 0.7);
  };
  const handleReset = () => {
    if (svgRef.current && zoomRef.current) {
      const w = 1200, h = 800;
      d3.select(svgRef.current).transition().duration(500).call(zoomRef.current.transform, d3.zoomIdentity.translate(w / 2, h / 2).scale(0.8));
    }
  };

  const toggleNodeVisibility = () => {
    if (!activeNode) return;
    const n = new Set(hiddenNodes);
    n.has(activeNode) ? n.delete(activeNode) : n.add(activeNode);
    setHiddenNodes(n);
    if (svgRef.current) d3.select(svgRef.current).selectAll(`text[data-id="${activeNode}"]`).attr('fill', hiddenNodes.has(activeNode) ? '#2D3748' : null);
  };

  const findName = (id: string | null, node: MindmapNode): string | null => {
    if (!id) return null;
    if (node.id === id) return node.name;
    if (node.children) for (const c of node.children) { const f = findName(id, c); if (f) return f; }
    return null;
  };
  const activeNodeName = findName(activeNode, data);
  const isNodeHidden = activeNode ? hiddenNodes.has(activeNode) : false;

  const selectNode = (d: d3.HierarchyPointNode<MindmapNode>) => {
    setActiveNode(d.data.id);
    setInfoContent(d.data.summary || `${d.data.name} – No summary yet.`);
    setSaveStatus('');
    setPanelMode('choice');
  };
  

  useEffect(() => {
    if (!svgRef.current) return;
  
    /* ────────── SVG scaffold ────────── */
    const width = 1200, height = 800,
          radius = Math.min(width, height) / 2 * 0.9;
  
    const svg = d3.select(svgRef.current)
      .attr('width',  width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .style('font', '10px sans-serif');
  
    svg.selectAll('*').remove();
    const g = svg.append('g');
  
    /* stop the default context‑menu that pops up on two‑finger click */
    svg.on('contextmenu', e => e.preventDefault());
  
    /* ────────── radial tree layout ────────── */
    const root = d3.hierarchy(data);
    const treeData = d3.tree<MindmapNode>()
      .size([2 * Math.PI, radius])
      .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth)(root);
  
    const linkGen = d3.linkRadial<
      d3.HierarchyPointLink<MindmapNode>,
      d3.HierarchyPointNode<MindmapNode>>()
        .angle(d => d.x)
        .radius(d => d.y);
  
    const linkGroup = g.append('g')
      .attr('fill', 'none')
      .attr('stroke', '#ccc')
      .attr('stroke-opacity', 0.7)
      .attr('stroke-width', 1.5)
      .selectAll('path')
      .data(treeData.links())
      .join('path')
      .attr('d', linkGen);
  
    /* ────────── nodes (group, circle, label) ────────── */
    const colour = d3.scaleOrdinal<string>()
      .domain(['0','1','2','3','4'])
      .range(['#4299E1','#48BB78','#F6AD55','#F56565','#9F7AEA']);
  
    const node = g.append('g')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-width', 3)
      .selectAll<SVGGElement, d3.HierarchyPointNode<MindmapNode>>('g')
      .data(treeData.descendants())
      .join('g')
      .attr('data-id', d => d.data.id)
      .attr('transform', d =>
        `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`);
  
    /* circle */
    node.append('circle')
      .attr('fill', d => colour(d.depth.toString()))
      .attr('r', d => d.data.id === 'chapter-14' ? 10 : 6)
      .style('cursor', 'pointer')
      .on('mouseover', (e, d) =>
        d3.select(e.currentTarget).attr('r',
          d.data.id === 'chapter-14' ? 12 : 8).attr('stroke', 'black'))
      .on('mouseout', (e, d) =>
        d3.select(e.currentTarget).attr('r',
          d.data.id === 'chapter-14' ? 10 : 6).attr('stroke', null));
  
    /* label */
    node.append('text')
      .attr('dy', '0.31em')
      .style('font-size', '10px')
      .style('font-weight', 'bold')
      .style('pointer-events', 'none')
      .attr('text-anchor', d => d.x < Math.PI ? 'start' : 'end')
      .attr('fill', d =>
        hiddenNodes.has(d.data.id) ? '#2D3748' : colour(d.depth.toString()))
      .attr('transform', d => {
        const inv = -(d.x * 180 / Math.PI - 90);
        const h   = d.x < Math.PI ? 8 : -8;
        return `rotate(${inv}) translate(${h},0)`;
      })
      .text(d => d.data.name);
  
    /* ────────── drag (only if two‑finger/right click) ────────── */
    const dragBehaviour = d3
      .drag<SVGGElement, d3.HierarchyPointNode<MindmapNode>>()
      /*  filter keeps left‑clicks for opening, right‑clicks for drag  */
      .filter(event => event.button === 2 || event.buttons === 2)
      .on('start', function (event, d) {
        event.sourceEvent.stopPropagation();       // keep zoom idle
        event.defaultPrevented = true;             // suppress click later
        d3.select(this).raise();
  
        syncToPointer(event, d);
        moveNode(this, d);
        linkGroup.attr('d', linkGen);
      })
      .on('drag', function (event, d) {
        syncToPointer(event, d);
        moveNode(this, d);
        linkGroup.attr('d', linkGen);
      });
  
    node.call(dragBehaviour);               // ① drag attached first
  
    /* click attached AFTER drag so defaultPrevented check works */
    node.on('click', (event, d) => {
      if (event.defaultPrevented) return;   // ignore right‑drag sequence
  
      setActiveNode(d.data.id);
      setInfoContent(d.data.summary || `${d.data.name} – No summary yet.`);
      setSaveStatus('');
      setPanelMode('choice');
    });
  
    /* ────────── zoom / pan ────────── */
    const zoomer = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on('zoom', ev => {
        g.attr('transform', ev.transform.toString());
        setZoom(ev.transform.k);
      });
  
    zoomRef.current = zoomer;
    svg.call(zoomer).on('dblclick.zoom', null);
    svg.call(zoomer.transform, d3.zoomIdentity.translate(0, 0).scale(0.8));
  
    if (!activeNode) {
      setInfoContent('Click on any node for full exam‑ready notes.');
    }
  
    return () => { svg.on('.zoom', null); };
  
    /* ─── helpers ───────────────────────────────────────── */
    function syncToPointer(event: any, d: d3.HierarchyPointNode<MindmapNode>) {
      const t           = d3.zoomTransform(svgRef.current as SVGSVGElement);
      const [ux, uy]    = t.invert([event.x, event.y]);
      let angle         = Math.atan2(uy, ux) + Math.PI / 2;
      if (angle < 0) angle += 2 * Math.PI;
      d.x = angle;
      d.y = Math.hypot(ux, uy);
    }
    function moveNode(el: SVGGElement, d: d3.HierarchyPointNode<MindmapNode>) {
      d3.select(el)
        .attr('transform',
          `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`);
  
      const inv = -(d.x * 180 / Math.PI - 90);
      const h   = d.x < Math.PI ? 8 : -8;
      d3.select(el).select('text')
        .attr('transform', `rotate(${inv}) translate(${h},0)`)
        .attr('text-anchor', d.x < Math.PI ? 'start' : 'end');
    }
  }, [hiddenNodes]);
    // dependencies stay unchanged
  
  

  return (
    <div className="flex flex-col w-full h-screen bg-gray-800 text-white">
      <div className="p-2 bg-gray-700 text-center sticky top-0 z-10">
        <h1 className="text-xl font-semibold">Topic 14: Programming &amp; Data Representation</h1>
      </div>

      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-2/3 h-2/3 md:h-full overflow-hidden relative bg-gray-900">
          <svg ref={svgRef} className="w-full h-full" />
          <div className="absolute bottom-4 right-4 bg-gray-800 rounded-lg shadow-lg p-2 flex flex-col space-y-2">
            <button onClick={handleZoomIn} className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center" aria-label="Zoom in"><span className="text-xl">+</span></button>
            <button onClick={handleZoomOut} className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center" aria-label="Zoom out"><span className="text-xl">−</span></button>
            <button onClick={handleReset} className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center" aria-label="Reset zoom"><span className="text-sm">Reset</span></button>
          </div>
        </div>

        <div className="w-full md:w-1/3 h-1/3 md:h-full p-4 bg-gray-700 overflow-y-auto border-t md:border-t-0 md:border-l border-gray-600">
          <div className="bg-gray-800 rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-2">
              {activeNodeName || 'Topic Information'} {isNodeHidden && <span className="text-sm text-gray-400 ml-2">(Hidden)</span>}
            </h2>

            <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line mb-4">
             {activeNode && panelMode === 'choice' && (
  <AnsweringChoices
    onShowAnswer={() => setPanelMode('answer')}
    onTryAnswer={() => setPanelMode('recording')}
  />
)}

{panelMode === 'recording' && (
  <VoiceCapture onFinished={async (base64) => {
    const res = await fetch('/api/speechToText', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ audioBase64: base64 })
    });
    const { text } = await res.json();
    setTranscript(text);
    setPanelMode('feedback');          // triggers <Assessment>
  }} />
)}

{panelMode === 'answer' && <p className="whitespace-pre-wrap">{infoContent}</p>}

{panelMode === 'feedback' && (
  <div className="prose prose-invert text-gray-300 whitespace-pre-line mb-4">
    <h3 className="text-lg font-semibold mb-1">Transcribed Answer:</h3>
    <p>{transcript}</p>
  </div>
)}
{panelMode === 'feedback' && (
  <>
    <Assessment
      transcript={transcript}
      modelAnswer={infoContent}
      question={activeNodeName ?? ''}
    />
    <p className="whitespace-pre-wrap mt-4">{infoContent}</p>
  </>
)}
            </div>

            {saveStatus && <div className="mb-4 p-2 bg-green-600 text-white rounded-md text-center">{saveStatus}</div>}

            {activeNode && (panelMode === 'answer' || panelMode === 'feedback') && (
              <div className="space-y-2">
                {/* "I know this very well" button */}
                <button
                  onClick={toggleNodeVisibility}
                  className={`px-4 py-2 rounded-md font-medium w-full ${
                    isNodeHidden
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {isNodeHidden
                    ? 'I need to review this, show it'
                    : 'I know this very well, hide it'}
                </button>

                {/* "I need to revise this later" button */}
                <button
                  onClick={() =>
                    saveNoteForRevision(
                      activeNodeName,
                      infoContent,
                      'computerScience',
                      14,
                      setSaveStatus,
                      setIsSaving
                    )
                  }
                  className="px-4 py-2 rounded-md font-medium w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  I need to revise this later, save it
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CsCh14MindMap;