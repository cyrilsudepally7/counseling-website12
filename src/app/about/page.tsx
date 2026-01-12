'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { PRACTICE_INFO } from '@/lib/constants';
import { AnimatedSection, PageTransition } from '@/components/AnimatedSection';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  pageTitle: {
    en: 'About',
    es: 'Acerca de',
  },
  heroSubtitle: {
    en: 'Creating a warm, welcoming space for healing and growth in',
    es: 'Creando un espacio cálido y acogedor para la sanación y el crecimiento en',
  },
  aboutMe: {
    en: 'About Me',
    es: 'Acerca de Mí',
  },
  bioP1: {
    en: "I bring a unique and comprehensive perspective to my counseling practice. I earned my bachelor's degree from Texas Tech University and hold master's degrees from both Southeastern Oklahoma State University and Angelo State University.",
    es: "Aporto una perspectiva única y comprehensiva a mi práctica de consejería. Obtuve mi licenciatura de Texas Tech University y tengo maestrías de Southeastern Oklahoma State University y Angelo State University.",
  },
  bioP2: {
    en: "As a parent, former educator, current special education counselor, and passionate advocate for special education, English as a Second Language (ESL), and mental health, I deeply understand the challenges children, adolescents, and their families face today. I am committed to providing a safe, supportive, and inclusive environment where clients can freely explore their emotions and experiences.",
    es: "Como madre, ex educadora, consejera de educación especial actual, y defensora apasionada de la educación especial, inglés como segundo idioma (ESL) y salud mental, comprendo profundamente los desafíos que enfrentan los niños, adolescentes y sus familias hoy en día. Estoy comprometida a proporcionar un ambiente seguro, de apoyo e inclusivo donde los clientes puedan explorar libremente sus emociones y experiencias.",
  },
  bioP3: {
    en: "Clients consistently feel heard, accepted, and at ease in the compassionate and calming atmosphere I create. Through our work together, they gain tools to foster positive change, build self-confidence, and develop healthier relationships.",
    es: "Los clientes consistentemente se sienten escuchados, aceptados y tranquilos en la atmósfera compasiva y calmante que creo. A través de nuestro trabajo juntos, obtienen herramientas para fomentar el cambio positivo, construir autoconfianza y desarrollar relaciones más saludables.",
  },
  experienceTitle: {
    en: 'My Clinical Experience',
    es: 'Mi Experiencia Clínica',
  },
  experienceIntro: {
    en: 'My clinical experience includes counseling children, teens, athletes, and adults, with specialized expertise working with neurodivergent individuals and play therapy. I address a wide range of concerns, including:',
    es: 'Mi experiencia clínica incluye consejería para niños, adolescentes, atletas y adultos, con experiencia especializada trabajando con individuos neurodivergentes y terapia de juego. Abordo una amplia gama de preocupaciones, incluyendo:',
  },
  concerns: {
    en: [
      'Autism and neurodiverse needs',
      'Anxiety and depression',
      'Grief and loss',
      'Behavioral challenges',
      'Self-harm',
      'Multicultural issues',
      'Trauma and life transitions',
      'Domestic violence and abuse',
      'Family and relationship conflicts',
    ],
    es: [
      'Autismo y necesidades neurodiversas',
      'Ansiedad y depresión',
      'Duelo y pérdida',
      'Desafíos de comportamiento',
      'Autolesión',
      'Problemas multiculturales',
      'Trauma y transiciones de vida',
      'Violencia doméstica y abuso',
      'Conflictos familiares y de relaciones',
    ],
  },
  spanishNote: {
    en: 'Additionally, I am fluent in Spanish, which allows me to better serve diverse communities and offer culturally responsive support.',
    es: 'Además, hablo español con fluidez, lo que me permite servir mejor a comunidades diversas y ofrecer apoyo culturalmente sensible.',
  },
  educationTitle: {
    en: 'Education & Credentials',
    es: 'Educación y Credenciales',
  },
  letsConnect: {
    en: "Let's Connect",
    es: 'Conectémonos',
  },
  connectSubtitle: {
    en: "I'd love to hear from you. Schedule a free consultation to see if we're a good fit for working together.",
    es: 'Me encantaría saber de ti. Programa una consulta gratuita para ver si somos una buena opción para trabajar juntos.',
  },
  requestConsultation: {
    en: 'Request a Free Consultation',
    es: 'Solicitar Consulta Gratis',
  },
  viewServices: {
    en: 'View Services',
    es: 'Ver Servicios',
  },
};

export default function AboutPage() {
  const { language, t } = useLanguage();

  const concerns = translations.concerns[language];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 gradient-hero">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-warm-950 mb-6">
              {t(translations.pageTitle)} {PRACTICE_INFO.therapist.name}
            </h1>
            <p className="text-lg text-warm-700 leading-relaxed">
              {t(translations.heroSubtitle)} {PRACTICE_INFO.location.city}, {PRACTICE_INFO.location.state}.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Photo */}
            <AnimatedSection className="lg:col-span-1">
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-soft-lg">
                <Image
                  src="/images/therapist-photo.jpg"
                  alt={PRACTICE_INFO.therapist.name}
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            {/* Bio Content */}
            <AnimatedSection delay={0.1} className="lg:col-span-2">
              <div className="prose prose-warm max-w-none">
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-6">
                  {t(translations.aboutMe)}
                </h2>
                
                <p className="text-warm-700 leading-relaxed mb-4">
                  {t(translations.bioP1)}
                </p>
                
                <p className="text-warm-700 leading-relaxed mb-4">
                  {t(translations.bioP2)}
                </p>
                
                <p className="text-warm-700 leading-relaxed mb-6">
                  {t(translations.bioP3)}
                </p>

                {/* Clinical Experience */}
                <h3 className="font-display text-xl font-semibold text-warm-900 mb-4">
                  {t(translations.experienceTitle)}
                </h3>
                
                <p className="text-warm-700 leading-relaxed mb-4">
                  {t(translations.experienceIntro)}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {concerns.map((concern, index) => (
                    <li key={index} className="flex items-start gap-2 text-warm-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                      {concern}
                    </li>
                  ))}
                </ul>

                <p className="text-warm-700 leading-relaxed mb-6 font-medium">
                  {t(translations.spanishNote)}
                </p>

                {/* Credentials Box */}
                <div className="bg-primary-50 rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <GraduationCap className="w-5 h-5 text-primary-500 mt-1" />
                    <h3 className="font-display font-semibold text-warm-900">
                      {t(translations.educationTitle)}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-warm-700">
                    <li>{PRACTICE_INFO.therapist.credentials} ({PRACTICE_INFO.therapist.licenseState})</li>
                    <li>Bachelor&apos;s Degree - Texas Tech University</li>
                    <li>Master&apos;s Degree - Southeastern Oklahoma State University</li>
                    <li>Master&apos;s Degree - Angelo State University</li>
                    <li>Specialized training in Play Therapy</li>
                    <li>Professional School Counselor</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-4">
              {t(translations.letsConnect)}
            </h2>
            <p className="text-warm-600 mb-8">
              {t(translations.connectSubtitle)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#consultation" className="btn-primary">
                {t(translations.requestConsultation)}
              </Link>
              <Link href="/services" className="btn-outline">
                {t(translations.viewServices)}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
