import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border border-teal-600 bg-teal-600 text-white shadow-soft hover:border-teal-500 hover:bg-teal-500 dark:border-teal-400 dark:bg-teal-400 dark:text-slate-950 dark:hover:border-teal-300 dark:hover:bg-teal-300",
  secondary:
    "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-950 dark:border-slate-600 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800 dark:hover:text-white",
  ghost:
    "text-slate-800 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-white",
};

export const LinkButton = ({ children, className = "", variant = "secondary", ...props }: LinkButtonProps) => (
  <a
    className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 ${variants[variant]} ${className}`}
    {...props}
  >
    {children}
  </a>
);
