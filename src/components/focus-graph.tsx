"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { focusNodes, focusEdges } from "@/data/focus-areas";

const springEase = [0.16, 1, 0.3, 1] as const;

// Pointy-top hexagon: flat sides on left/right, points at top/bottom
const HEX_W = 130;
const HEX_H = 150;
const GAP = 3; // thin gap for visible border between hexes

const COL_STEP = HEX_W + GAP; // 133
const ROW_STEP = HEX_H * 0.75 + GAP; // 115.5
const ROW_OFFSET = COL_STEP / 2; // 66.5

// SVG polygon for pointy-top hex (1.5px inset for stroke room)
const HEX_POINTS = "65,2 128,38.5 128,111.5 65,148 2,111.5 2,38.5";

// Layout: 3-4-3-4 alternating rows for diamond honeycomb
// Row 0 (3 items, offset by half col): AI & Agents
// Row 1 (4 items, flush): Architecture
// Row 2 (3 items, offset): Platforms core
// Row 3 (4 items, flush): Delivery + Culture
const HEX_LAYOUT: { nodeIndex: number; x: number; y: number }[] = [
  // Row 0 — 3 items (centered via half-col offset)
  { nodeIndex: 0, x: ROW_OFFSET, y: 0 },
  { nodeIndex: 1, x: ROW_OFFSET + COL_STEP, y: 0 },
  { nodeIndex: 2, x: ROW_OFFSET + COL_STEP * 2, y: 0 },
  // Row 1 — 4 items (flush left)
  { nodeIndex: 3, x: 0, y: ROW_STEP },
  { nodeIndex: 4, x: COL_STEP, y: ROW_STEP },
  { nodeIndex: 5, x: COL_STEP * 2, y: ROW_STEP },
  { nodeIndex: 6, x: COL_STEP * 3, y: ROW_STEP },
  // Row 2 — 3 items (centered)
  { nodeIndex: 7, x: ROW_OFFSET, y: ROW_STEP * 2 },
  { nodeIndex: 8, x: ROW_OFFSET + COL_STEP, y: ROW_STEP * 2 },
  { nodeIndex: 9, x: ROW_OFFSET + COL_STEP * 2, y: ROW_STEP * 2 },
  // Row 3 — 4 items (flush left)
  { nodeIndex: 10, x: 0, y: ROW_STEP * 3 },
  { nodeIndex: 11, x: COL_STEP, y: ROW_STEP * 3 },
  { nodeIndex: 12, x: COL_STEP * 2, y: ROW_STEP * 3 },
  { nodeIndex: 13, x: COL_STEP * 3, y: ROW_STEP * 3 },
];

const GRID_W = COL_STEP * 3 + HEX_W; // 529
const GRID_H = ROW_STEP * 3 + HEX_H; // 496.5

export function FocusGraph() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const adjacency = useMemo(() => {
    const adj = new Map<string, Set<string>>();
    for (const node of focusNodes) adj.set(node.id, new Set());
    for (const edge of focusEdges) {
      adj.get(edge.from)?.add(edge.to);
      adj.get(edge.to)?.add(edge.from);
    }
    return adj;
  }, []);

  const handleEnter = useCallback(
    (id: string) => {
      if (!hasInteracted) setHasInteracted(true);
      setHovered(id);
    },
    [hasInteracted],
  );

  const handleLeave = useCallback(() => setHovered(null), []);

  const isConnected = (id: string) =>
    hovered !== null &&
    (id === hovered || (adjacency.get(hovered)?.has(id) ?? false));

  // Responsive: scale grid to fit container width
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      setScale(Math.min(1, w / GRID_W));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <div
        className="relative mx-auto"
        style={{
          width: GRID_W * scale,
          height: GRID_H * scale,
        }}
      >
        <div
          className="absolute origin-top-left will-change-transform"
          style={{
            width: GRID_W,
            height: GRID_H,
            transform: `scale(${scale})`,
          }}
        >
          {HEX_LAYOUT.map(({ nodeIndex, x, y }, i) => {
            const node = focusNodes[nodeIndex];
            const active = hovered === node.id;
            const connected = isConnected(node.id);
            const dimmed = hovered !== null && !connected;
            const ri = Math.floor(y / ROW_STEP);

            return (
              <motion.div
                key={node.id}
                className="absolute cursor-default select-none"
                style={{ left: x, top: y, width: HEX_W, height: HEX_H }}
                initial={reduced ? false : { opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: dimmed ? 0.2 : 1,
                  scale: dimmed ? 0.96 : active ? 1.05 : 1,
                  y: active ? -4 : 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: springEase,
                  delay: reduced ? 0 : ri * 0.1 + (i % 4) * 0.05,
                }}
                onMouseEnter={() => handleEnter(node.id)}
                onMouseLeave={handleLeave}
              >
                {/* Hex shape */}
                <svg
                  className="absolute inset-0 w-full h-full overflow-visible"
                  viewBox={`0 0 ${HEX_W} ${HEX_H}`}
                >
                  {active && (
                    <polygon
                      points={HEX_POINTS}
                      fill="none"
                      className="stroke-blue-400/30 dark:stroke-blue-400/20"
                      strokeWidth="8"
                      style={{ filter: "blur(6px)" }}
                    />
                  )}
                  <polygon
                    points={HEX_POINTS}
                    className={`transition-all duration-300 ${
                      active
                        ? "fill-blue-50 stroke-blue-300 dark:fill-blue-500/15 dark:stroke-blue-500/40"
                        : connected
                          ? "fill-blue-50/60 stroke-blue-200 dark:fill-blue-500/10 dark:stroke-blue-500/30"
                          : node.tier === "primary"
                            ? "fill-blue-50/30 stroke-slate-200 dark:fill-blue-500/5 dark:stroke-slate-700"
                            : "fill-white stroke-slate-200 dark:fill-slate-800/60 dark:stroke-slate-700"
                    }`}
                    strokeWidth={active ? 2 : 1.5}
                  />
                </svg>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-2 pointer-events-none">
                  <span className="text-xl mb-0.5">{node.emoji}</span>
                  <span
                    className={`text-[10px] font-bold text-center leading-tight transition-colors duration-300 max-w-[100px] ${
                      active
                        ? "text-blue-600 dark:text-blue-400"
                        : connected
                          ? "text-blue-600/80 dark:text-blue-400/80"
                          : dimmed
                            ? "text-slate-400 dark:text-slate-600"
                            : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {node.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: hasInteracted ? 0 : 0.5 }}
        transition={{
          duration: hasInteracted ? 0.3 : 1,
          delay: hasInteracted ? 0 : 0.8,
        }}
        className="text-[11px] font-mono text-slate-400 dark:text-slate-500 tracking-wide pointer-events-none mt-4 text-center"
      >
        Hover to explore connections
      </motion.p>
    </div>
  );
}
