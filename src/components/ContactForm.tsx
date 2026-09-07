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

type SubmitStatus = "idle" | "sending" | "success" | "error";

const initialState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined;
const formspreeEndpoint = formspreeFormId ? `https://formspree.io/f/${formspreeFormId}` : null;

// Field borders use ink-faint rather than the decorative line token so the
// control boundary itself clears the 3:1 contrast minimum.
const inputClassName =
  "mt-1.5 w-full rounded-md border border-ink-faint bg-transparent px-3.5 py-2.5 text-sm text-ink transition placeholder:text-ink-faint focus:border-ink focus:outline-none";

const labelClassName = "block font-mono text-xs lowercase text-ink-faint";

export const ContactForm = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const updateField = (field: keyof ContactFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) {
      setError("");
    }
  };

  const sendViaMailto = () => {
    const bodyLines = [
      form.name.trim() ? `${t.contact.form.bodyName}: ${form.name.trim()}` : null,
      form.email.trim() ? `${t.contact.form.bodyEmail}: ${form.email.trim()}` : null,
      "",
      `${t.contact.form.bodyMessage}:`,
      form.message.trim(),
    ].filter((line): line is string => line !== null);

    const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(form.subject.trim())}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!subject || !message) {
      setError(t.contact.form.error);
      return;
    }

    if (formspreeEndpoint) {
      setStatus("sending");
      try {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new URLSearchParams({
            name: form.name.trim(),
            email: form.email.trim(),
            subject,
            message,
          }),
        });

        if (!response.ok) {
          throw new Error("Formspree request failed");
        }

        setStatus("success");
        setForm(initialState);
      } catch {
        setStatus("error");
      }
      return;
    }

    sendViaMailto();
  };

  const isSending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClassName} htmlFor="contact-name">
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
        <label className={labelClassName} htmlFor="contact-email">
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

      <label className={labelClassName} htmlFor="contact-subject">
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

      <label className={labelClassName} htmlFor="contact-message">
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

      <p className="text-sm leading-relaxed text-ink-faint">
        {formspreeEndpoint ? t.contact.form.helpDirect : t.contact.form.help}
      </p>

      <div role="status" aria-live="polite">
        {error ? <p className="text-sm text-danger">{error}</p> : null}
        {status === "success" ? <p className="text-sm text-ink">{t.contact.form.success}</p> : null}
        {status === "error" ? <p className="text-sm text-danger">{t.contact.form.submitError}</p> : null}
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-invert-bg px-6 py-3 font-mono text-sm font-semibold text-invert-ink transition duration-200 hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSending ? t.contact.form.sending : formspreeEndpoint ? t.contact.form.submitDirect : t.contact.form.submit}
      </button>
    </form>
  );
};
