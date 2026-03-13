"use client";

import { useState, useMemo } from "react";
import { focusNodes, focusEdges } from "@/data/focus-areas";

export function FocusGraph() {
  const [hovered, setHovered] = useState<string | null>(null);

  const adjacency = useMemo(() => {
    const adj = new Map<string, Set<string>>();
    for (const node of focusNodes) adj.set(node.id, new Set());
    for (const edge of focusEdges) {
      adj.get(edge.from)?.add(edge.to);
      adj.get(edge.to)?.add(edge.from);
    }
    return adj;
  }, []);

  const isConnected = (id: string) =>
    hovered !== null && (id === hovered || (adjacency.get(hovered)?.has(id) ?? false));

  return (
    <div className="flex flex-wrap gap-2.5">
      {focusNodes.map((node) => {
        const active = hovered === node.id;
        const connected = isConnected(node.id);
        const dimmed = hovered !== null && !connected;

        return (
          <div
            key={node.id}
            onMouseEnter={() => setHovered(node.id)}
            onMouseLeave={() => setHovered(null)}
            className={`group relative px-4 py-2.5 rounded-xl border cursor-default transition-all duration-300 select-none ${
              active
                ? "bg-blue-50 dark:bg-blue-500/15 border-blue-300 dark:border-blue-500/40 shadow-sm shadow-blue-500/10 -translate-y-0.5"
                : connected
                ? "bg-blue-50/50 dark:bg-blue-500/5 border-blue-200/60 dark:border-blue-500/20"
                : dimmed
                ? "bg-white/50 dark:bg-slate-800/20 border-slate-100/50 dark:border-slate-800/50 opacity-30"
                : node.tier === "primary"
                ? "bg-white dark:bg-slate-800/40 border-blue-200/40 dark:border-blue-500/15"
                : "bg-white dark:bg-slate-800/40 border-slate-100 dark:border-slate-700"
            }`}
          >
            <span className="mr-1.5 text-sm">{node.emoji}</span>
            <span
              className={`text-sm font-bold transition-colors duration-300 ${
                active
                  ? "text-blue-600 dark:text-blue-400"
                  : connected
                  ? "text-blue-600/80 dark:text-blue-400/80"
                  : dimmed
                  ? "text-slate-400 dark:text-slate-600"
                  : "text-slate-700 dark:text-slate-300"
              }`}
            >
              {node.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
