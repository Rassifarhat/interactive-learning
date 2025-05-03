// types/mind-map.ts
export interface MindMapNode {
  name: string;
  id: string;
  summary?: string;
  children?: MindMapNode[];
}

export interface Section {
  slug: string;
  text: string;
  path: string[];     // e.g. ['1-0', '1-2']
  children?: Section[];
  name?: string;
  summary?: string;
}