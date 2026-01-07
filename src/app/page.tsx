'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { PRACTICE_INFO } from '@/lib/constants';
import { AnimatedSection, PageTransition } from '@/components/AnimatedSection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ServicesCarousel } from '@/components/ServicesCarousel';
import { useLanguage } from '@/components/LanguageProvider';

// Translations for home page
const translations = {
  heroTitle: {
    en: "The Power Of Yet Counseling",
    es: "El Poder Del Todavía Consejería",
  },
  heroSubtitle: {
    en: "Caring, compassionate counseling for individuals, families, and children navigating life's challenges in Flower Mound, Texas.",
    es: "Consejería cariñosa y compasiva para individuos, familias y niños que navegan los desafíos de la vida en Flower Mound, Texas.",
  },
  requestConsultation: {
    en: 'Request a Free Consultation',
    es: 'Solicitar Consulta Gratis',
  },
  exploreServices: {
    en: 'Explore Services',
    es: 'Explorar Servicios',
  },
  howWeCanHelp: {
    en: 'How We Can Help',
    es: 'Cómo Podemos Ayudar',
  },
  servicesSubtitle: {
    en: 'Every person and family is unique. We offer tailored approaches to meet you where you are.',
    es: 'Cada persona y familia es única. Ofrecemos enfoques personalizados para encontrarte donde estás.',
  },
  servingArea: {
    en: 'Serving Flower Mound',
    es: 'Sirviendo Flower Mound',
  },
  surroundingAreas: {
    en: '& Surrounding Areas',
    es: 'y Áreas Circundantes',
  },
  convenientlyLocated: {
    en: 'Conveniently Located',
    es: 'Convenientemente Ubicado',
  },
  locationDesc: {
    en: 'Our practice is located in Flower Mound, Texas, and we welcome clients from throughout the surrounding communities.',
    es: 'Nuestra práctica está ubicada en Flower Mound, Texas, y damos la bienvenida a clientes de todas las comunidades circundantes.',
  },
  commonQuestions: {
    en: 'Common Questions',
    es: 'Preguntas Frecuentes',
  },
  commonQuestionsSubtitle: {
    en: 'Answers to questions we frequently hear from new clients.',
    es: 'Respuestas a las preguntas que frecuentemente escuchamos de nuevos clientes.',
  },
  readyToStart: {
    en: 'Ready to Take the First Step?',
    es: '¿Listo para Dar el Primer Paso?',
  },
  readySubtitle: {
    en: "We're here when you're ready. Schedule a free consultation to see if we're the right fit.",
    es: 'Estamos aquí cuando estés listo. Programa una consulta gratuita para ver si somos la opción correcta.',
  },
  faq1Question: {
    en: 'What happens during a free consultation?',
    es: '¿Qué sucede durante una consulta gratuita?',
  },
  faq1Answer: {
    en: "A consultation is a brief conversation where we can get to know each other. We'll discuss what brings you to counseling, answer your questions about the process, and determine if we're a good fit for working together. There's no pressure or obligation.",
    es: 'Una consulta es una breve conversación donde podemos conocernos. Hablaremos sobre lo que te trae a la consejería, responderemos tus preguntas sobre el proceso y determinaremos si somos una buena opción para trabajar juntos. No hay presión ni obligación.',
  },
  faq2Question: {
    en: 'Do you offer evening or weekend appointments?',
    es: '¿Ofrecen citas por la noche o los fines de semana?',
  },
  faq2Answer: {
    en: 'We understand that scheduling can be challenging. We offer flexible appointment times including some evening slots. Please reach out to discuss availability that works for your schedule.',
    es: 'Entendemos que la programación puede ser un desafío. Ofrecemos horarios de citas flexibles, incluyendo algunos horarios nocturnos. Por favor comunícate para discutir la disponibilidad que funcione para tu horario.',
  },
  faq3Question: {
    en: "What if I'm not sure which service is right for me?",
    es: '¿Qué pasa si no estoy seguro de qué servicio es el adecuado para mí?',
  },
  faq3Answer: {
    en: "That's completely normal! During your free consultation, we'll talk through your situation and concerns. Together, we'll determine which approach would be most helpful for you or your family.",
    es: '¡Eso es completamente normal! Durante tu consulta gratuita, hablaremos sobre tu situación y preocupaciones. Juntos, determinaremos qué enfoque sería más útil para ti o tu familia.',
  },
};

export default function HomePage() {
  const { t } = useLanguage();

  const homeFAQs = [
    {
      question: t(translations.faq1Question),
      answer: t(translations.faq1Answer),
    },
    {
      question: t(translations.faq2Question),
      answer: t(translations.faq2Answer),
    },
    {
      question: t(translations.faq3Question),
      answer: t(translations.faq3Answer),
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section with Background Image - Full viewport height */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-office.jpg"
            alt="Welcoming counseling office"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60" />
        </div>
        
        <div className="container-custom relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
          <AnimatedSection className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-warm-950 mb-6 leading-tight">
              {t(translations.heroTitle)}
            </h1>
            <p className="text-lg md:text-xl text-warm-700 mb-8 leading-relaxed">
              {t(translations.heroSubtitle)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact#consultation" 
                className="inline-flex items-center justify-center px-10 py-5 bg-primary-500 text-white text-lg font-semibold rounded-2xl shadow-lg shadow-primary-500/30 hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                {t(translations.requestConsultation)}
              </Link>
              <Link href="/services" className="btn-outline text-lg px-8 py-4">
                {t(translations.exploreServices)}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-warm-950 mb-4">
              {t(translations.howWeCanHelp)}
            </h2>
            <p className="text-warm-600 max-w-2xl mx-auto">
              {t(translations.servicesSubtitle)}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <ServicesCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* Areas Served */}
      <section className="section-alt">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-100 px-4 py-2 rounded-full text-primary-600 text-sm mb-6">
              <MapPin className="w-4 h-4" />
              {t(translations.servingArea)} {t(translations.surroundingAreas)}
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-4">
              {t(translations.convenientlyLocated)}
            </h2>
            <p className="text-warm-600 leading-relaxed mb-4">
              {t(translations.locationDesc)}
            </p>
            <div className="flex items-center justify-center gap-2 text-warm-500 text-sm">
              <Clock className="w-4 h-4" />
              {PRACTICE_INFO.hours.display}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-4">
              {t(translations.commonQuestions)}
            </h2>
            <p className="text-warm-600 max-w-2xl mx-auto">
              {t(translations.commonQuestionsSubtitle)}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="max-w-2xl mx-auto">
            <FAQAccordion items={homeFAQs} />
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-primary-400">
        <div className="container-custom">
          <AnimatedSection className="text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              {t(translations.readyToStart)}
            </h2>
            <p className="text-primary-100 max-w-2xl mx-auto mb-8">
              {t(translations.readySubtitle)}
            </p>
            <Link href="/contact#consultation" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-2xl font-medium text-lg hover:bg-primary-50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft-lg">
              {t(translations.requestConsultation)}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
