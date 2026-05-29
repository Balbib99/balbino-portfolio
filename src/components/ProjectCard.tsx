import { useState } from "react";
import type { ReactNode } from "react";
import { useLanguage } from "../context/LanguageContext";
import type { Project } from "../data/portfolioData";
import { LinkButton } from "./LinkButton";
import { SkillBadge } from "./SkillBadge";

type ProjectCardProps = {
  project: Project;
};

const accentStyles = {
  orange: {
    article:
      "hover:border-orange-200 focus-within:border-orange-200 dark:shadow-[0_28px_100px_-58px_rgba(251,146,60,0.28)] dark:hover:border-orange-400/25 dark:focus-within:border-orange-400/25",
    badgePrimary:
      "border-orange-300/40 bg-orange-300/10 text-orange-100 dark:border-orange-300/30 dark:bg-orange-300/10",
    badgeSecondary:
      "border-teal-300/30 bg-teal-300/10 text-teal-100 dark:border-teal-300/30 dark:bg-teal-300/10",
    outline: "border-orange-500",
    line: "bg-orange-500",
    heroRing: "border-orange-400/15",
    heroGlow: "bg-[linear-gradient(90deg,rgba(251,146,60,0.18),transparent_42%,rgba(45,212,191,0.12))]",
    marker: "bg-orange-400",
    dashboardHover: "hover:border-orange-300/40 hover:bg-orange-300/10",
    dashboardLabel: "text-orange-200",
    contentBadgePrimary:
      "bg-orange-50 text-orange-700 ring-1 ring-orange-200 dark:bg-orange-950/30 dark:text-orange-300 dark:ring-orange-900/70",
    bullet: "bg-orange-500",
    pipelineHover: "hover:border-orange-200 hover:bg-orange-50/70 dark:hover:border-orange-400/25 dark:hover:bg-orange-400/[0.07]",
  },
  red: {
    article:
      "hover:border-red-200 focus-within:border-red-200 dark:shadow-[0_28px_100px_-58px_rgba(248,113,113,0.3)] dark:hover:border-red-400/30 dark:focus-within:border-red-400/30",
    badgePrimary:
      "border-red-300/45 bg-red-300/10 text-red-100 dark:border-red-300/30 dark:bg-red-300/10",
    badgeSecondary:
      "border-cyan-300/30 bg-cyan-300/10 text-cyan-100 dark:border-cyan-300/30 dark:bg-cyan-300/10",
    outline: "border-red-500",
    line: "bg-red-500",
    heroRing: "border-red-400/15",
    heroGlow: "bg-[linear-gradient(90deg,rgba(248,113,113,0.2),transparent_42%,rgba(34,211,238,0.12))]",
    marker: "bg-red-400",
    dashboardHover: "hover:border-red-300/40 hover:bg-red-300/10",
    dashboardLabel: "text-red-200",
    contentBadgePrimary:
      "bg-red-50 text-red-700 ring-1 ring-red-200 dark:bg-red-950/30 dark:text-red-300 dark:ring-red-900/70",
    bullet: "bg-red-500",
    pipelineHover: "hover:border-red-200 hover:bg-red-50/70 dark:hover:border-red-400/25 dark:hover:bg-red-400/[0.07]",
  },
  emerald: {
    article:
      "hover:border-emerald-200 focus-within:border-emerald-200 dark:shadow-[0_28px_100px_-58px_rgba(52,211,153,0.28)] dark:hover:border-emerald-400/30 dark:focus-within:border-emerald-400/30",
    badgePrimary:
      "border-emerald-300/45 bg-emerald-300/10 text-emerald-100 dark:border-emerald-300/30 dark:bg-emerald-300/10",
    badgeSecondary:
      "border-sky-300/30 bg-sky-300/10 text-sky-100 dark:border-sky-300/30 dark:bg-sky-300/10",
    outline: "border-emerald-500",
    line: "bg-emerald-500",
    heroRing: "border-emerald-400/15",
    heroGlow: "bg-[linear-gradient(90deg,rgba(52,211,153,0.2),transparent_42%,rgba(56,189,248,0.12))]",
    marker: "bg-emerald-400",
    dashboardHover: "hover:border-emerald-300/40 hover:bg-emerald-300/10",
    dashboardLabel: "text-emerald-200",
    contentBadgePrimary:
      "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:ring-emerald-900/70",
    bullet: "bg-emerald-500",
    pipelineHover: "hover:border-emerald-200 hover:bg-emerald-50/70 dark:hover:border-emerald-400/25 dark:hover:bg-emerald-400/[0.07]",
  },
};

