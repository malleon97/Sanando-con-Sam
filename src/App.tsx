import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Check, Star, Apple, Dumbbell, Heart, 
  ChevronDown, ChevronUp, Instagram, Youtube, Send, MessageCircle,
  ArrowRight, Users, Sparkles
} from 'lucide-react';

// --- Componentes de Apoyo ---

const SectionTitle = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-12 px-4">
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-text-main'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`max-w-2xl mx-auto text-lg ${light ? 'text-white/80' : 'text-text-secondary'}`}>
        {subtitle}
      </p>
    )}
    <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
  </div>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href
}: { 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'white', 
  className?: string,
  onClick?: () => void,
  href?: string
}) => {
  const baseStyles = "px-8 py-4 rounded-lg font-bold transition-all duration-300 text-center inline-block";
  const variants = {
    primary: "bg-accent-cta text-white hover:bg-primary-dark shadow-lila",
    secondary: "border-2 border-primary text-primary-dark hover:bg-support-warm",
    white: "bg-white text-text-main hover:bg-support-warm shadow-md"
  };

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- Secciones ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedObjective, setSelectedObjective] = useState('Perder peso');

  const handleSelectProgram = (programName: string) => {
    setSelectedObjective(programName);
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
  };

  const faqs = [
    {
      q: "¿Necesito tener experiencia previa para empezar?",
      a: "¡Para nada! Mis programas están diseñados para todos los niveles. Si eres principiante, empezaremos desde las bases para que te sientas segura y cómoda en cada paso."
    },
    {
      q: "¿Cómo funcionan las sesiones de entrenamiento online?",
      a: "Recibirás tu planificación personalizada a través de mi plataforma. Tendrás vídeos explicativos de cada ejercicio, seguimiento de tus progresos y contacto directo conmigo por WhatsApp para resolver dudas en tiempo real."
    },
    {
      q: "¿Los planes nutricionales son dietas restrictivas?",
      a: "Rotundamente no. Mi enfoque es la nutrición consciente. Aprenderás a comer de todo, disfrutando de la comida y adaptando los menús a tus gustos y estilo de vida, sin pasar hambre ni prohibiciones absurdas."
    },
    {
      q: "¿Qué pasa si no veo resultados?",
      a: "El compromiso es mutuo. Si sigues el plan y no hay cambios, revisaremos la estrategia juntas. Mi objetivo es tu éxito, y ajustaremos lo que sea necesario para que alcances tus metas de forma saludable."
    },
    {
      q: "¿Puedo compaginar el programa con mi trabajo y familia?",
      a: "Esa es la clave de mi método. No tú te adaptas al plan, el plan se adapta a ti. Diseñaremos rutinas que encajen en tu agenda real, por muy apretada que sea."
    },
    {
      q: "¿Cómo me pongo en contacto con Sam fuera de las sesiones?",
      a: "Tendrás acceso a mi WhatsApp personal para cualquier duda urgente o motivación extra que necesites. Estoy aquí para acompañarte en todo el proceso."
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
      {/* [1] NAVEGACIÓN STICKY */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lila py-3' : 'bg-transparent py-5'} border-b border-primary/20`}>
        <div className="container mx-auto px-10 flex justify-between items-center h-[70px]">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-primary text-2xl">✦</span>
            <span className="text-2xl font-display font-bold text-text-main">Sanando con Sam</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-text-main hover:text-primary-dark font-semibold transition-colors text-sm">Inicio</a>
            <a href="#sobre-mi" className="text-text-main hover:text-primary-dark font-semibold transition-colors text-sm">Sobre Mí</a>
            <a href="#servicios" className="text-text-main hover:text-primary-dark font-semibold transition-colors text-sm">Servicios</a>
            <a href="#resultados" className="text-text-main hover:text-primary-dark font-semibold transition-colors text-sm">Resultados</a>
            <a href="#contacto" className="text-text-main hover:text-primary-dark font-semibold transition-colors text-sm">Contacto</a>
            <Button variant="primary" className="px-6 py-2 text-xs rounded-full" href="#contacto">Reserva tu consulta gratis</Button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-text-main" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-primary/20 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">Inicio</a>
                <a href="#sobre-mi" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">Sobre Mí</a>
                <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">Servicios</a>
                <a href="#resultados" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">Resultados</a>
                <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">Contacto</a>
                <Button variant="primary" onClick={() => setIsMenuOpen(false)} href="#contacto">Reserva tu consulta gratis</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* [2] HERO SECTION */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden hero-gradient">
        <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Tu mejor versión <br /> empieza hoy
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-xl leading-relaxed">
              Entrenamiento personalizado y nutrición consciente para una vida más activa, más sana y más tuya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="primary" href="#contacto">Empieza tu transformación</Button>
              <Button variant="secondary" href="#servicios">Conoce mis programas</Button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-6">
              <div className="flex items-center gap-2 text-text-secondary font-semibold text-xs uppercase tracking-wider">
                <span className="text-primary-dark text-lg">✓</span>
                <span>+150 clientas satisfechas</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary font-semibold text-xs uppercase tracking-wider">
                <span className="text-primary-dark text-lg">✓</span>
                <span>Método 100% personalizado</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary font-semibold text-xs uppercase tracking-wider">
                <span className="text-primary-dark text-lg">✓</span>
                <span>Primera consulta GRATIS</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="w-72 h-72 md:w-[320px] md:h-[320px] rounded-full bg-gradient-to-b from-primary to-accent-cta p-2 shadow-lila border-8 border-white">
              <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                <div className="text-8xl font-display font-bold text-white opacity-80">SS</div>
              </div>
            </div>
            <div className="absolute bottom-5 -right-5 md:-right-10 bg-white p-5 rounded-xl shadow-lila max-w-[220px] border-l-4 border-primary">
              <strong className="block text-sm mb-1">Hola, soy Sam</strong>
              <p className="text-xs leading-relaxed text-text-secondary">
                Ayudo a mujeres a recuperar su energía y amor propio a través del movimiento consciente.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* [3] SOBRE SAM */}
      <section id="sobre-mi" className="py-20 bg-white">
        <div className="container mx-auto px-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="relative">
              <div className="w-full aspect-square rounded-full border-4 border-primary p-4">
                <div className="w-full h-full rounded-full bg-support-warm flex items-center justify-center overflow-hidden">
                   <div className="text-6xl font-display font-bold text-primary">SAM</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">Hola, soy Sam</h2>
            <div className="space-y-4 text-lg text-text-secondary mb-8 leading-relaxed">
              <p>
                Mi camino en el mundo del bienestar no empezó en un gimnasio, sino buscando respuestas para mi propia salud. Descubrí que el movimiento y la alimentación no son castigos, sino actos de amor propio.
              </p>
              <p>
                Tras años de formación y experiencia, decidí crear <strong>Sanando con Sam</strong> para acompañar a personas como tú a romper con el ciclo de dietas restrictivas y entrenamientos aburridos.
              </p>
            </div>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Graduada en Ciencias del Deporte",
                "Certificada en Nutrición Deportiva",
                "+3 años acompañando transformaciones",
                "Especialista en entrenamiento funcional"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark">
                    <Check size={14} />
                  </div>
                  <span className="font-semibold text-text-main text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-xl text-text-main bg-support-warm/50 rounded-r-lg">
              "No se trata solo de entrenar. Se trata de construir una relación sana contigo misma."
            </blockquote>
          </div>
        </div>
      </section>

      {/* [4] SERVICIOS */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-10">
          <SectionTitle 
            title="Programas a tu medida" 
            subtitle="Elige el camino que mejor se adapte a tus objetivos actuales. Todos mis planes son 100% personalizados."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-primary flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Personal Online</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Sesiones adaptadas a tu cuerpo, objetivos y disponibilidad semanal.
                </p>
              </div>
              <ul className="space-y-2 mb-8 text-xs text-text-secondary list-none">
                <li>• Seguimiento WhatsApp</li>
                <li>• Plan flexible</li>
              </ul>
              <div className="mt-auto">
                <div className="text-2xl font-bold text-text-main mb-4">89€/mes</div>
                <Button variant="primary" className="w-full py-2 text-xs" onClick={() => handleSelectProgram('Entrenamiento Personal Online')}>Quiero este plan</Button>
              </div>
            </motion.div>

            {/* Tarjeta 2 - DESTACADA */}
            <motion.div 
              whileHover={{ y: -15 }}
              className="bg-support-warm p-8 rounded-2xl shadow-lila border-t-6 border-accent-cta flex flex-col relative transform -translate-y-2"
            >
              <div className="mb-6">
                <div className="bg-primary text-text-main text-[10px] font-bold px-2 py-1 rounded inline-block mb-2">MÁS POPULAR</div>
                <h3 className="text-xl font-bold mb-2">Salud Activa Total</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Combinación perfecta de entreno + nutrición + mentalidad positiva.
                </p>
              </div>
              <ul className="space-y-2 mb-8 text-xs text-text-secondary list-none">
                <li>• Todo lo anterior</li>
                <li>• Comunidad privada</li>
              </ul>
              <div className="mt-auto">
                <div className="text-2xl font-bold text-text-main mb-4">
                  139€ <span className="text-xs text-text-secondary line-through opacity-50 ml-2">180€</span>
                </div>
                <Button variant="primary" className="w-full py-2 text-xs" onClick={() => handleSelectProgram('Programa Salud Activa Total')}>¡Lo quiero todo!</Button>
              </div>
            </motion.div>

            {/* Tarjeta 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-primary flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Plan Nutricional</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Aprende a comer bien sin restricciones absurdas ni efecto rebote.
                </p>
              </div>
              <ul className="space-y-2 mb-8 text-xs text-text-secondary list-none">
                <li>• Recetas saludables</li>
                <li>• Análisis de hábitos</li>
              </ul>
              <div className="mt-auto">
                <div className="text-2xl font-bold text-text-main mb-4">69€/mes</div>
                <Button variant="primary" className="w-full py-2 text-xs" onClick={() => handleSelectProgram('Plan Nutricional Personalizado')}>Quiero este plan</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* [5] CÓMO FUNCIONA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Tu camino hacia el cambio" subtitle="Un proceso sencillo y acompañado para que nunca te sientas sola." />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-primary/20 -z-10"></div>
            
            {[
              { step: "01", title: "Consulta gratuita", desc: "Hablamos de tus objetivos, miedos y situación actual sin compromiso." },
              { step: "02", title: "Diseño de tu plan", desc: "Creo un programa 100% adaptado a tu ritmo de vida y preferencias." },
              { step: "03", title: "Empezamos juntas", desc: "Entrenamiento, nutrición y seguimiento constante para que no decaigas." },
              { step: "04", title: "Transformación real", desc: "Cambios visibles, más energía y hábitos que te acompañarán siempre." }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-24 h-24 rounded-full bg-support-warm border-2 border-primary flex items-center justify-center text-3xl font-bold text-primary-dark mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [6] TESTIMONIOS */}
      <section id="resultados" className="py-20 bg-secondary-soft/30">
        <div className="container mx-auto px-4">
          <SectionTitle title="Historias que inspiran" subtitle="Ellas ya han dado el paso. Mira lo que han conseguido con el método de Sam." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Lucía García", result: "Bajé 8 kg en 3 meses", text: "Sam me enseñó que no hace falta sufrir para ver resultados. He recuperado mi energía y por fin me gusta lo que veo en el espejo.", color: "bg-primary" },
              { name: "Elena Martínez", result: "Aprendí a comer sin culpa", text: "Antes vivía a dieta. Ahora disfruto de la comida y me siento más fuerte que nunca. El seguimiento de Sam es increíble.", color: "bg-accent-cta" },
              { name: "Marta Ruiz", result: "Hábito de deporte real", text: "Nunca pensé que el deporte me gustaría tanto. Sam adapta todo a mi horario de oficina y familia. ¡Es la mejor inversión!", color: "bg-primary-dark" }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-primary text-primary" />)}
                </div>
                <p className="text-lg italic text-text-main mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold`}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h5 className="font-bold text-text-main">{t.name}</h5>
                    <p className="text-sm text-primary-dark font-semibold">{t.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [7] OFERTA / BANNER CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-accent-cta rounded-[40px] p-12 text-center text-white relative overflow-hidden shadow-lila">
            {/* Decorative SVGs */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/4 translate-y-1/4"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Lista para empezar?</h2>
              <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90">
                Primera consulta totalmente gratis y sin compromiso. Cuéntame tu historia y diseñemos tu plan.
              </p>
              <Button variant="white" className="text-primary-dark font-bold text-lg" href="#contacto">
                Reservar mi consulta gratis
              </Button>
              <p className="mt-6 text-sm font-semibold flex items-center justify-center gap-2">
                <Sparkles size={16} /> Solo quedan 4 plazas disponibles este mes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* [8] FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle title="Dudas frecuentes" />
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-primary/20 rounded-2xl overflow-hidden">
                <button 
                  className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-support-warm transition-colors"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="font-bold text-lg text-text-main">{faq.q}</span>
                  {activeFaq === i ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-primary" />}
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-text-secondary border-t border-primary/10">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [9] FORMULARIO DE CONTACTO */}
      <section id="contacto" className="py-20 bg-support-warm">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-[40px] shadow-lila overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-primary p-12 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 text-white">Hablemos</h3>
              <p className="mb-8 opacity-90">
                Rellena el formulario y me pondré en contacto contigo en menos de 24 horas para agendar tu consulta gratuita.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <span>+34 600 000 000</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Send size={20} />
                  </div>
                  <span>hola@sanandoconsam.com</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-12">
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6">
                    <Check size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">¡Recibido!</h3>
                  <p className="text-text-secondary text-lg">
                    Sam se pondrá en contacto contigo en menos de 24h. ¡Estamos deseando empezar!
                  </p>
                  <Button variant="secondary" className="mt-8" onClick={() => setFormStatus('idle')}>
                    Enviar otro mensaje
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-text-main mb-2">Nombre completo</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-text-main mb-2">Email</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-text-main mb-2">Teléfono</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="600 000 000" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-text-main mb-2">¿Cuál es tu objetivo?</label>
                      <select 
                        value={selectedObjective}
                        onChange={(e) => setSelectedObjective(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      >
                        <option>Entrenamiento Personal Online</option>
                        <option>Plan Nutricional Personalizado</option>
                        <option>Programa Salud Activa Total</option>
                        <option>Aumentar mi energía</option>
                        <option>Otro</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-main mb-2">Mensaje libre</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Cuéntame un poco más sobre ti..."></textarea>
                  </div>
                  <Button variant="primary" className="w-full flex items-center justify-center gap-2">
                    Enviar mi mensaje a Sam <ArrowRight size={20} />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* [10] FOOTER */}
      <footer className="bg-text-main py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="text-primary" size={32} />
            <span className="text-3xl font-display font-bold">Sanando con Sam</span>
          </div>
          <p className="text-white/70 max-w-md mx-auto mb-10 text-lg italic">
            "Tu salud es el proyecto más importante de tu vida. Empecemos a cuidarlo juntas."
          </p>
          
          <div className="flex justify-center gap-8 mb-12">
            <a href="#" className="hover:text-primary transition-colors"><Instagram size={28} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Youtube size={28} /></a>
            <a href="#" className="hover:text-primary transition-colors"><MessageCircle size={28} /></a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-12 opacity-80">
            <a href="#inicio" className="hover:text-primary">Inicio</a>
            <a href="#sobre-mi" className="hover:text-primary">Sobre Mí</a>
            <a href="#servicios" className="hover:text-primary">Servicios</a>
            <a href="#resultados" className="hover:text-primary">Resultados</a>
            <a href="#contacto" className="hover:text-primary">Contacto</a>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-sm opacity-60">
            © 2025 Sanando con Sam · Política de Privacidad · Aviso Legal
          </div>
        </div>
      </footer>

      {/* [11] BOTÓN FLOTANTE WHATSAPP */}
      <a 
        href="https://wa.me/34600000000" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40 group"
      >
        <MessageCircle size={32} fill="white" />
        <div className="absolute right-20 bg-white text-text-main px-4 py-2 rounded-lg shadow-md font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          ¡Escríbeme!
        </div>
      </a>
    </div>
  );
}
