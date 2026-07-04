import { LegalPage } from "@/components/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Politica de Privacidad",
  description:
    "Politica de privacidad de TextPulses sobre cookies, datos de usuario, formularios, almacenamiento local y anuncios de Google AdSense.",
  path: "/politica-de-privacidad",
  robots: {
    index: false,
    follow: true
  }
});

export default function PoliticaDePrivacidadPage() {
  return (
    <LegalPage
      eyebrow="Cumplimiento"
      title="Politica de Privacidad"
      intro="Esta politica explica como TextPulses trata los datos de usuario, el almacenamiento del navegador, las cookies, los formularios de contacto y los servicios publicitarios."
      updated="June 5, 2026"
      path="/politica-de-privacidad"
      sections={[
        {
          title: "Analisis de texto y privacidad",
          body: [
            "TextPulses esta disenado para ejecutar el analisis principal en el navegador. El conteo de palabras, caracteres, legibilidad, densidad de palabras clave, limpieza de texto y senales PublishFit no requieren subir el borrador a servidores de TextPulses.",
            "Aun asi, no debe introducir contrasenas, documentos confidenciales, informacion medica, datos financieros, material legal sensible o trabajos privados si no tiene una razon clara para hacerlo."
          ]
        },
        {
          title: "Datos que podemos recopilar",
          body: [
            "Si utiliza el formulario de contacto, podemos tratar su nombre, direccion de email, mensaje y metadatos tecnicos necesarios para recibir, revisar y responder la solicitud.",
            "Tambien podemos tratar datos tecnicos ordinarios asociados al funcionamiento del sitio, como registros de hosting, proteccion contra abuso, preferencias del navegador, estado de consentimiento y datos agregados de uso si se habilitan herramientas de analitica."
          ]
        },
        {
          title: "Cookies y almacenamiento local",
          body: [
            "TextPulses puede utilizar localStorage para recordar preferencias como el tema visual, el preset de revision o la opcion de autoguardado local.",
            "El autoguardado local esta desactivado por defecto. Si lo activa, el borrador puede guardarse en el navegador del dispositivo que esta usando. Puede desactivarlo o limpiar el contenido desde la propia herramienta.",
            "Las cookies no esenciales, como publicidad personalizada o analitica, deben respetar los controles de consentimiento aplicables segun la ubicacion del visitante."
          ]
        },
        {
          title: "Google AdSense, DART y proveedores externos",
          body: [
            "TextPulses puede mostrar anuncios mediante Google AdSense u otros servicios publicitarios. Google, como proveedor de terceros, utiliza cookies para publicar anuncios en este sitio web a traves de la cookie de DART.",
            "El uso de cookies publicitarias permite a Google y a sus socios publicar anuncios basados en visitas anteriores a TextPulses u otros sitios de Internet, medir rendimiento, limitar frecuencia, prevenir fraude y mejorar la entrega de anuncios.",
            "Los usuarios pueden inhabilitar la publicidad personalizada de Google desde https://adssettings.google.com. Google explica como usa datos de sitios y aplicaciones asociados en https://policies.google.com/technologies/partner-sites."
          ]
        },
        {
          title: "Servicios de terceros",
          body: [
            "El sitio puede usar proveedores de hosting, formularios, DNS, seguridad, email, despliegue, analitica o publicidad. Cada proveedor trata datos conforme a sus propias politicas y terminos.",
            "Los proveedores operativos pueden incluir Netlify para hosting y formularios, Cloudflare para DNS o email routing, GitHub para codigo fuente y Google si AdSense u otros servicios de Google estan habilitados."
          ]
        },
        {
          title: "Contacto sobre privacidad",
          body: [
            "Para consultas, solicitudes de correccion o preguntas sobre privacidad, escriba a hello@textpulses.com.",
            "Incluya suficiente contexto para identificar la pagina o solicitud, pero evite enviar borradores privados o informacion sensible a traves del formulario."
          ]
        }
      ]}
    />
  );
}
