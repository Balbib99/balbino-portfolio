import { LinkButton } from "../components/LinkButton";
import { links, personalData } from "../data/portfolioData";

export const Contact = () => (
  <section id="contacto" className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">Contacto</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Hablemos de software, datos y sistemas conectados.</h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
          Disponible para oportunidades profesionales donde pueda aportar en desarrollo web, integración IoT, ciberseguridad, automatización e IA aplicada.
        </p>
      </div>
      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
        <a className="text-lg font-semibold text-white hover:text-teal-300" href={links.email}>
          {personalData.email}
        </a>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href={links.linkedin} target="_blank" rel="noreferrer" variant="primary">
            LinkedIn
          </LinkButton>
          <LinkButton href={links.github} target="_blank" rel="noreferrer" variant="secondary">
            GitHub
          </LinkButton>
          <LinkButton href={personalData.cvUrl} download variant="secondary">
            Descargar CV
          </LinkButton>
        </div>
      </div>
    </div>
  </section>
);
