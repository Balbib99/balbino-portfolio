import type { ReactNode } from "react";
import type { Project } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { ChipRow } from "./Chip";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const CaseBlock = ({ title, children }: { title: string; children: ReactNode }) => (
  <div>
    <h4 className="mb-2.5 font-mono text-xs font-semibold lowercase text-ink-faint">
      <span aria-hidden="true">// </span>
      {title}
    </h4>
    {children}
  </div>
);

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { t } = useLanguage();
  const { caseStudy } = project;

  return (
    <div className="group border-b border-line-strong py-14">
      <div className="mb-3.5 flex flex-wrap items-baseline justify-between gap-5">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm text-ink-faint">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="text-2xl">{project.name}</h3>
        </div>
        <span className="flex shrink-0 gap-5">
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-line-strong font-mono text-sm font-semibold text-ink transition hover:text-ink-soft"
            >
              {t.buttons.viewDemo}
            </a>
          ) : null}
          <a
            href={project.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-line-strong font-mono text-sm font-semibold text-ink transition hover:text-ink-soft"
          >
            {t.buttons.viewCode}
          </a>
        </span>
      </div>

      <div className="grid items-start gap-7 lg:grid-cols-[1fr_0.78fr] lg:gap-11">
        <div>
          <p className="mb-5 leading-relaxed text-ink-soft">{project.description}</p>
          <ChipRow items={project.technologies.slice(0, 8)} />
        </div>

        {project.visual ? (
          <div className="aspect-[16/10] overflow-hidden rounded-lg border border-line-strong">
            <img
              src={project.visual.src}
              alt={project.visual.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top grayscale contrast-[1.05] transition duration-500 group-hover:grayscale-0"
            />
          </div>
        ) : null}
      </div>

      <details className="group/case mt-7 border-t border-line pt-4">
        <summary className="inline-flex items-center gap-2.5 font-mono text-sm text-ink-soft transition hover:text-ink">
          <span
            aria-hidden="true"
            className="grid h-[22px] w-[22px] place-items-center rounded-full border border-line-strong transition-transform duration-200 group-open/case:rotate-45"
          >
            +
          </span>
          {t.buttons.technicalDetails}
        </summary>

        <div className="grid gap-8 pt-6 md:grid-cols-2 md:gap-x-11">
          <CaseBlock title={t.projects.card.problem}>
            <p className="text-sm leading-relaxed text-ink-soft">{caseStudy.problem}</p>
          </CaseBlock>
          <CaseBlock title={t.projects.card.solution}>
            <p className="text-sm leading-relaxed text-ink-soft">{caseStudy.solution}</p>
          </CaseBlock>
          <CaseBlock title={t.projects.card.technicalDecisions}>
            <ul className="flex flex-col gap-2">
              {caseStudy.technicalDecisions.slice(0, 4).map((decision) => (
                <li key={decision} className="relative pl-5 text-sm leading-relaxed text-ink-soft">
                  <span aria-hidden="true" className="absolute left-0 top-[0.62em] h-px w-1.5 bg-ink-faint" />
                  {decision}
                </li>
              ))}
            </ul>
          </CaseBlock>
          <CaseBlock title={t.projects.card.result}>
            <p className="text-sm leading-relaxed text-ink-soft">{caseStudy.result}</p>
          </CaseBlock>
        </div>
      </details>
    </div>
  );
};
