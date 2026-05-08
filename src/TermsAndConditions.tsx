import React from 'react';
import { ArrowLeft, FileText, Mail, Phone } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent-cta py-16 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <FileText size={32} />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Términos y Condiciones</h1>
          <p className="text-white/80 text-lg">Sanando con Sam — Última actualización: enero 2025</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10 text-text-secondary leading-relaxed">

        <a href="/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm">
          <ArrowLeft size={16} /> Volver al inicio
        </a>

        {/* 1 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">1. Información general</h2>
          <p>Los presentes Términos y Condiciones regulan el acceso y uso del sitio web <strong>sanandoconsam.com</strong> y la contratación de los servicios ofrecidos por:</p>
          <ul className="mt-4 space-y-1 list-none">
            <li><strong>Titular:</strong> Samantha Puente</li>
            <li><strong>NIF:</strong> [NIF]</li>
            <li><strong>Email:</strong> info.teamsam@gmail.com</li>
            <li><strong>Teléfono:</strong> +34 633 875 138</li>
          </ul>
          <p className="mt-4">El uso de este sitio web implica la aceptación plena de estos términos. Si no estás de acuerdo, te rogamos que no utilices el sitio.</p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">2. Descripción de los servicios</h2>
          <p>Sanando con Sam ofrece servicios de asesoramiento deportivo y nutricional online, incluyendo:</p>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li><strong>Educación nutricional:</strong> sesiones individuales para trabajar la relación con la alimentación sin dietas restrictivas</li>
            <li><strong>Nútrete con cariño:</strong> plan nutricional personalizado y flexible, sin culpa ni etiquetas</li>
            <li><strong>Sana desde tu fuerza:</strong> programa integral que combina nutrición, entrenamiento personalizado y mentalidad, especialmente diseñado para personas en proceso de recuperación de TCA</li>
          </ul>
          <p className="mt-4">Todos los servicios se prestan de forma online a través de videollamada, mensajería y plataformas digitales acordadas entre las partes.</p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">3. Consulta gratuita</h2>
          <p>Ofrecemos una primera consulta gratuita y sin compromiso para conocer tu situación y valorar cómo podemos ayudarte. Esta consulta no implica la contratación de ningún servicio. La duración aproximada es de 30 minutos y se realizará por videollamada o teléfono.</p>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">4. Contratación y pago</h2>
          <p>La contratación de cualquier programa se formalizará mediante acuerdo expreso entre ambas partes tras la consulta inicial. Los precios, duración y condiciones específicas de cada programa se comunicarán de forma individualizada.</p>
          <p className="mt-4">El pago deberá realizarse según las condiciones acordadas. El impago puede suponer la suspensión del servicio.</p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">5. Política de cancelación y reembolso</h2>
          <p>Las cancelaciones de sesiones individuales deberán comunicarse con un mínimo de <strong>24 horas de antelación</strong>. Las cancelaciones con menos de 24 horas de antelación podrán ser cobradas íntegramente.</p>
          <p className="mt-4">En cuanto a reembolsos de programas completos, se evaluarán caso por caso atendiendo a las circunstancias particulares. No se realizarán reembolsos por sesiones ya realizadas.</p>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">6. Naturaleza del servicio y limitaciones</h2>
          <p>Los servicios de Sanando con Sam son de naturaleza educativa y de acompañamiento en hábitos saludables. <strong>No constituyen tratamiento médico, psicológico ni psiquiátrico</strong>, y no sustituyen en ningún caso la atención de profesionales sanitarios.</p>
          <p className="mt-4">Se recomienda especialmente a personas en proceso de recuperación de TCA que mantengan el seguimiento con su equipo médico y psicológico de forma paralela a nuestros servicios.</p>
          <p className="mt-4">Samantha Puente no se responsabiliza de los resultados individuales, ya que estos dependen en gran medida del compromiso y circunstancias personales de cada cliente.</p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">7. Confidencialidad</h2>
          <p>Toda la información compartida durante las sesiones y el proceso de acompañamiento será tratada con total confidencialidad. No se compartirá ninguna información personal o sensible con terceros sin el consentimiento expreso del cliente, salvo obligación legal.</p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">8. Propiedad intelectual</h2>
          <p>Todos los contenidos de este sitio web (textos, imágenes, diseño, metodología EmPower) son propiedad de Samantha Puente o dispone de las licencias necesarias para su uso. Queda prohibida su reproducción, distribución o uso comercial sin autorización expresa.</p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">9. Responsabilidad</h2>
          <p>Samantha Puente no se responsabiliza de los daños o perjuicios que puedan derivarse del uso incorrecto o inadecuado de los servicios, ni de la información proporcionada fuera del marco de los programas contratados. El cliente es responsable de comunicar cualquier condición de salud relevante antes de iniciar cualquier programa.</p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">10. Legislación aplicable</h2>
          <p>Estos términos se rigen por la legislación española. Para la resolución de cualquier conflicto derivado del uso de este sitio web o de la contratación de servicios, las partes se someten a los juzgados y tribunales del domicilio del usuario, salvo que la ley establezca otro fuero.</p>
        </section>

        {/* 11 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">11. Modificaciones</h2>
          <p>Nos reservamos el derecho a modificar estos Términos y Condiciones en cualquier momento. Los cambios serán publicados en esta página con su fecha de actualización. El uso continuado del sitio tras la publicación de cambios implica la aceptación de los nuevos términos.</p>
        </section>

        {/* Contacto */}
        <div className="bg-support-warm rounded-2xl p-8 mt-12">
          <h3 className="text-xl font-bold text-text-main mb-4">¿Tienes alguna pregunta?</h3>
          <p className="mb-6">Si tienes dudas sobre nuestros términos y condiciones, contáctanos:</p>
          <div className="flex flex-col gap-3">
            <a href="mailto:info.teamsam@gmail.com" className="flex items-center gap-3 text-primary-dark font-semibold">
              <Mail size={18} /> info.teamsam@gmail.com
            </a>
            <a href="tel:+34633875138" className="flex items-center gap-3 text-primary-dark font-semibold">
              <Phone size={18} /> +34 633 875 138
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
