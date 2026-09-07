import type { ReactNode } from "react";

type PillBadgeProps = {
  href: string;
  label: string;
  icon: ReactNode;
  download?: boolean;
  external?: boolean;
};

export const PillBadge = ({ href, label, icon, download, external }: PillBadgeProps) => (
  <a
    href={href}
    download={download}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong py-1.5 pl-1.5 pr-4 text-sm text-ink transition hover:border-invert-bg hover:bg-invert-bg hover:text-invert-ink"
  >
    <span className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-invert-bg text-invert-ink transition group-hover:bg-invert-ink group-hover:text-invert-bg">
      {icon}
    </span>
    {label}
  </a>
);

const iconProps = {
  viewBox: "0 0 24 24",
  width: 14,
  height: 14,
  "aria-hidden": true,
} as const;

export const GithubIcon = () => (
  <svg {...iconProps} fill="currentColor">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

export const LinkedinIcon = () => (
  <svg {...iconProps} fill="currentColor">
    <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5A1.94 1.94 0 1 0 5.27 7.38 1.94 1.94 0 0 0 5.25 3.5ZM20.5 13.87c0-3.26-1.74-4.78-4.06-4.78a3.5 3.5 0 0 0-3.18 1.75V8.5H9.88c.04.92 0 12 0 12h3.38v-6.7c0-.36.03-.72.13-.98.29-.72.95-1.47 2.06-1.47 1.45 0 2.03 1.1 2.03 2.72v6.43h3.38l.14-6.63Z" />
  </svg>
);

export const DownloadIcon = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </svg>
);
