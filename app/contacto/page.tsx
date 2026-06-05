import { ContactForm } from "@/components/ContactForm";
import { WebPageJsonLd } from "@/components/JsonLd";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contacto",
  description:
    "Contacta con TextPulses para soporte, correcciones, preguntas de privacidad, consultas tecnicas o comentarios editoriales.",
  path: "/contacto"
});

const spanishContactLabels = {
  name: "Nombre",
  email: "Email",
  message: "Mensaje",
  privacy: "He leido y acepto la",
  privacyLinkLabel: "Politica de Privacidad",
  submit: "Enviar mensaje",
  sending: "Enviando...",
  idle: "Para soporte, comentarios o consultas comerciales, escribenos.",
  sent: "Gracias. Tu mensaje se envio correctamente.",
  error: "Algo fallo. Por favor escribe a hello@textpulses.com.",
  sensitiveNotice:
    "No envies borradores privados sensibles, contrasenas, documentos confidenciales, informacion medica, documentos legales ni datos financieros."
};

export default function ContactoPage() {
  const url = `${siteConfig.url}/contacto`;

  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <WebPageJsonLd
        title="Contacto"
        description="Pagina de contacto de TextPulses para soporte, privacidad, correcciones y consultas tecnicas."
        url={url}
        breadcrumbItems={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Contacto", url }
        ]}
      />
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">Contacto</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        Contacto
      </h1>
      <div className="mt-5 grid gap-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
        <p>
          Utiliza este formulario para enviar preguntas de soporte, comentarios, solicitudes de
          correccion, consultas de privacidad o incidencias tecnicas relacionadas con TextPulses.
        </p>
        <p>
          La herramienta principal esta disenada para analizar texto en el navegador. Evita enviar
          contenido confidencial a traves del formulario de contacto.
        </p>
      </div>
      <p className="mt-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
        Email:{" "}
        <a className="text-pulse-blue hover:underline" href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>
      </p>

      <section className="mt-8" aria-labelledby="contacto-form-title">
        <h2 id="contacto-form-title" className="text-2xl font-extrabold text-slate-950 dark:text-white">
          Formulario de contacto
        </h2>
        <ContactForm labels={spanishContactLabels} privacyPolicyHref="/politica-de-privacidad" />
      </section>
    </main>
  );
}
