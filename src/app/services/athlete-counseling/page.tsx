import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Trophy, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { PRACTICE_INFO, SEO_DEFAULTS } from '@/lib/constants';
import { AnimatedSection, StaggerContainer, StaggerItem, PageTransition } from '@/components/AnimatedSection';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: `Athlete Counseling in ${PRACTICE_INFO.location.city} | ${PRACTICE_INFO.name}`,
  description: `Sports psychology and athlete counseling in ${PRACTICE_INFO.location.city}, ${PRACTICE_INFO.location.state}. Mental performance support, injury recovery, and personal wellbeing for athletes at all levels.`,
  openGraph: {
    title: `Athlete Counseling | ${PRACTICE_INFO.name}`,
    description: `Mental performance and wellbeing support for athletes in ${PRACTICE_INFO.location.city}.`,
  },
  alternates: {
    canonical: `${SEO_DEFAULTS.siteUrl}/services/athlete-counseling`,
  },
};

const howWeHelp = [
  'Overcome performance anxiety and mental blocks',
  'Build confidence and mental resilience',
  'Process injuries and support recovery',
  'Navigate transitions (retirement, team changes)',
  'Manage pressure and expectations',
  'Balance athletics with other life demands',
];

const commonConcerns = [
  'Performance anxiety',
  'Loss of motivation',
  'Injury recovery',
  'Identity & athletics',
  'Burnout',
  'Team dynamics',
  'Pressure & expectations',
  'Career transitions',
];

const faqs = [
  {
    question: 'Do you work with athletes at all levels?',
    answer: 'Yes! Whether you\'re a youth athlete, high school or college competitor, recreational athlete, or professional, the mental and emotional aspects of sports are important. I work with athletes at every level who want to improve their mental game or address challenges affecting their performance and wellbeing.',
  },
  {
    question: 'How is athlete counseling different from regular therapy?',
    answer: 'While we use many of the same therapeutic approaches, athlete counseling specifically addresses the unique pressures, identity issues, and mental demands of competitive sports. I understand the athletic culture and the specific challenges athletes face.',
  },
  {
    question: 'I\'m dealing with an injury. Can counseling help?',
    answer: 'Absolutely. Injuries can be devastating—not just physically, but emotionally. We can work through the frustration, grief, identity challenges, and fear that often accompany injuries, supporting your mental health throughout recovery and return to play.',
  },
  {
    question: 'Will you help me perform better?',
    answer: 'Mental skills training can definitely improve performance. But beyond that, I help athletes address underlying issues—anxiety, perfectionism, burnout, relationship problems—that may be affecting their game. Sometimes the biggest performance gains come from addressing what\'s happening off the field.',
  },
];

export default function AthleteCounselingPage() {
  return (
    <PageTransition>
      {/* Breadcrumb */}
      <div className="bg-warm-50 py-3 border-b border-warm-100">
        <div className="container-custom">
          <Link 
            href="/services" 
            className="text-warm-500 hover:text-primary-600 text-sm inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service-athlete.jpg"
            alt="Athlete counseling and sports psychology"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70" />
        </div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl">
            <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-6">
              <Trophy className="w-8 h-8 text-accent-600" strokeWidth={1.5} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-warm-950 mb-6">
              Athlete Counseling
            </h1>
            <p className="text-lg text-warm-700 leading-relaxed">
              Athletic performance isn't just physical—your mental game matters. I provide 
              specialized support for athletes navigating the unique pressures of competitive 
              sports while maintaining overall wellbeing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-6">
                Supporting the Whole Athlete
              </h2>
              <div className="space-y-4 text-warm-700 leading-relaxed">
                <p>
                  Being an athlete is demanding—physically, mentally, and emotionally. The 
                  pressure to perform, the identity wrapped up in your sport, the challenges 
                  of injury and transition—these are real struggles that deserve real support.
                </p>
                <p>
                  I work with athletes to strengthen their mental game while also addressing 
                  the personal challenges that come with competitive sports. Because you're 
                  not just an athlete—you're a whole person, and all parts of your life 
                  affect your performance.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-accent-50 rounded-3xl p-8">
                <h3 className="font-display text-xl font-semibold text-warm-900 mb-4">
                  How I Can Help
                </h3>
                <ul className="space-y-3">
                  {howWeHelp.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-warm-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Common Concerns */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-4">
              Common Concerns Athletes Bring
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {commonConcerns.map((concern, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-2xl p-4 text-center shadow-soft">
                  <span className="text-warm-700">{concern}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-4">
              Questions Athletes Ask
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="max-w-2xl mx-auto">
            <FAQAccordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-accent-600">
        <div className="container-custom">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              Strengthen Your Mental Game
            </h2>
            <p className="text-accent-100 mb-8">
              Ready to work on the mental side of your sport? Schedule a free consultation 
              to discuss how athlete counseling can help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#consultation" className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent-700 rounded-2xl font-medium text-lg hover:bg-accent-50 transition-all duration-200 hover:-translate-y-0.5">
                Request a Free Consultation
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent-300 text-white rounded-2xl font-medium hover:bg-accent-500 transition-all duration-200">
                Explore Other Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
