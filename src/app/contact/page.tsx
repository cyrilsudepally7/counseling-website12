'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ContactForm } from '@/components/ContactForm';
import { Callout } from '@/components/Callout';
import { PRACTICE_INFO } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  heroTitle: {
    en: 'Request a Free Consultation',
    es: 'Solicita una Consulta Gratis',
  },
  heroSubtitle: {
    en: `Ready to take the first step? Fill out the form below to request your free consultation. I typically respond within ${PRACTICE_INFO.responseTime}.`,
    es: `¿Listo para dar el primer paso? Completa el formulario a continuación para solicitar tu consulta gratuita. Normalmente respondo dentro de ${PRACTICE_INFO.responseTime}.`,
  },
  emergencyTitle: {
    en: 'If you are experiencing an emergency:',
    es: 'Si estás experimentando una emergencia:',
  },
  formTitle: {
    en: 'Request Your Free Consultation',
    es: 'Solicita Tu Consulta Gratis',
  },
  formSubtitle: {
    en: `A free consultation is a chance for us to connect and see if we're a good fit. There's no pressure and no obligation—just an opportunity to ask questions and learn more about how therapy might help. Fill out the form below and I'll get back to you within ${PRACTICE_INFO.responseTime}.`,
    es: `Una consulta gratuita es una oportunidad para conectar y ver si somos compatibles. No hay presión ni obligación, solo una oportunidad para hacer preguntas y aprender más sobre cómo la terapia podría ayudar. Completa el formulario a continuación y te responderé dentro de ${PRACTICE_INFO.responseTime}.`,
  },
  privacyNotice: {
    en: 'Important Privacy Notice',
    es: 'Aviso de Privacidad Importante',
  },
  privacyText: {
    en: 'Please do not include sensitive personal health information in this form. Electronic communications may not be secure. Submitting this form does not establish a therapist-client relationship. This form is not for emergencies.',
    es: 'Por favor no incluyas información sensible de salud personal en este formulario. Las comunicaciones electrónicas pueden no ser seguras. Enviar este formulario no establece una relación terapeuta-cliente. Este formulario no es para emergencias.',
  },
  contactInfo: {
    en: 'Contact Information',
    es: 'Información de Contacto',
  },
  location: {
    en: 'Location',
    es: 'Ubicación',
  },
  phone: {
    en: 'Phone',
    es: 'Teléfono',
  },
  voicemail: {
    en: 'Voicemail available 24/7',
    es: 'Buzón de voz disponible 24/7',
  },
  email: {
    en: 'Email',
    es: 'Correo Electrónico',
  },
  officeHours: {
    en: 'Office Hours',
    es: 'Horario de Oficina',
  },
  byAppointment: {
    en: 'By appointment only',
    es: 'Solo con cita previa',
  },
  responseTime: {
    en: 'I typically respond to consultation requests within 24 hours. If you need immediate support call 911 or 988.',
    es: 'Normalmente respondo a las solicitudes de consulta dentro de 24 horas. Si necesitas apoyo inmediato llama al 911 o 988.',
  },
  faqTitle: {
    en: 'Questions About Getting Started?',
    es: '¿Preguntas Sobre Cómo Empezar?',
  },
  faq1Q: {
    en: 'What happens during a free consultation?',
    es: '¿Qué sucede durante una consulta gratuita?',
  },
  faq1A: {
    en: "The consultation is a brief 15-20 minute conversation where we can connect, discuss what brings you to therapy, and see if we might be a good fit to work together. There's no pressure or obligation—it's simply an opportunity to ask questions and get a sense of how I work.",
    es: 'La consulta es una breve conversación de 15-20 minutos donde podemos conectar, discutir lo que te trae a la terapia, y ver si podríamos ser compatibles para trabajar juntos. No hay presión ni obligación, es simplemente una oportunidad para hacer preguntas y conocer cómo trabajo.',
  },
  faq2Q: {
    en: 'How soon can I get an appointment?',
    es: '¿Qué tan pronto puedo obtener una cita?',
  },
  faq2A: {
    en: "Availability varies, but I typically have openings within 1-2 weeks. During your consultation, we'll discuss scheduling and find times that work for you.",
    es: 'La disponibilidad varía, pero típicamente tengo espacios dentro de 1-2 semanas. Durante tu consulta, discutiremos la programación y encontraremos horarios que funcionen para ti.',
  },
  faq3Q: {
    en: 'Do you offer telehealth sessions?',
    es: '¿Ofreces sesiones de telesalud?',
  },
  faq3A: {
    en: 'Yes, I offer secure video sessions for clients located in Texas. Telehealth can be a convenient option that provides the same quality of care as in-person sessions.',
    es: 'Sí, ofrezco sesiones de video seguras para clientes ubicados en Texas. La telesalud puede ser una opción conveniente que proporciona la misma calidad de atención que las sesiones en persona.',
  },
  faq4Q: {
    en: "What if I'm not sure which service I need?",
    es: '¿Qué pasa si no estoy seguro de qué servicio necesito?',
  },
  faq4A: {
    en: "That's completely okay! During our consultation, we can talk through what you're experiencing and I can help you understand which approach might be most helpful. There's no need to have it all figured out beforehand.",
    es: '¡Está completamente bien! Durante nuestra consulta, podemos hablar sobre lo que estás experimentando y puedo ayudarte a entender qué enfoque podría ser más útil. No necesitas tenerlo todo resuelto de antemano.',
  },
  insuranceTitle: {
    en: 'Insurance Accepted',
    es: 'Seguros Aceptados',
  },
  insuranceComingSoon: {
    en: 'Coming Soon',
    es: 'Próximamente',
  },
  emergencyNotice: {
    en: 'This form is not for emergencies.',
    es: 'Este formulario no es para emergencias.',
  },
  emergencyText2: {
    en: 'If you are in crisis or experiencing a mental health emergency, please call 911 or go to your nearest emergency room. You can also contact the 988 Suicide & Crisis Lifeline for immediate support.',
    es: 'Si estás en crisis o experimentando una emergencia de salud mental, por favor llama al 911 o ve a la sala de emergencias más cercana. También puedes contactar la Línea de Crisis y Suicidio 988 para apoyo inmediato.',
  },
};

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-warm-950 mb-4">
              {t(translations.heroTitle)}
            </h1>
            <p className="text-lg md:text-xl text-warm-600 mb-6">
              {t(translations.heroSubtitle)}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Emergency Disclaimer - Prominent */}
      <section className="bg-red-600 py-4">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center">
            <span className="text-white font-semibold">{t(translations.emergencyTitle)}</span>
            <span className="text-white">
              Call <a href="tel:911" className="font-bold underline text-white hover:text-white/90">911</a> or go to your nearest emergency room. 
              For mental health crisis support, call <a href="tel:988" className="font-bold underline text-white hover:text-white/90">988</a>.
            </span>
          </div>
        </div>
      </section>

      {/* Consultation Request Form Section */}
      <section id="consultation" className="py-16 md:py-20 bg-cream-50 scroll-mt-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-warm-950 mb-4">
                  {t(translations.formTitle)}
                </h2>
                <p className="text-lg text-warm-600 mb-8">
                  {t(translations.formSubtitle)}
                </p>

                <ContactForm />

                {/* Post-form disclaimers */}
                <div className="mt-8 space-y-4">
                  <Callout variant="emergency">
                    <p className="font-medium">{t(translations.emergencyNotice)}</p>
                    <p>
                      {t(translations.emergencyText2)}
                    </p>
                  </Callout>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft sticky top-28">
                  {/* Office Photo */}
                  <div className="mb-6">
                    <div className="rounded-xl overflow-hidden">
                      <Image
                        src="/images/office-welcome.jpg"
                        alt="Welcoming reception area at Yet Counseling"
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-semibold text-warm-900 mb-6">
                    {t(translations.contactInfo)}
                  </h3>

                  <div className="space-y-6">
                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary-500" />
                      </div>
                      <div>
                        <p className="font-medium text-warm-900">{t(translations.location)}</p>
                        <p className="text-warm-600">
                          {PRACTICE_INFO.location.street}<br />
                          {PRACTICE_INFO.location.city}, {PRACTICE_INFO.location.state} {PRACTICE_INFO.location.zip}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-secondary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-warm-900">{t(translations.phone)}</p>
                        <a 
                          href={`tel:${PRACTICE_INFO.contact.phone.replace(/\D/g, '')}`}
                          className="text-primary-500 hover:text-primary-600 transition-colors"
                        >
                          {PRACTICE_INFO.contact.phone}
                        </a>
                        <p className="text-sm text-warm-500 mt-1">
                          {t(translations.voicemail)}
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-accent-600" />
                      </div>
                      <div>
                        <p className="font-medium text-warm-900">{t(translations.email)}</p>
                        <a 
                          href={`mailto:${PRACTICE_INFO.contact.email}`}
                          className="text-primary-500 hover:text-primary-600 transition-colors break-all"
                        >
                          {PRACTICE_INFO.contact.email}
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cream-200 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-warm-600" />
                      </div>
                      <div>
                        <p className="font-medium text-warm-900">{t(translations.officeHours)}</p>
                        <p className="text-warm-600">{PRACTICE_INFO.hours.display}</p>
                        <p className="text-sm text-warm-500 mt-1">
                          {t(translations.byAppointment)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Google Maps Embed */}
                  <div className="mt-8 pt-6 border-t border-warm-200">
                    <div className="aspect-video bg-warm-100 rounded-xl overflow-hidden">
                      <iframe
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(PRACTICE_INFO.location.mapQuery)}`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Office Location"
                      />
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="mt-6 p-4 bg-primary-50 rounded-xl">
                    <p className="text-sm text-primary-700">
                      {t(translations.responseTime)}
                    </p>
                  </div>

                  {/* Insurance */}
                  <div className="mt-6 p-4 bg-warm-50 rounded-xl">
                    <p className="font-medium text-warm-900 mb-2">{t(translations.insuranceTitle)}</p>
                    <p className="text-sm text-warm-600 mb-3">
                      {PRACTICE_INFO.insurance.accepted.join(' • ')}
                    </p>
                    <p className="font-medium text-warm-900 mb-2">{t(translations.insuranceComingSoon)}</p>
                    <p className="text-sm text-warm-500">
                      {PRACTICE_INFO.insurance.comingSoon.join(' • ')}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-warm-950 mb-4">
              {t(translations.faqTitle)}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-4">
              <ContactFAQItem 
                question={t(translations.faq1Q)}
                answer={t(translations.faq1A)}
              />
              <ContactFAQItem 
                question={t(translations.faq2Q)}
                answer={t(translations.faq2A)}
              />
              <ContactFAQItem 
                question={t(translations.faq3Q)}
                answer={t(translations.faq3A)}
              />
              <ContactFAQItem 
                question={t(translations.faq4Q)}
                answer={t(translations.faq4A)}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

function ContactFAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <motion.details
      className="group bg-cream-50 rounded-xl overflow-hidden"
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.2 }}
    >
      <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-medium text-warm-900 hover:text-primary-600 transition-colors">
        <span>{question}</span>
        <motion.span 
          className="text-primary-500 ml-4 flex-shrink-0"
          initial={false}
        >
          <svg 
            className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </summary>
      <div className="px-5 pb-5 text-warm-600">
        {answer}
      </div>
    </motion.details>
  );
}
