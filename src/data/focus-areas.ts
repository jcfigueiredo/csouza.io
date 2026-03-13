export interface FocusNode {
  id: string;
  label: string;
  emoji: string;
  row: number;
  col: number;
  tier: "primary" | "secondary";
}

export interface FocusEdge {
  from: string;
  to: string;
  strength: "strong" | "indirect";
}

export const focusNodes: FocusNode[] = [
  // Row 0 — AI & Agents
  { id: "ai-platform", label: "AI Platform Eng", emoji: "\u{1F916}", row: 0, col: 0, tier: "primary" },
  { id: "agentic", label: "Agentic Systems", emoji: "\u26A1", row: 0, col: 1, tier: "primary" },
  { id: "human-ai", label: "Human-AI Interaction", emoji: "\u{1F9E0}", row: 0, col: 2, tier: "primary" },
  // Row 1 — Architecture
  { id: "distributed", label: "Distributed Systems", emoji: "\u{1F310}", row: 1, col: 0, tier: "secondary" },
  { id: "hateoas", label: "Hypermedia / HATEOAS", emoji: "\u{1F517}", row: 1, col: 1, tier: "secondary" },
  { id: "ddd", label: "Domain-Driven Design", emoji: "\u{1F9E9}", row: 1, col: 2, tier: "secondary" },
  { id: "eda", label: "Event-Driven Arch", emoji: "\u{1F4E1}", row: 1, col: 3, tier: "secondary" },
  // Row 2 — Platforms & Delivery
  { id: "iac", label: "Infra as Code", emoji: "\u2601\uFE0F", row: 2, col: 0, tier: "secondary" },
  { id: "devex", label: "Developer Experience", emoji: "\u{1F6E0}", row: 2, col: 1, tier: "secondary" },
  { id: "rag", label: "RAG & Knowledge Systems", emoji: "\u{1F4DA}", row: 2, col: 2, tier: "secondary" },
  { id: "zero-to-one", label: "0-to-1 Platforms", emoji: "\u{1F3D7}\uFE0F", row: 2, col: 3, tier: "secondary" },
  // Row 3 — Culture & Process
  { id: "lean", label: "Lean & XP", emoji: "\u{1F680}", row: 3, col: 0, tier: "secondary" },
  { id: "org", label: "Org Building", emoji: "\u{1F465}", row: 3, col: 1, tier: "secondary" },
  { id: "product", label: "Product Engineering", emoji: "\u{1F3AF}", row: 3, col: 2, tier: "secondary" },
];

export const focusEdges: FocusEdge[] = [
  // Strong
  { from: "ai-platform", to: "agentic", strength: "strong" },
  { from: "agentic", to: "human-ai", strength: "strong" },
  { from: "agentic", to: "rag", strength: "strong" },
  { from: "ai-platform", to: "distributed", strength: "strong" },
  { from: "distributed", to: "eda", strength: "strong" },
  { from: "hateoas", to: "ddd", strength: "strong" },
  { from: "ddd", to: "eda", strength: "strong" },
  { from: "ddd", to: "agentic", strength: "strong" },
  { from: "iac", to: "distributed", strength: "strong" },
  { from: "devex", to: "lean", strength: "strong" },
  { from: "org", to: "product", strength: "strong" },
  { from: "product", to: "lean", strength: "strong" },
  // Indirect
  { from: "ai-platform", to: "iac", strength: "indirect" },
  { from: "agentic", to: "distributed", strength: "indirect" },
  { from: "hateoas", to: "agentic", strength: "indirect" },
  { from: "devex", to: "iac", strength: "indirect" },
  { from: "zero-to-one", to: "product", strength: "indirect" },
  { from: "zero-to-one", to: "org", strength: "indirect" },
  { from: "product", to: "ai-platform", strength: "indirect" },
  { from: "rag", to: "ddd", strength: "indirect" },
];
