import type { MDXComponents } from "mdx/types";

function Accent({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-blue-600 dark:text-blue-400 font-bold">
      {children}
    </span>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Accent,
    p: ({ children }) => <p>{children}</p>,
    strong: ({ children }) => (
      <strong className="text-slate-900 dark:text-white font-bold">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="not-italic underline decoration-blue-500/30 underline-offset-4">
        {children}
      </em>
    ),
  };
}
