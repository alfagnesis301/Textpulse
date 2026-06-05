import { LegalPage } from "@/components/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terminos de Servicio",
  description:
    "Condiciones de uso de TextPulses, limitacion de responsabilidad, propiedad intelectual y uso aceptable del sitio.",
  path: "/terminos-de-servicio"
});

export default function TerminosDeServicioPage() {
  return (
    <LegalPage
      eyebrow="Condiciones"
      title="Terminos de Servicio"
      intro="Estos terminos regulan el uso de TextPulses como utilidad gratuita de analisis de texto, escritura y preparacion editorial."
      updated="June 5, 2026"
      path="/terminos-de-servicio"
      sections={[
        {
          title: "Uso del sitio",
          body: [
            "TextPulses ofrece herramientas informativas para revisar conteo de palabras, legibilidad, densidad de palabras clave, tiempos estimados, fragmentos SEO y preparacion editorial.",
            "El usuario es responsable del texto que introduce, copia, descarga, publica o envia despues de utilizar las herramientas."
          ]
        },
        {
          title: "Limitacion de responsabilidad",
          body: [
            "Las metricas, estimaciones y recomendaciones se ofrecen tal como estan y pueden variar por idioma, formato, velocidad de lectura, plataforma o contexto editorial.",
            "TextPulses no garantiza rankings, clics, ingresos, aprobacion de AdSense, aceptacion editorial, resultados academicos, precision profesional ni disponibilidad continua del servicio."
          ]
        },
        {
          title: "Propiedad intelectual",
          body: [
            "El nombre TextPulses, el logotipo, la interfaz, los textos originales, las guias, el codigo y la estructura editorial estan protegidos por derechos de propiedad intelectual salvo que se indique lo contrario.",
            "Usted conserva la titularidad y responsabilidad sobre los textos que crea o pega en la herramienta. TextPulses no reclama propiedad sobre sus borradores."
          ]
        },
        {
          title: "Uso aceptable",
          body: [
            "No debe usar el sitio para infringir leyes, vulnerar derechos de terceros, intentar interrumpir el servicio, automatizar abuso, evadir medidas tecnicas o manipular formularios.",
            "Tampoco debe presentar las estimaciones de TextPulses como asesoramiento profesional definitivo ni como garantia de rendimiento en buscadores, redes sociales o programas publicitarios."
          ]
        },
        {
          title: "Servicios de terceros y publicidad",
          body: [
            "El sitio puede contener enlaces, anuncios o integraciones de terceros. Dichos servicios se rigen por sus propios terminos y politicas.",
            "Los bloques publicitarios deben mantenerse claramente separados de la navegacion, el formulario y las acciones principales de las herramientas."
          ]
        },
        {
          title: "Cambios",
          body: [
            "TextPulses puede modificar funciones, contenidos o estos terminos cuando cambien el producto, la ley o los proveedores externos.",
            "La fecha de actualizacion indica la revision mas reciente de esta pagina."
          ]
        }
      ]}
    />
  );
}
