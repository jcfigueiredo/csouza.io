# Timeline & Focus Graph Redesign

## Problem

Two sections of csouza.io need redesign:

1. **Timeline ("The Journey")** — The alternating card layout wastes half the viewport on empty space. Cards are uniform, and the thin center line creates no narrative connection between roles.
2. **Focus Areas ("What I Build Around")** — Currently a flat tag cloud with no relationships shown. Doesn't communicate that these expertise areas form a coherent, interconnected system.

## Design Decisions

### Timeline: Filled Alternating with Achievements

**Desktop (≥768px):**
- Keep the alternating left/right grid layout (`grid-cols-2` with center timeline).
- Card sits on one side; the opposite side now shows **achievement bullets** ("Key Milestones") for that role.
- Current role (first entry) gets a highlighted border glow (blue gradient) and a "NOW" badge.
- Timeline dots are slightly larger; the current role dot has a subtle pulse animation.
- Center line and dots remain as visual connectors.

**Mobile (<768px):**
- Collapse to single column with a left-aligned timeline rail.
- The center line moves to the left edge.
- Achievements render as a compact bullet list below the description within each card (not a separate column).
- No alternating — all cards stack vertically.

**Data changes:**
- Add `achievements: string[]` field to each entry in `src/data/experience.ts` (3–4 bullets per role).
- Remove the `as const` assertion from the `experience` array and add an explicit `Experience` interface type annotation instead. The `as const` creates `readonly` tuple types that conflict with `string[]` in the interface.

### Focus Areas: 3D Grid Graph (R3F + drei)

**Nodes (14 total):**

| Row | Label | Nodes |
|-----|-------|-------|
| 1 — AI & Agents | Current focus | 🤖 AI Platform Eng, ⚡ Agentic Systems, 🧠 Human-AI Interaction |
| 2 — Architecture | How things connect | 🌐 Distributed Systems, 🔗 Hypermedia / HATEOAS, 🧩 Domain-Driven Design, 📡 Event-Driven Architecture |
| 3 — Platforms & Delivery | Enabling infrastructure | ☁️ Infra as Code, 🛠 Developer Experience, 📚 RAG & Knowledge Systems, 🏗️ 0-to-1 Platforms |
| 4 — Culture & Process | How teams work | 🚀 Lean & XP, 👥 Org Building, 🎯 Product Engineering |

**Connections (edges):**

Strong connections (solid, higher opacity):
- AI Platform Eng ↔ Agentic Systems
- Agentic Systems ↔ Human-AI Interaction
- Agentic Systems ↔ RAG & Knowledge Systems
- AI Platform Eng ↔ Distributed Systems
- Distributed Systems ↔ Event-Driven Architecture
- HATEOAS ↔ DDD
- DDD ↔ Event-Driven Architecture
- DDD ↔ Agentic Systems
- Infra as Code ↔ Distributed Systems
- DevEx ↔ Lean & XP
- Org Building ↔ Product Engineering
- Product Engineering ↔ Lean & XP

Indirect connections (dashed, lower opacity):
- AI Platform Eng ↔ Infra as Code
- Agentic Systems ↔ Distributed Systems
- HATEOAS ↔ Agentic Systems
- DevEx ↔ Infra as Code
- 0-to-1 Platforms ↔ Product Engineering
- 0-to-1 Platforms ↔ Org Building
- Product Engineering ↔ AI Platform Eng
- RAG & Knowledge Systems ↔ DDD

**3D rendering (react-three-fiber + drei):**
- `<Canvas>` embedded in the focus areas section.
- Transparent background — blends with the page's existing bg.
- Nodes: `<RoundedBox>` meshes from drei, arranged on the XY plane in the 4-row offset grid.
- Text labels: drei `<Text>` component for the text label only. Emoji is rendered as an HTML overlay via drei's `<Html>` component (standard SDF fonts used by `<Text>`/troika do not support emoji glyphs).
- Top row (AI & Agents) nodes have blue emissive glow; other rows use neutral slate.
- Connection lines: drei `<Line>` elements between connected nodes.

**Interactions:**
- Hover a node → it lifts on the Z-axis toward camera (+0.3 units), scales up ~1.1x, emissive glow intensifies.
- Hover a node → connected lines brighten to full opacity, unconnected lines and nodes fade to ~0.2 opacity.
- No drag/orbit — the camera has a fixed perspective.
- When `prefers-reduced-motion` is active, disable hover lift animation (keep highlight only).

**Lighting:**
- Ambient light (intensity ~0.6) for base visibility.
- One directional light from above-right for subtle shadows.

**Performance:**
- `frameloop="always"` on the Canvas — the 14 low-polygon nodes are very cheap to render, and this avoids complexity with manual `invalidate()` calls.
- Keep the scene minimal: no post-processing, no shadows on the ground plane.

**Mobile fallback (<768px):**
- Do not render the `<Canvas>` component in the React tree at all.
- Render a flat CSS/HTML version instead: nodes as styled `<div>` tags in a 2-column grid, no connection lines.
- Use a `useMediaQuery` hook to conditionally render `<FocusGraph>` vs `<FocusGraphFallback>`. **Important:** CSS `display:none` is NOT sufficient — the dynamic import must be prevented at the React level by not rendering the component, otherwise three.js will still be fetched.
- This avoids loading the three.js bundle on mobile entirely.

## Architecture

### New Files

| File | Purpose |
|------|---------|
| `src/components/focus-graph.tsx` | Client component. The 3D R3F canvas + node/edge logic. |
| `src/components/focus-graph-fallback.tsx` | Client component. Mobile-only flat grid (CSS). |
| `src/data/focus-areas.ts` | New data file. Nodes with positions, edges with connection types. Replaces the `focusAreas` array in `site.ts`. |

