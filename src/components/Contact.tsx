import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round">
    <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
    <path d="M3 6.5l9 6.5 9-6.5" />
  </svg>
);
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" /></svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33 0-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg>
);
const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.41-9.4 2.51 0 4.87.98 6.64 2.76a9.34 9.34 0 0 1 2.75 6.65c0 5.18-4.22 9.4-9.4 9.4zm8-17.4A11.32 11.32 0 0 0 12.04 1C5.8 1 .73 6.07.73 12.3c0 1.99.52 3.94 1.51 5.66L.64 23.6l5.78-1.52a11.28 11.28 0 0 0 5.62 1.43h.01c6.23 0 11.3-5.07 11.31-11.3 0-3.02-1.18-5.86-3.32-8z" /></svg>
);

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { t } = useLang();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mdalvewp", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section" id="contato">
      <div className="wrap">
        <div className="contact-grid">
          <div className="box form">
            <h3>{t("contact.heading")}</h3>
            <div className="form-social">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rezendepiresgabriel@gmail.com" title="Email" aria-label="Email" target="_blank" rel="noopener noreferrer"><MailIcon /></a>
              <a href="https://github.com/gabriel-re-pires" title="GitHub" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
              <a href="https://www.linkedin.com/in/grp-0892ret/" title="LinkedIn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
              <a href="https://wa.me/5534993417077" title="WhatsApp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><WhatsappIcon /></a>
            </div>
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">{t("contact.name")}</label>
                <input id="name" name="name" placeholder={t("contact.namePh")} required />
              </div>
              <div className="field">
                <label htmlFor="email">{t("contact.email")}</label>
                <input id="email" name="email" type="email" placeholder={t("contact.emailPh")} required />
              </div>
              <div className="field">
                <label htmlFor="message">{t("contact.message")}</label>
                <textarea id="message" name="message" placeholder={t("contact.messagePh")} rows={4} required />
              </div>
              <button type="submit" className="btn" disabled={status === "loading"}>
                {status === "loading" ? t("contact.sending") : t("contact.send")}
              </button>
              {status === "success" && <p className="msg">{t("contact.success")}</p>}
              {status === "error" && <p className="msg" style={{ color: "#ff5b5b" }}>{t("contact.error")}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
