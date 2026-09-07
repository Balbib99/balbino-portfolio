import type { ReactNode } from "react";

export const Chip = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center rounded-md border border-line-strong px-2.5 py-1 font-mono text-xs lowercase text-ink-soft">
    {children}
  </span>
);

export const ChipRow = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <Chip key={item}>{item}</Chip>
    ))}
  </div>
);