### Modified Files

| File | Change |
|------|--------|
| `src/data/experience.ts` | Add `achievements: string[]` to each entry. |
| `src/data/site.ts` | Remove `focusAreas` export (moved to `focus-areas.ts`). Note: "Infrastructure as Code" is shortened to "Infra as Code" in the new data — intentional for node sizing. |
| `src/app/page.tsx` | Replace focus areas tag cloud with `<FocusGraph />`. Update timeline section to render achievements on the opposite side + current role highlight. |
| `src/components/animated-section.tsx` | No changes needed — the timeline and graph sections already use `AnimatedSection`. |
| `package.json` | Add `@react-three/fiber` and `@react-three/drei`. |

### Data Model

```typescript
// src/data/focus-areas.ts

export interface FocusNode {
  id: string;
  label: string;
  emoji: string;
  row: number;       // 0-3, determines Y position
  col: number;       // position within row
  tier: "primary" | "secondary";  // primary = blue glow, secondary = slate
}

export interface FocusEdge {
  from: string;      // node id
  to: string;        // node id
  strength: "strong" | "indirect";
}

export const focusNodes: FocusNode[] = [
  // Row 0 — AI & Agents
  { id: "ai-platform", label: "AI Platform Eng", emoji: "🤖", row: 0, col: 0, tier: "primary" },
  { id: "agentic", label: "Agentic Systems", emoji: "⚡", row: 0, col: 1, tier: "primary" },
  { id: "human-ai", label: "Human-AI Interaction", emoji: "🧠", row: 0, col: 2, tier: "primary" },
  // Row 1 — Architecture
  { id: "distributed", label: "Distributed Systems", emoji: "🌐", row: 1, col: 0, tier: "secondary" },
  { id: "hateoas", label: "Hypermedia / HATEOAS", emoji: "🔗", row: 1, col: 1, tier: "secondary" },
  { id: "ddd", label: "Domain-Driven Design", emoji: "🧩", row: 1, col: 2, tier: "secondary" },
  { id: "eda", label: "Event-Driven Arch", emoji: "📡", row: 1, col: 3, tier: "secondary" },
  // Row 2 — Platforms & Delivery
  { id: "iac", label: "Infra as Code", emoji: "☁️", row: 2, col: 0, tier: "secondary" },
  { id: "devex", label: "Developer Experience", emoji: "🛠", row: 2, col: 1, tier: "secondary" },
  { id: "rag", label: "RAG & Knowledge Systems", emoji: "📚", row: 2, col: 2, tier: "secondary" },
  { id: "zero-to-one", label: "0-to-1 Platforms", emoji: "🏗️", row: 2, col: 3, tier: "secondary" },
  // Row 3 — Culture & Process
  { id: "lean", label: "Lean & XP", emoji: "🚀", row: 3, col: 0, tier: "secondary" },
  { id: "org", label: "Org Building", emoji: "👥", row: 3, col: 1, tier: "secondary" },
  { id: "product", label: "Product Engineering", emoji: "🎯", row: 3, col: 2, tier: "secondary" },
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
```

```typescript
// src/data/experience.ts — updated shape

export interface Experience {
  company: string;
  role: string;
  period: string;
  logo: string;
  description: string;
  tech: string[];
  achievements: string[];  // NEW
}
```

### Timeline Component Changes

In `src/app/page.tsx`, the timeline section updates:

- Each `StaggerItem` renders a 2-column grid (same as now).
- The "empty" column now renders achievement bullets instead of being blank.
- First entry (`i === 0`) gets:
  - Card border: `border-blue-500/30` with `shadow-blue-500/10` glow.
  - A "NOW" badge: absolutely positioned `<span>` in the card.
  - Timeline dot: add a CSS `animate-pulse` ring behind it.
- Mobile: achievements render inside the card, below the description paragraph, as a `<ul>` with small bullet points.

### Focus Graph Component

`src/components/focus-graph.tsx`:
- Dynamic import with `next/dynamic` and `ssr: false` (three.js cannot SSR).
- `<Canvas frameloop="demand" camera={{ position: [0, 0, 8], fov: 50 }}>`.
- Map `focusNodes` to 3D positions: `row` → Y (top to bottom), `col` → X (with per-row offset for the staggered effect).
- Each node: `<RoundedBox>` with `<Text>` label. `onPointerOver`/`onPointerOut` to set hovered state.
- Hovered node: `position.z` animates to +0.3 via manual lerp in `useFrame` (no `@react-spring/three` dependency — keep bundle small).
- Connection lines: `<Line>` from drei, opacity controlled by hover state.

`src/components/focus-graph-fallback.tsx`:
- Simple CSS grid (2 columns on mobile).
- Nodes as styled divs with emoji + label.
- No connection lines.

### Bundle Strategy

- `@react-three/fiber` and `@react-three/drei` are dynamically imported only when the focus graph section enters the viewport.
- Use `next/dynamic` with `ssr: false` to prevent SSR of the 3D canvas.
- Mobile never loads the three.js bundle at all — the fallback component is a lightweight CSS grid.

## Build Sequence

1. Add achievements data to `experience.ts`.
2. Create `src/data/focus-areas.ts` with nodes and edges.
3. Update timeline section in `page.tsx` (achievements, current role highlight, mobile layout).
4. Install `@react-three/fiber` and `@react-three/drei`.
5. Build `focus-graph.tsx` (3D canvas, nodes, edges, hover interaction).
6. Build `focus-graph-fallback.tsx` (mobile CSS grid).
7. Wire up dynamic import in `page.tsx` with media query switch.
8. Remove old `focusAreas` from `site.ts`, update imports.
9. Test: desktop 3D interaction, mobile fallback, light/dark themes, reduced motion.
