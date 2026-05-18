import { useState } from "react";
import type { ReactNode } from "react";
import type { Project } from "../data/portfolioData";
import { LinkButton } from "./LinkButton";
import { SkillBadge } from "./SkillBadge";

type ProjectCardProps = {
  project: Project;
};

const pipelineItems = ["Frontend", "Backend", "Base de datos", "Deploy"];

const getBadgeClassName = (index: number) =>
  index % 2 === 0
    ? "border-orange-300/40 bg-orange-300/10 text-orange-100 dark:border-orange-300/30 dark:bg-orange-300/10"
    : "border-teal-300/30 bg-teal-300/10 text-teal-100 dark:border-teal-300/30 dark:bg-teal-300/10";

const CaseStudySection = ({
  title,
  children,
  accent = false,
}: {
  title: string;
  children: ReactNode;
  accent?: boolean;
}) => (
  <section
    className={`rounded-lg border p-5 ${
      accent
        ? "border-teal-200 bg-teal-50/70 dark:border-teal-900 dark:bg-teal-950/20"
        : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
    }`}
  >
    <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">{title}</h4>
    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{children}</div>
  </section>
);

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const caseStudyId = `${project.name.toLowerCase().replace(/\s+/g, "-")}-case-study`;

  return (
    <article className="relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition duration-200 hover:border-orange-200 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-orange-900/70">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08] dark:opacity-[0.06]"
      >
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full border-[18px] border-orange-500" />
        <div className="absolute -left-6 top-0 h-96 w-40 rounded-full border-r-[10px] border-orange-500" />
        <div className="absolute right-12 top-8 h-28 w-28 rounded-full border-[8px] border-orange-500" />
        <div className="absolute bottom-10 right-0 h-px w-72 bg-orange-500" />
      </div>
      <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="relative flex min-h-80 flex-col justify-between overflow-hidden bg-slate-950 p-7 text-white dark:bg-slate-900">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[14px] border-orange-400/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-[linear-gradient(90deg,rgba(251,146,60,0.18),transparent_42%,rgba(45,212,191,0.12))]"
          />
          <div>
            <div className="flex flex-wrap gap-2">
              {project.badges.slice(0, 2).map((badge, index) => (
                <span
                  key={badge}
                  className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${getBadgeClassName(index)}`}
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-5 h-1 w-16 rounded-full bg-orange-400" />
            <h3 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{project.name}</h3>
            <p className="mt-2 text-base text-slate-300">{project.subtitle}</p>
            <p className="mt-4 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-200">
              Sports Analytics · Full Stack
            </p>
          </div>

          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Sports dashboard</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-300">
              {project.dashboardItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-white/10 bg-white/5 p-3 transition duration-200 hover:border-orange-300/40 hover:bg-orange-300/10"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-200">{item.label}</p>
                  <p className="mt-1 font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative p-7">
          <div className="flex flex-wrap gap-2">
            {project.badges.slice(2).map((badge, index) => (
              <span
                key={badge}
                className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${
                  index === 0
                    ? "bg-orange-50 text-orange-700 ring-1 ring-orange-200 dark:bg-orange-950/30 dark:text-orange-300 dark:ring-orange-900/70"
                    : "bg-teal-50 text-teal-700 ring-1 ring-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:ring-teal-900/70"
                }`}
              >
                {badge}
              </span>
            ))}
          </div>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <SkillBadge key={technology} label={technology} />
            ))}
          </div>

          <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <LinkButton href={project.links.demo} target="_blank" rel="noreferrer" variant="primary">
              Ver demo
            </LinkButton>
            <LinkButton href={project.links.code} target="_blank" rel="noreferrer">
              Ver código
            </LinkButton>
            <button
              type="button"
              aria-expanded={isCaseStudyOpen}
              aria-controls={caseStudyId}
              onClick={() => setIsCaseStudyOpen((current) => !current)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-slate-800 transition duration-200 hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-white dark:focus-visible:ring-offset-slate-950"
            >
              Detalles técnicos
              <span className={`transition-transform duration-200 ${isCaseStudyOpen ? "rotate-180" : ""}`} aria-hidden="true">
                v
              </span>
            </button>
          </div>

          <div
            id={caseStudyId}
            className={`grid transition-all duration-300 ease-out ${
              isCaseStudyOpen ? "mt-7 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/50 sm:p-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <CaseStudySection title="Problema">
                    <p>{project.caseStudy.problem}</p>
                  </CaseStudySection>
                  <CaseStudySection title="Solución">
                    <p>{project.caseStudy.solution}</p>
                  </CaseStudySection>
                </div>

                <div className="mt-4 rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                  <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">Arquitectura</h4>
                  <div className="mt-4 grid gap-3 sm:grid-cols-4">
                    {pipelineItems.map((item, index) => (
                      <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 p-3 transition duration-200 hover:border-orange-200 hover:bg-orange-50/70 dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-orange-900/70 dark:hover:bg-orange-950/20">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                          Paso {index + 1}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-950 dark:text-white">{item}</p>
                      </div>
                    ))}
                  </div>
                  <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300 md:grid-cols-2">
                    {project.caseStudy.architecture.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <CaseStudySection title="Rol en el proyecto" accent>
                    <p>{project.caseStudy.role}</p>
                  </CaseStudySection>
                  <CaseStudySection title="Resultado" accent>
                    <p>{project.caseStudy.result}</p>
                  </CaseStudySection>
                  <CaseStudySection title="Aprendizaje" accent>
                    <p>{project.caseStudy.learning}</p>
                  </CaseStudySection>
                </div>

                <div className="mt-4 rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                  <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">Decisiones técnicas</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.caseStudy.technicalDecisions.map((decision) => (
                      <span
                        key={decision}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950/50 dark:text-slate-200"
                      >
                        {decision}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
