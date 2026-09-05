import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { useLanguage } from "../context/LanguageContext";
import type { Project } from "../data/portfolioData";
import { LinkButton } from "./LinkButton";

type ProjectCardProps = {
  project: Project;
  index: number;
  isLast: boolean;
};

const easeOut = [0.16, 1, 0.3, 1] as const;
const tabKeys = ["summary", "architecture", "decisions", "outcome"] as const;
type TabKey = (typeof tabKeys)[number];

const Chip = ({ children }: { children: ReactNode }) => (
  <span className="rounded-sm border border-line-strong px-2.5 py-1 font-mono text-xs text-ink-secondary">
    {children}
  </span>
);

const CaseStudySection = ({
  title,
  children,
  accent = false,
}: {
  title: string;
  children: ReactNode;
  accent?: boolean;
}) => (
  <section className={`rounded-md border p-4 ${accent ? "border-signal/40 bg-signal/5" : "border-line bg-surface-2"}`}>
    <h4 className={`font-mono text-xs lowercase ${accent ? "text-signal-strong" : "text-ink-muted"}`}>{title}</h4>
    <div className="mt-2.5 text-sm leading-relaxed text-ink-secondary">{children}</div>
  </section>
);

export const ProjectCard = ({ project, index, isLast }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("summary");
  const { t } = useLanguage();
  const rowId = project.name.toLowerCase().replace(/\s+/g, "-");
  const tabs: { key: TabKey; label: string }[] = tabKeys.map((key) => ({ key, label: t.projects.card.tabs[key] }));
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (tabIndex: number) => {
    const nextIndex = (tabIndex + tabs.length) % tabs.length;
    setActiveTab(tabs[nextIndex].key);
    tabRefs.current[nextIndex]?.focus();
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, tabIndex: number) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusTab(tabIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusTab(tabIndex - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(tabs.length - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: easeOut, delay: Math.min(index, 2) * 0.08 }}
      className={isLast ? "" : "border-b border-line"}
    >
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls={`${rowId}-panel`}
        className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-surface-2 focus-visible:outline-offset-[-2px]"
      >
        {project.visual ? (
          <span className="h-12 w-20 shrink-0 overflow-hidden rounded-sm border border-line-strong bg-surface-2">
            <img
              src={project.visual.src}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
          </span>
        ) : null}

        <div className="min-w-0 flex-1">
          <h3 className="font-mono text-base font-medium text-ink">{rowId}</h3>
          <p className="mt-0.5 truncate text-sm text-ink-muted">{project.subtitle}</p>
        </div>

        <div className="hidden shrink-0 gap-2 lg:flex">
          {project.technologies.slice(0, 3).map((technology) => (
            <Chip key={technology}>{technology}</Chip>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden items-center gap-1.5 font-mono text-xs text-signal-strong sm:flex">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
            prod
          </span>
          <span
            className={`text-ink-muted transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
            aria-hidden="true"
          >
            ▸
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
            transition={{ duration: 0.32, ease: easeOut }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6">
              {project.visual ? (
                <div className="overflow-hidden rounded-md border border-line-strong">
                  <div className="flex items-center gap-1.5 border-b border-line-strong bg-surface-2 px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-ink-muted/30" />
                    <span className="h-2.5 w-2.5 rounded-full bg-ink-muted/30" />
                    <span className="h-2.5 w-2.5 rounded-full bg-ink-muted/30" />
                    {project.links.demo ? (
                      <span className="ml-2 truncate rounded-sm bg-surface-3 px-2 py-0.5 font-mono text-[0.6875rem] text-ink-muted">
                        {project.links.demo.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </span>
                    ) : null}
                  </div>
                  <img
                    src={project.visual.src}
                    alt={project.visual.alt}
                    className="aspect-[16/10] w-full bg-surface-2 object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : null}

              <p className="mt-5 text-sm leading-relaxed text-ink-secondary">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <Chip key={technology}>{technology}</Chip>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.links.demo ? (
                  <LinkButton
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="panelPrimary"
                  >
                    {t.buttons.viewDemo}
                  </LinkButton>
                ) : null}
                <LinkButton href={project.links.code} target="_blank" rel="noopener noreferrer" variant="panel">
                  {t.buttons.viewCode}
                </LinkButton>
              </div>

              <div className="mt-6 rounded-md border border-line bg-surface-1 p-4 sm:p-5">
                <div role="tablist" aria-label={t.buttons.technicalDetails} className="flex flex-wrap gap-2">
                  {tabs.map((tab, tabIndex) => (
                    <button
                      key={tab.key}
                      ref={(element) => {
                        tabRefs.current[tabIndex] = element;
                      }}
                      type="button"
                      role="tab"
                      id={`${rowId}-tab-${tab.key}`}
                      aria-selected={activeTab === tab.key}
                      aria-controls={`${rowId}-tabpanel-${tab.key}`}
                      tabIndex={activeTab === tab.key ? 0 : -1}
                      onClick={() => setActiveTab(tab.key)}
                      onKeyDown={(event) => handleTabKeyDown(event, tabIndex)}
                      className={`relative rounded-sm border px-3.5 py-1.5 font-mono text-xs transition-colors duration-200 ${
                        activeTab === tab.key
                          ? "border-ink text-surface-0"
                          : "border-line-strong bg-surface-2 text-ink-secondary hover:text-ink"
                      }`}
                    >
                      {activeTab === tab.key ? (
                        <motion.span
                          layoutId={`${rowId}-tab-pill`}
                          className="absolute inset-0 rounded-sm bg-ink"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      ) : null}
                      <span className="relative">{tab.label}</span>
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    id={`${rowId}-tabpanel-${activeTab}`}
                    role="tabpanel"
                    aria-labelledby={`${rowId}-tab-${activeTab}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.16, ease: easeOut }}
                    className="mt-4 grid gap-3"
                  >
                    {activeTab === "summary" ? (
                      <>
                        <CaseStudySection title={t.projects.card.overview} accent>
                          <p>{project.caseStudy.overview}</p>
                        </CaseStudySection>
                        <div className="grid gap-3 md:grid-cols-2">
                          <CaseStudySection title={t.projects.card.problem}>
                            <p>{project.caseStudy.problem}</p>
                          </CaseStudySection>
                          <CaseStudySection title={t.projects.card.solution}>
                            <p>{project.caseStudy.solution}</p>
                          </CaseStudySection>
                        </div>
                        <CaseStudySection title={t.projects.card.mainFeatures}>
                          <ul className="grid gap-2 sm:grid-cols-2">
                            {project.caseStudy.mainFeatures.map((feature) => (
                              <li key={feature} className="flex gap-2.5">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CaseStudySection>
                      </>
                    ) : null}

                    {activeTab === "architecture" ? (
                      <>
                        <CaseStudySection title={t.projects.card.techStack}>
                          <div className="flex flex-wrap gap-2">
                            {project.caseStudy.techStack.map((technology) => (
                              <Chip key={technology}>{technology}</Chip>
                            ))}
                          </div>
                        </CaseStudySection>

                        <div className="rounded-md border border-line bg-surface-2 p-4">
                          <h4 className="font-mono text-xs lowercase text-ink-muted">{t.projects.card.architecture}</h4>
                          <div className="mt-3 grid gap-2.5 sm:grid-cols-4">
                            {project.caseStudy.pipelineItems.map((item, stepIndex) => (
                              <div key={item} className="rounded-sm border border-line-strong bg-surface-1 p-3">
                                <p className="font-mono text-[0.6875rem] text-ink-muted">
                                  {t.projects.card.step} {stepIndex + 1}
                                </p>
                                <p className="mt-1 text-sm font-medium text-ink">{item}</p>
                              </div>
                            ))}
                          </div>
                          <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-ink-secondary md:grid-cols-2">
                            {project.caseStudy.architecture.map((item) => (
                              <li key={item} className="flex gap-2.5">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : null}

                    {activeTab === "decisions" ? (
                      <>
                        <CaseStudySection title={t.projects.card.role} accent>
                          <p>{project.caseStudy.role}</p>
                        </CaseStudySection>
                        <div className="rounded-md border border-line bg-surface-2 p-4">
                          <h4 className="font-mono text-xs lowercase text-ink-muted">
                            {t.projects.card.technicalDecisions}
                          </h4>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {project.caseStudy.technicalDecisions.map((decision) => (
                              <Chip key={decision}>{decision}</Chip>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : null}

                    {activeTab === "outcome" ? (
                      <div className="grid gap-3 md:grid-cols-2">
                        <CaseStudySection title={t.projects.card.result} accent>
                          <p>{project.caseStudy.result}</p>
                        </CaseStudySection>
                        <CaseStudySection title={t.projects.card.learning} accent>
                          <p>{project.caseStudy.learning}</p>
                        </CaseStudySection>
                      </div>
                    ) : null}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
};
