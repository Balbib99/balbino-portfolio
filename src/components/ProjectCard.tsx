import { useState } from "react";
import type { Project } from "../data/portfolioData";
import { LinkButton } from "./LinkButton";
import { SkillBadge } from "./SkillBadge";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const caseStudyId = `${project.name.toLowerCase().replace(/\s+/g, "-")}-case-study`;

  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition duration-200 hover:border-teal-200 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-800">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex min-h-72 flex-col justify-between bg-slate-950 p-7 text-white dark:bg-slate-900">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">Proyecto destacado</p>
            <h3 className="mt-4 text-3xl font-bold">{project.name}</h3>
            <p className="mt-2 text-base text-slate-300">{project.subtitle}</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-300">
            <span className="rounded-lg border border-white/10 p-3">Frontend público</span>
            <span className="rounded-lg border border-white/10 p-3">Backend API</span>
            <span className="rounded-lg border border-white/10 p-3">JWT + demo</span>
            <span className="rounded-lg border border-white/10 p-3">Datos NBA</span>
          </div>
        </div>
        <div className="p-7">
          <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <SkillBadge key={technology} label={technology} />
            ))}
          </div>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
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
                ˅
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
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/50">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">Problema</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">Solución</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.caseStudy.solution}</p>
                  </div>
                </div>
                <div className="mt-5">
                  <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">Decisiones técnicas</h4>
                  <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:grid-cols-2">
                    {project.caseStudy.technicalDecisions.map((decision) => (
                      <li key={decision} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                        <span>{decision}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 border-t border-slate-200 pt-5 dark:border-slate-800">
                  <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">Aprendizaje</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.caseStudy.learning}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
