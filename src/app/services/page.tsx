'use client';

import Link from 'next/link';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { PRACTICE_INFO, SERVICES } from '@/lib/constants';
import { AnimatedSection, StaggerContainer, StaggerItem, PageTransition } from '@/components/AnimatedSection';
import { ServiceCard } from '@/components/ServiceCard';
import { Callout } from '@/components/Callout';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  heroTitle: {
    en: 'Our Counseling Services',
    es: 'Nuestros Servicios de Consejería',
  },
  heroSubtitle: {
    en: `Thoughtful, personalized approaches to support you through life's challenges. We offer services for individuals, children, and families in ${PRACTICE_INFO.location.city} and surrounding areas.`,
    es: `Enfoques reflexivos y personalizados para apoyarte a través de los desafíos de la vida. Ofrecemos servicios para individuos, niños y familias en ${PRACTICE_INFO.location.city} y áreas circundantes.`,
  },
  notSure: {
    en: 'Not sure where to start?',
    es: '¿No estás seguro por dónde empezar?',
  },
  findingFit: {
    en: 'Finding the Right Fit',
    es: 'Encontrando el Ajuste Correcto',
  },
  findingFitSubtitle: {
    en: "Consider these questions to help guide your decision. You're also welcome to discuss options during your free consultation.",
    es: 'Considera estas preguntas para ayudar a guiar tu decisión. También puedes discutir opciones durante tu consulta gratuita.',
  },
  stillUnsure: {
    en: "Still unsure? That's completely okay.",
    es: '¿Todavía no estás seguro? Está completamente bien.',
  },
  scheduleConsultation: {
    en: 'Schedule a Free Consultation',
    es: 'Programa una Consulta Gratis',
  },
  pleaseNote: {
    en: 'Please Note',
    es: 'Nota Importante',
  },
  noteText: {
    en: "Our services are designed for ongoing therapeutic support and are not intended for crisis or emergency care. If you're experiencing a mental health emergency, please call 911 or go to your nearest emergency room. You can also contact the 988 Suicide & Crisis Lifeline by calling or texting 988.",
    es: 'Nuestros servicios están diseñados para apoyo terapéutico continuo y no están destinados para atención de crisis o emergencia. Si estás experimentando una emergencia de salud mental, por favor llama al 911 o ve a la sala de emergencias más cercana. También puedes contactar la Línea de Crisis y Suicidio 988 llamando o enviando un mensaje de texto al 988.',
  },
  readyToStart: {
    en: 'Ready to Get Started?',
    es: '¿Listo para Comenzar?',
  },
  readySubtitle: {
    en: "The first step is a conversation. Reach out to schedule your free consultation and let's discuss how we can support you.",
    es: 'El primer paso es una conversación. Comunícate para programar tu consulta gratuita y hablemos sobre cómo podemos apoyarte.',
  },
  requestConsultation: {
    en: 'Request a Free Consultation',
    es: 'Solicitar una Consulta Gratis',
  },
  learnAbout: {
    en: 'Learn about',
    es: 'Conoce más sobre',
  },
  // Service titles
  individual: {
    en: 'Individual Counseling',
    es: 'Consejería Individual',
  },
  individualDesc: {
    en: 'A safe space to explore your thoughts, feelings, and experiences with personalized support.',
    es: 'Un espacio seguro para explorar tus pensamientos, sentimientos y experiencias con apoyo personalizado.',
  },
  playTherapy: {
    en: 'Play Therapy',
    es: 'Terapia de Juego',
  },
  playTherapyDesc: {
    en: 'Helping children express themselves and work through challenges in a developmentally appropriate way.',
    es: 'Ayudando a los niños a expresarse y superar desafíos de una manera apropiada para su desarrollo.',
  },
  family: {
    en: 'Family Counseling',
    es: 'Consejería Familiar',
  },
  familyDesc: {
    en: 'Strengthening communication and connection within your family unit.',
    es: 'Fortaleciendo la comunicación y conexión dentro de tu unidad familiar.',
  },
  // Decision questions
  q1: {
    en: 'Are you an adult seeking support for yourself?',
    es: '¿Eres un adulto buscando apoyo para ti mismo?',
  },
  a1: {
    en: 'Individual counseling may be a good fit.',
    es: 'La consejería individual puede ser una buena opción.',
  },
  q2: {
    en: 'Is your child struggling emotionally or behaviorally?',
    es: '¿Tu hijo está luchando emocional o conductualmente?',
  },
  a2: {
    en: 'Play therapy offers developmentally appropriate support for children.',
    es: 'La terapia de juego ofrece apoyo apropiado para el desarrollo de los niños.',
  },
  q3: {
    en: 'Is your family facing communication challenges or conflict?',
    es: '¿Tu familia enfrenta desafíos de comunicación o conflictos?',
  },
  a3: {
    en: 'Family counseling can help strengthen your relationships.',
    es: 'La consejería familiar puede ayudar a fortalecer tus relaciones.',
  },
};

