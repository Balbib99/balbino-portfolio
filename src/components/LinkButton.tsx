import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "panel" | "panelPrimary";
};

const variants = {
  panel:
    "rounded-sm border border-line-strong bg-surface-2 font-mono text-[0.8125rem] text-ink hover:border-signal hover:bg-surface-3",
  panelPrimary:
    "rounded-sm border border-signal bg-signal/10 font-mono text-[0.8125rem] text-signal-strong hover:bg-signal hover:text-surface-0",
};

export const LinkButton = ({ children, className = "", variant = "panel", ...props }: LinkButtonProps) => (
  <a
    className={`inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`}
    {...props}
  >
    {children}
  </a>
);
