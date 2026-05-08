import React from 'react';
import { ArrowLeft, Shield, Mail, Phone } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent-cta py-16 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Shield size={32} />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Política de Privacidad</h1>
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
          <h2 className="text-2xl font-bold text-text-main mb-4">1. Responsable del tratamiento</h2>
          <p>En cumplimiento del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD), te informamos que los datos recogidos a través de este sitio web son tratados por:</p>
          <ul className="mt-4 space-y-1 list-none">
            <li><strong>Titular:</strong> Samantha Puente</li>
            <li><strong>NIF:</strong> [NIF]</li>
            <li><strong>Email:</strong> info.teamsam@gmail.com</li>
            <li><strong>Teléfono:</strong> +34 633 875 138</li>
            <li><strong>Web:</strong> sanandoconsam.com</li>
          </ul>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">2. Datos que recopilamos</h2>
          <p>A través del formulario de contacto de esta web recopilamos los siguientes datos personales:</p>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li>Nombre completo</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Información sobre tus objetivos de salud y bienestar que nos compartas voluntariamente</li>
          </ul>
          <p className="mt-4">No recopilamos datos especialmente sensibles sin tu consentimiento explícito. La información sobre salud que puedas compartir con nosotros se trata con la máxima confidencialidad y protección.</p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">3. Finalidad del tratamiento</h2>
          <p>Utilizamos tus datos personales para las siguientes finalidades:</p>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li>Gestionar tu solicitud de consulta gratuita y responder a tus mensajes</li>
            <li>Prestarte los servicios de asesoramiento deportivo y nutricional contratados</li>
            <li>Enviarte información sobre nuestros programas y servicios, si nos has dado tu consentimiento</li>
            <li>Cumplir con las obligaciones legales que nos sean aplicables</li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">4. Base legal</h2>
          <p>El tratamiento de tus datos se basa en:</p>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li><strong>Tu consentimiento</strong>, cuando rellenas el formulario de contacto</li>
            <li><strong>La ejecución de un contrato</strong>, cuando contratas nuestros servicios</li>
            <li><strong>Interés legítimo</strong>, para gestionar la relación comercial contigo</li>
          </ul>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">5. Conservación de los datos</h2>
          <p>Conservaremos tus datos personales durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos y, en su caso, para atender posibles responsabilidades legales. Los datos de contacto se conservarán mientras mantengas una relación con nosotros y no solicites su supresión.</p>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">6. Cesión de datos a terceros</h2>
          <p>No cedemos tus datos personales a terceros, salvo obligación legal. No vendemos ni alquilamos tu información personal a ninguna empresa o entidad. Los únicos proveedores de servicios que pueden acceder a tus datos son aquellos necesarios para el funcionamiento de la web (hosting, email) y están sujetos a contratos de confidencialidad.</p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">7. Tus derechos</h2>
          <p>Puedes ejercer en cualquier momento los siguientes derechos sobre tus datos:</p>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li><strong>Acceso:</strong> conocer qué datos tenemos sobre ti</li>
            <li><strong>Rectificación:</strong> corregir datos incorrectos</li>
            <li><strong>Supresión:</strong> solicitar que eliminemos tus datos</li>
            <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos</li>
            <li><strong>Portabilidad:</strong> recibir tus datos en formato electrónico</li>
            <li><strong>Limitación:</strong> solicitar que limitemos el tratamiento</li>
          </ul>
          <p className="mt-4">Para ejercer estos derechos, escríbenos a <strong>info.teamsam@gmail.com</strong> indicando tu nombre, el derecho que deseas ejercer y una copia de tu DNI. Tienes también derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).</p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">8. Seguridad</h2>
          <p>Adoptamos las medidas técnicas y organizativas necesarias para garantizar la seguridad de tus datos y evitar su alteración, pérdida, tratamiento o acceso no autorizado. Toda la información transmitida a través de nuestro formulario está protegida mediante cifrado SSL.</p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">9. Cookies</h2>
          <p>Esta web puede utilizar cookies técnicas necesarias para su funcionamiento. No utilizamos cookies de seguimiento ni publicitarias sin tu consentimiento previo.</p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="text-2xl font-bold text-text-main mb-4">10. Cambios en esta política</h2>
          <p>Nos reservamos el derecho a modificar esta política de privacidad para adaptarla a cambios legislativos o a modificaciones en nuestros servicios. Te notificaremos cualquier cambio relevante a través de la web.</p>
        </section>

        {/* Contacto */}
        <div className="bg-support-warm rounded-2xl p-8 mt-12">
          <h3 className="text-xl font-bold text-text-main mb-4">¿Tienes alguna pregunta?</h3>
          <p className="mb-6">Si tienes dudas sobre cómo tratamos tus datos, no dudes en contactarnos:</p>
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