export default function ServicesPage() {
  const { t } = useLanguage();

  const serviceDecisions = [
    {
      question: t(translations.q1),
      answer: t(translations.a1),
      service: 'individual',
      serviceName: t(translations.individual).toLowerCase(),
    },
    {
      question: t(translations.q2),
      answer: t(translations.a2),
      service: 'playTherapy',
      serviceName: t(translations.playTherapy).toLowerCase(),
    },
    {
      question: t(translations.q3),
      answer: t(translations.a3),
      service: 'family',
      serviceName: t(translations.family).toLowerCase(),
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 gradient-hero">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-warm-950 mb-6">
              {t(translations.heroTitle)}
            </h1>
            <p className="text-lg text-warm-700 leading-relaxed">
              {t(translations.heroSubtitle)}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <StaggerItem>
              <ServiceCard
                title={t(translations.individual)}
                description={t(translations.individualDesc)}
                href={`/services/${SERVICES.individual.slug}`}
                icon="User"
                color="primary"
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title={t(translations.playTherapy)}
                description={t(translations.playTherapyDesc)}
                href={`/services/${SERVICES.playTherapy.slug}`}
                icon="Puzzle"
                color="secondary"
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title={t(translations.family)}
                description={t(translations.familyDesc)}
                href={`/services/${SERVICES.family.slug}`}
                icon="Users"
                color="accent"
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Which Service Section */}
      <section className="section-alt">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-accent-100 px-4 py-2 rounded-full text-accent-700 text-sm mb-4">
                <HelpCircle className="w-4 h-4" />
                {t(translations.notSure)}
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-4">
                {t(translations.findingFit)}
              </h2>
              <p className="text-warm-600">
                {t(translations.findingFitSubtitle)}
              </p>
            </div>

            <div className="space-y-4">
              {serviceDecisions.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-6 shadow-soft">
                    <p className="font-medium text-warm-900 mb-2">
                      {item.question}
                    </p>
                    <p className="text-warm-600 text-sm mb-3">
                      {item.answer}
                    </p>
                    <Link 
                      href={`/services/${SERVICES[item.service as keyof typeof SERVICES].slug}`}
                      className="text-primary-500 hover:text-primary-600 text-sm font-medium inline-flex items-center gap-1"
                    >
                      {t(translations.learnAbout)} {item.serviceName}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.4} className="text-center mt-8">
              <p className="text-warm-600 mb-4">
                {t(translations.stillUnsure)}
              </p>
              <Link href="/contact#consultation" className="btn-primary">
                {t(translations.scheduleConsultation)}
              </Link>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* Important Note */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-2xl mx-auto">
            <Callout variant="info" title={t(translations.pleaseNote)}>
              <p>{t(translations.noteText)}</p>
            </Callout>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-4">
              {t(translations.readyToStart)}
            </h2>
            <p className="text-warm-600 mb-8">
              {t(translations.readySubtitle)}
            </p>
            <Link href="/contact#consultation" className="btn-primary">
              {t(translations.requestConsultation)}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
