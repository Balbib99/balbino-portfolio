import { SectionTitle } from "../components/SectionTitle";
import { valueItems } from "../data/portfolioData";

export const Value = () => (
  <section id="aportacion" className="bg-slate-100 px-4 py-20 transition-colors duration-300 dark:bg-slate-900/40 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Valor profesional"
        title="Qué puedo aportar a un equipo técnico"
        description="Mi perfil combina desarrollo web, datos, IoT y ciberseguridad, lo que me permite participar en distintas fases de una solución: desde la interfaz de usuario hasta la integración con sistemas, APIs, bases de datos y buenas prácticas de seguridad."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {valueItems.map((item, index) => (
          <article
            key={item.title}
            className="group rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-teal-200 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-800"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-teal-700 transition group-hover:bg-teal-600 group-hover:text-white dark:bg-slate-800 dark:text-teal-300 dark:group-hover:bg-teal-500 dark:group-hover:text-slate-950">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
