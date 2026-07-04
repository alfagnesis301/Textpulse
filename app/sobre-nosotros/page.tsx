import { LegalPage } from "@/components/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Sobre Nosotros",
  description:
    "Conoce la mision editorial de TextPulses, quien mantiene el sitio y que valor aporta a escritores, estudiantes, creadores y equipos SEO.",
  path: "/sobre-nosotros",
  robots: {
    index: false,
    follow: true
  }
});

export default function SobreNosotrosPage() {
  return (
    <LegalPage
      eyebrow="Sobre TextPulses"
      title="Sobre Nosotros"
      intro="TextPulses es una utilidad editorial para revisar borradores, fragmentos SEO y textos de publicacion antes de enviarlos, compartirlos o publicarlos."
      updated="June 5, 2026"
      path="/sobre-nosotros"
      sections={[
        {
          title: "Quienes somos",
          body: [
            "TextPulses es mantenido por Ricardo Diaz, editor independiente enfocado en herramientas web practicas para escritura, analisis SEO y revision de contenido.",
            "El sitio combina herramientas de conteo, legibilidad y preparacion editorial con guias que explican como interpretar las metricas sin convertirlas en reglas rigidas."
          ]
        },
        {
          title: "Mision",
          body: [
            "La mision de TextPulses es ayudar a escritores, estudiantes, profesionales de marketing, creadores y pequenos propietarios de sitios web a tomar mejores decisiones editoriales antes de publicar.",
            "Un conteo de palabras por si solo no muestra si un texto es claro, repetitivo, demasiado corto, dificil de escanear o inadecuado para el canal. TextPulses agrega senales practicas para revisar esos riesgos."
          ]
        },
        {
          title: "Valor editorial",
          body: [
            "Las herramientas ayudan a detectar longitud, estructura, repeticion, claridad, tiempos estimados de lectura o habla, y ajuste de formato para blogs, titulos SEO, meta descripciones, publicaciones sociales, emails, ensayos y discursos.",
            "Las guias y ejemplos se redactan para explicar criterios practicos. No sustituyen la revision humana, la comprobacion de hechos ni el criterio profesional."
          ]
        },
        {
          title: "Compromiso de transparencia",
          body: [
            "TextPulses evita promesas absolutas sobre ranking, engagement, aprobacion publicitaria o aceptacion editorial. Las metricas se presentan como ayudas de revision.",
            "Cuando una recomendacion necesita correccion o aclaracion, los usuarios pueden informar el problema desde la pagina de contacto."
          ]
        }
      ]}
    />
  );
}
