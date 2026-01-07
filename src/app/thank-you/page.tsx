'use client';

import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, Clock } from 'lucide-react';
import { PRACTICE_INFO } from '@/lib/constants';
import { AnimatedSection, PageTransition } from '@/components/AnimatedSection';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  title: {
    en: 'Thank You!',
    es: '¡Gracias!',
  },
  subtitle: {
    en: 'Your consultation request has been received.',
    es: 'Su solicitud de consulta ha sido recibida.',
  },
  nextSteps: {
    en: 'What Happens Next',
    es: 'Qué Sucede Después',
  },
  step1Title: {
    en: "I'll Review Your Request",
    es: 'Revisaré Su Solicitud',
  },
  step1Desc: {
    en: "I personally read every consultation request to understand your needs and how I might be able to help.",
    es: 'Leo personalmente cada solicitud de consulta para entender sus necesidades y cómo puedo ayudar.',
  },
  step2Title: {
    en: "I'll Reach Out Within 24 Hours",
    es: 'Me Comunicaré Dentro de 24 Horas',
  },
  step2Desc: {
    en: "I'll contact you using your preferred method to schedule a free 15-20 minute consultation.",
    es: 'Me comunicaré con usted usando su método preferido para programar una consulta gratuita de 15-20 minutos.',
  },
  step3Title: {
    en: "We'll Connect",
    es: 'Nos Conectaremos',
  },
  step3Desc: {
    en: "During our consultation, we'll discuss your concerns, answer questions, and determine if we're a good fit.",
    es: 'Durante nuestra consulta, discutiremos sus preocupaciones, responderemos preguntas y determinaremos si somos una buena opción.',
  },
  urgentTitle: {
    en: 'Need Immediate Support?',
    es: '¿Necesita Apoyo Inmediato?',
  },
  urgentDesc: {
    en: 'If you\'re experiencing a mental health emergency, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.',
    es: 'Si está experimentando una emergencia de salud mental, llame al 988 (Línea de Crisis y Suicidio) o vaya a la sala de emergencias más cercana.',
  },
  backHome: {
    en: 'Return to Home',
    es: 'Volver al Inicio',
  },
  exploreServices: {
    en: 'Explore Services',
    es: 'Explorar Servicios',
  },
};

export default function ThankYouPage() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center gradient-hero pt-32 pb-16">
        <div className="container-custom">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-warm-950 mb-4">
              {t(translations.title)}
            </h1>
            <p className="text-xl text-warm-700 mb-8">
              {t(translations.subtitle)}
            </p>

            {/* Response Time Callout */}
            <div className="inline-flex items-center gap-2 bg-primary-100 px-5 py-3 rounded-full text-primary-700">
              <Clock className="w-5 h-5" />
              <span className="font-medium">
                {t(translations.step2Title)}
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950">
              {t(translations.nextSteps)}
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* Step 1 */}
              <AnimatedSection delay={0.1}>
                <div className="flex items-start gap-4 p-6 bg-warm-50 rounded-2xl">
                  <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-primary-700">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-900 mb-1">
                      {t(translations.step1Title)}
                    </h3>
                    <p className="text-warm-600">
                      {t(translations.step1Desc)}
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Step 2 */}
              <AnimatedSection delay={0.2}>
                <div className="flex items-start gap-4 p-6 bg-warm-50 rounded-2xl">
                  <div className="w-10 h-10 bg-secondary-200 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-secondary-700">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-900 mb-1">
                      {t(translations.step2Title)}
                    </h3>
                    <p className="text-warm-600">
                      {t(translations.step2Desc)}
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Step 3 */}
              <AnimatedSection delay={0.3}>
                <div className="flex items-start gap-4 p-6 bg-warm-50 rounded-2xl">
                  <div className="w-10 h-10 bg-accent-200 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-accent-700">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-900 mb-1">
                      {t(translations.step3Title)}
                    </h3>
                    <p className="text-warm-600">
                      {t(translations.step3Desc)}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-12 bg-cream-50">
        <div className="container-custom">
          <AnimatedSection className="max-w-2xl mx-auto">
            <div className="bg-white border border-warm-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-warm-900 mb-2">
                    {t(translations.urgentTitle)}
                  </h3>
                  <p className="text-warm-600 text-sm">
                    {t(translations.urgentDesc)}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white rounded-2xl font-medium text-lg hover:bg-primary-600 transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            >
              {t(translations.backHome)}
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-warm-300 text-warm-700 rounded-2xl font-medium hover:bg-warm-50 transition-all duration-200"
            >
              {t(translations.exploreServices)}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
