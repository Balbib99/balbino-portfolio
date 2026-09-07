import { useRef } from "react";
import type { Project } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

type ProjectCarouselProps = {
  projects: Project[];
};

export const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const { t } = useLanguage();

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    const card = track.querySelector("a");
    const amount = card ? card.getBoundingClientRect().width + 20 : 420;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * amount, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        role="group"
        aria-label={t.hero.carouselLabel}
        className="flex snap-x gap-5 overflow-x-auto pb-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.links.demo ?? project.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid min-h-[230px] shrink-0 basis-[min(560px,82%)] snap-center grid-cols-1 overflow-hidden rounded-[20px] border border-line-strong bg-bg-raised text-ink sm:grid-cols-[42%_1fr]"
          >
            {project.visual ? (
              <div className="aspect-[16/9] overflow-hidden sm:aspect-auto">
                <img
                  src={project.visual.src}
                  alt={project.visual.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top grayscale contrast-[1.05] transition duration-500 group-hover:grayscale-0"
                />
              </div>
            ) : null}
            {/* Not a heading: these cards are a teaser for the Projects section,
                where each project carries its own heading. */}
            <div className="flex flex-col justify-center gap-2.5 px-6 py-6">
              <span className="font-mono text-lg font-semibold tracking-tight">{project.name}</span>
              <p className="text-sm text-ink-soft">{project.subtitle}</p>
              <span className="mt-1.5 inline-flex items-center gap-2 font-mono text-xs font-semibold">
                <span
                  aria-hidden="true"
                  className="grid h-[26px] w-[26px] place-items-center rounded-full border border-line-strong"
                >
                  →
                </span>
                {t.buttons.viewProject}
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-5 flex gap-2.5">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label={t.hero.prevProject}
          className="grid h-10 w-10 place-items-center rounded-full border border-line-strong text-ink transition hover:border-invert-bg hover:bg-invert-bg hover:text-invert-ink"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label={t.hero.nextProject}
          className="grid h-10 w-10 place-items-center rounded-full border border-line-strong text-ink transition hover:border-invert-bg hover:bg-invert-bg hover:text-invert-ink"
        >
          →
        </button>
      </div>
    </div>
  );
};
