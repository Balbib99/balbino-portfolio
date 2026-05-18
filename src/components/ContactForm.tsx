import type { FormEvent } from "react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { personalData } from "../data/portfolioData";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const inputClassName =
  "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 transition placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-teal-400";

export const ContactForm = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [error, setError] = useState("");

  const updateField = (field: keyof ContactFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!subject || !message) {
      setError(t.contact.form.error);
      return;
    }

    const bodyLines = [
      form.name.trim() ? `${t.contact.form.bodyName}: ${form.name.trim()}` : null,
      form.email.trim() ? `${t.contact.form.bodyEmail}: ${form.email.trim()}` : null,
      "",
      `${t.contact.form.bodyMessage}:`,
      message,
    ].filter((line): line is string => line !== null);

    const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailtoUrl;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-200" htmlFor="contact-name">
          {t.contact.form.name}
          <input
            id="contact-name"
            className={inputClassName}
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder={t.contact.form.namePlaceholder}
            autoComplete="name"
          />
        </label>
        <label className="block text-sm font-semibold text-slate-200" htmlFor="contact-email">
          {t.contact.form.email}
          <input
            id="contact-email"
            className={inputClassName}
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder={t.contact.form.emailPlaceholder}
            autoComplete="email"
          />
        </label>
      </div>

      <label className="block text-sm font-semibold text-slate-200" htmlFor="contact-subject">
        {t.contact.form.subject}
        <input
          id="contact-subject"
          className={inputClassName}
          type="text"
          value={form.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          placeholder={t.contact.form.subjectPlaceholder}
          required
        />
      </label>

      <label className="block text-sm font-semibold text-slate-200" htmlFor="contact-message">
        {t.contact.form.message}
        <textarea
          id="contact-message"
          className={`${inputClassName} min-h-36 resize-y`}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder={t.contact.form.messagePlaceholder}
          required
        />
      </label>

      <p className="text-sm leading-6 text-slate-400">
        {t.contact.form.help}
      </p>

      {error ? <p className="text-sm font-semibold text-red-300">{error}</p> : null}

      <button
        type="submit"
        className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-teal-400 bg-teal-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-soft transition duration-200 hover:border-teal-300 hover:bg-teal-300 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
      >
        {t.contact.form.submit}
      </button>
    </form>
  );
};
