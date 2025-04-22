{{ ... }}
  const [infoContent, setInfoContent]     = useState<string>('');
  const [activeNode,  setActiveNode]      = useState<string | null>(null);
  const [zoom,        setZoom]            = useState<number>(1);
  const [hiddenNodes, setHiddenNodes]     = useState<Set<string>>(new Set());
  const [saveStatus,  setSaveStatus]      = useState<string>('');
  const [isSaving,    setIsSaving]        = useState<boolean>(false);
  const [transcript,  setTranscript]      = useState<string>('');

  type PanelMode = 'choice' | 'answer' | 'recording' | 'feedback';
  const [panelMode, setPanelMode] = useState<PanelMode>('choice');

  // Storage key for hidden nodes
  const STORAGE_KEY = 'chemgraph-hidden-nodes-ch7';

  // Load hidden nodes from localStorage on component mount
  useEffect(() => {
    try {
      const savedNodes = localStorage.getItem(STORAGE_KEY);
      if (savedNodes) {
        const parsedNodes = JSON.parse(savedNodes);
        if (Array.isArray(parsedNodes)) {
          const validNodes = parsedNodes.filter(node => typeof node === 'string');
          if (validNodes.length > 0) {
            setHiddenNodes(new Set(validNodes));
          }
        }
      }
    } catch (err) {
      console.error('[DEBUG] Error loading hidden nodes from localStorage:', err);
    }
  }, []);

  // Save hidden nodes to localStorage whenever they change
  useEffect(() => {
    try {
      const nodesArray = Array.from(hiddenNodes);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nodesArray));
    } catch (err) {
      console.error('[DEBUG] Error saving hidden nodes to localStorage:', err);
    }
  }, [hiddenNodes]);

  // Apply hidden node styles after initial render or changes
  useEffect(() => {
    if (!svgRef.current) return;
    
    // Apply hidden styles to all hidden nodes
    hiddenNodes.forEach(nodeId => {
      d3.select(svgRef.current)
        .selectAll(`text[data-id="${nodeId}"]`)
        .attr('fill', '#2D3748');
    });
  }, [hiddenNodes]);
{{ ... }}