const getBadgeClassName = (index: number, accent: Project["accentColor"]) =>
  index % 2 === 0 ? accentStyles[accent].badgePrimary : accentStyles[accent].badgeSecondary;

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
        ? "border-teal-200 bg-teal-50/70 dark:border-teal-400/20 dark:bg-teal-400/[0.08]"
        : "border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.055]"
    }`}
  >
    <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">{title}</h4>
    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{children}</div>
  </section>
);

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const { t } = useLanguage();
  const caseStudyId = `${project.name.toLowerCase().replace(/\s+/g, "-")}-case-study`;
  const accent = accentStyles[project.accentColor];

  return (
    <article className={`relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition duration-200 dark:border-white/10 dark:bg-white/[0.055] ${accent.article}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08] dark:opacity-[0.06]"
      >
        <div className={`absolute -left-24 top-10 h-72 w-72 rounded-full border-[18px] ${accent.outline}`} />
        <div className={`absolute -left-6 top-0 h-96 w-40 rounded-full border-r-[10px] ${accent.outline}`} />
        <div className={`absolute right-12 top-8 h-28 w-28 rounded-full border-[8px] ${accent.outline}`} />
        <div className={`absolute bottom-10 right-0 h-px w-72 ${accent.line}`} />
      </div>
      <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="relative flex min-h-80 flex-col justify-between overflow-hidden bg-slate-950 p-7 text-white dark:bg-[#0a1020]">
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[14px] ${accent.heroRing}`}
          />
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute bottom-0 left-0 h-20 w-full ${accent.heroGlow}`}
          />
          <div>
            <div className="flex flex-wrap gap-2">
              {project.badges.slice(0, 2).map((badge, index) => (
                <span
                  key={badge}
                  className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${getBadgeClassName(index, project.accentColor)}`}
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className={`mt-5 h-1 w-16 rounded-full ${accent.marker}`} />
            <h3 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{project.name}</h3>
            <p className="mt-2 text-base text-slate-300">{project.subtitle}</p>
            <p className="mt-4 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-200">
              {project.categoryLabel}
            </p>
          </div>

          {project.visual ? (
            <div className="relative mx-auto mt-7 h-44 w-44 sm:h-52 sm:w-52">
              <div className={`absolute inset-0 rounded-full border ${accent.badgePrimary} opacity-70`} />
              <div className="absolute inset-2 rounded-full border border-white/10 bg-white/5" />
              <img
                src={project.visual.src}
                alt={project.visual.alt}
                className="relative h-full w-full rounded-full object-cover p-2 shadow-[0_22px_70px_-34px_rgba(0,0,0,0.8)]"
              />
            </div>
          ) : null}

          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{project.dashboardTitle}</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-300">
              {project.dashboardItems.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-lg border border-white/10 bg-white/5 p-3 transition duration-200 ${accent.dashboardHover}`}
                >
                  <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${accent.dashboardLabel}`}>{item.label}</p>
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
                    ? accent.contentBadgePrimary
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
              <SkillBadge key={technology} label={technology} accent={project.accentColor} />
            ))}
          </div>

          <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.bullet}`} />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.demo ? (
              <LinkButton href={project.links.demo} target="_blank" rel="noopener noreferrer" variant="primary">
                {t.buttons.viewDemo}
              </LinkButton>
            ) : null}
            <LinkButton href={project.links.code} target="_blank" rel="noopener noreferrer">
              {t.buttons.viewCode}
            </LinkButton>
            <button
              type="button"
              aria-expanded={isCaseStudyOpen}
              aria-controls={caseStudyId}
              onClick={() => setIsCaseStudyOpen((current) => !current)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-slate-800 transition duration-200 hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-100 dark:hover:bg-white/[0.07] dark:hover:text-white dark:focus-visible:ring-offset-slate-950"
            >
              {t.buttons.technicalDetails}
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
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-[#0b1220]/85 sm:p-5">
                <CaseStudySection title={t.projects.card.overview} accent>
                  <p>{project.caseStudy.overview}</p>
                </CaseStudySection>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <CaseStudySection title={t.projects.card.problem}>
                    <p>{project.caseStudy.problem}</p>
                  </CaseStudySection>
                  <CaseStudySection title={t.projects.card.solution}>
                    <p>{project.caseStudy.solution}</p>
                  </CaseStudySection>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <CaseStudySection title={t.projects.card.mainFeatures}>
                    <ul className="grid gap-2">
                      {project.caseStudy.mainFeatures.map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.bullet}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CaseStudySection>
                  <CaseStudySection title={t.projects.card.techStack}>
                    <div className="flex flex-wrap gap-2">
                      {project.caseStudy.techStack.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-[#0b1220]/80 dark:text-slate-200"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </CaseStudySection>
                </div>

                <div className="mt-4 rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05]">
                  <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">{t.projects.card.architecture}</h4>
                  <div className="mt-4 grid gap-3 sm:grid-cols-4">
                    {project.caseStudy.pipelineItems.map((item, index) => (
                      <div key={item} className={`rounded-lg border border-slate-200 bg-slate-50 p-3 transition duration-200 dark:border-white/10 dark:bg-[#0b1220]/80 ${accent.pipelineHover}`}>
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                          {t.projects.card.step} {index + 1}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-950 dark:text-white">{item}</p>
                      </div>
                    ))}
                  </div>
                  <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300 md:grid-cols-2">
                    {project.caseStudy.architecture.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.bullet}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <CaseStudySection title={t.projects.card.role} accent>
                    <p>{project.caseStudy.role}</p>
                  </CaseStudySection>
                  <CaseStudySection title={t.projects.card.result} accent>
                    <p>{project.caseStudy.result}</p>
                  </CaseStudySection>
                  <CaseStudySection title={t.projects.card.learning} accent>
                    <p>{project.caseStudy.learning}</p>
                  </CaseStudySection>
                </div>

                <div className="mt-4 rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05]">
                  <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">{t.projects.card.technicalDecisions}</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.caseStudy.technicalDecisions.map((decision) => (
                      <span
                        key={decision}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-[#0b1220]/80 dark:text-slate-200"
                      >
                        {decision}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05]">
                  <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">{t.projects.card.links}</h4>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {project.links.demo ? (
                      <LinkButton href={project.links.demo} target="_blank" rel="noopener noreferrer" variant="primary">
                        {t.buttons.viewDemo}
                      </LinkButton>
                    ) : null}
                    <LinkButton href={project.links.code} target="_blank" rel="noopener noreferrer">
                      {t.buttons.viewCode}
                    </LinkButton>
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
