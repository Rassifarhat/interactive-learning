// types/MindMapNode.ts
export interface MindMapNode {
    name: string;
    id: string;
    summary?: string;
    children?: MindMapNode[];
  }
  