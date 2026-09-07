import type { Experience } from "../data/portfolioData";
import { ChipRow } from "./Chip";

type ExperienceCardProps = {
  experience: Experience;
};

export const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <details className="group border-b border-line-strong">
    {/* Muted text inside the row inherits currentColor with opacity so the whole
        row can invert to solid on hover and while open. */}
    <summary className="flex items-center gap-5 px-4 py-5 text-ink transition-colors hover:bg-invert-bg hover:text-invert-ink group-open:bg-invert-bg group-open:text-invert-ink">
      <span className="hidden w-[130px] shrink-0 font-mono text-sm opacity-60 sm:block">{experience.period}</span>

      <span className="min-w-0 flex-1">
        <span className="block text-base font-semibold">
          {experience.role} <span className="font-normal opacity-70">· {experience.company}</span>
        </span>
        <span className="mt-0.5 block font-mono text-xs opacity-60 sm:hidden">
          {experience.period} · {experience.location}
        </span>
      </span>

      <span className="hidden shrink-0 text-right font-mono text-xs opacity-60 md:block">
        {experience.location} · {experience.type}
      </span>

      <span
        aria-hidden="true"
        className="shrink-0 font-mono text-base transition-transform duration-200 group-open:rotate-45"
      >
        +
      </span>
    </summary>

    <div className="max-w-[78ch] px-4 pb-9 pt-7">
      <p className="mb-5 leading-relaxed text-ink-soft">{experience.summary}</p>
      <ul className="mb-6 flex flex-col gap-2.5">
        {experience.responsibilities.map((item) => (
          <li key={item} className="relative pl-5 text-sm leading-relaxed text-ink-soft">
            <span aria-hidden="true" className="absolute left-0 top-[0.62em] h-px w-1.5 bg-ink-faint" />
            {item}
          </li>
        ))}
      </ul>
      <ChipRow items={experience.technologies} />
    </div>
  </details>
);
