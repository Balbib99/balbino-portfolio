import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Experience } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

type ExperienceCardProps = {
  experience: Experience;
  isLast: boolean;
};

const easeOut = [0.16, 1, 0.3, 1] as const;

export const ExperienceCard = ({ experience, isLast }: ExperienceCardProps) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const rowId = `${experience.company}-${experience.role}`.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={isLast ? "" : "border-b border-line"}>
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls={`${rowId}-panel`}
        className="flex w-full flex-col gap-3 px-5 py-4 text-left transition hover:bg-surface-2 focus-visible:outline-offset-[-2px] sm:flex-row sm:items-center sm:justify-between sm:gap-6"
      >
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-ink">
            {experience.role} <span className="font-normal text-ink-muted">· {experience.company}</span>
          </h3>
          <p className="mt-1 font-mono text-xs text-ink-muted">
            {experience.location} · {experience.type}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3 sm:flex-row-reverse">
          <span
            className={`text-ink-muted transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
            aria-hidden="true"
          >
            ▸
          </span>
          <span className="rounded-sm border border-line-strong px-2.5 py-1 font-mono text-xs text-ink-secondary">
            {experience.period}
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={`${rowId}-panel`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6">
              <p className="text-sm leading-relaxed text-ink-secondary">{experience.summary}</p>

              <div className="mt-5">
                <p className="font-mono text-xs lowercase text-ink-muted">{t.experience.responsibilities}</p>
                <ul className="mt-2.5 space-y-2">
                  {experience.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-secondary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <p className="font-mono text-xs lowercase text-ink-muted">{t.experience.technologies}</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-sm border border-line-strong px-2.5 py-1 font-mono text-xs text-ink-secondary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-md border border-signal/40 bg-signal/5 p-4">
                <p className="font-mono text-xs lowercase text-signal-strong">{t.experience.value}</p>
                <ul className="mt-2.5 space-y-2">
                  {experience.valuePoints.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-secondary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
