import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Briefcase, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { PRACTICE_INFO, SEO_DEFAULTS } from '@/lib/constants';
import { AnimatedSection, StaggerContainer, StaggerItem, PageTransition } from '@/components/AnimatedSection';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: `Career Counseling in ${PRACTICE_INFO.location.city} | ${PRACTICE_INFO.name}`,
  description: `Career counseling in ${PRACTICE_INFO.location.city}, ${PRACTICE_INFO.location.state}. Navigate career transitions, find professional fulfillment, and align your work with your values and goals.`,
  openGraph: {
    title: `Career Counseling | ${PRACTICE_INFO.name}`,
    description: `Professional career guidance and counseling in ${PRACTICE_INFO.location.city}.`,
  },
  alternates: {
    canonical: `${SEO_DEFAULTS.siteUrl}/services/career-counseling`,
  },
};

const howWeCanHelp = [
  'Clarify your professional values and goals',
  'Navigate career transitions and changes',
  'Address work-related stress and burnout',
  'Improve work-life balance',
  'Build confidence in professional settings',
  'Process job loss or career setbacks',
];

const commonSituations = [
  'Career transitions',
  'Job dissatisfaction',
  'Burnout',
  'Work-life balance',
  'Professional growth',
  'Workplace stress',
];

const faqs = [
  {
    question: 'How is career counseling different from career coaching?',
    answer: 'While there\'s overlap, career counseling takes a deeper look at the psychological aspects of work—your values, identity, emotional barriers, and how work fits into your overall wellbeing. We address not just "what job" but the feelings, fears, and patterns that influence your professional life.',
  },
  {
    question: 'I\'m burned out but can\'t afford to quit. Can you help?',
    answer: 'Absolutely. We can work on strategies to manage burnout while you\'re still employed, explore what\'s contributing to your exhaustion, and help you make sustainable changes or plan a realistic transition when the time is right.',
  },
  {
    question: 'I don\'t know what I want to do with my career. Is that okay?',
    answer: 'That\'s a perfect place to start! Many people come to career counseling feeling lost or confused. Together, we\'ll explore your interests, values, and strengths to gain clarity. Not knowing is not a problem—it\'s the starting point.',
  },
  {
    question: 'Will you tell me what career to choose?',
    answer: 'No, and that\'s actually good news. You\'re the expert on your own life. My role is to help you gain clarity, process emotions, remove obstacles, and support you as you make decisions that align with who you are and what you want.',
  },
];

export default function CareerCounselingPage() {
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
            src="/images/service-career.jpg"
            alt="Career counseling session"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70" />
        </div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl">
            <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-accent-600" strokeWidth={1.5} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-warm-950 mb-6">
              Career Counseling
            </h1>
            <p className="text-lg text-warm-700 leading-relaxed">
              Your work is a significant part of your life. Career counseling helps you navigate 
              professional challenges, find greater fulfillment, and align your career with your 
              values and goals.
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
                Finding Fulfillment in Your Professional Life
              </h2>
              <div className="space-y-4 text-warm-700 leading-relaxed">
                <p>
                  We spend a huge portion of our lives at work. When our careers aren't aligned 
                  with our values, or when work stress becomes overwhelming, it affects every 
                  aspect of our wellbeing.
                </p>
                <p>
                  Career counseling goes beyond resume tips and interview prep. We explore the 
                  deeper questions: What kind of work is meaningful to you? What's holding you 
                  back? How can you create a professional life that supports your overall 
                  happiness and health?
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-accent-50 rounded-3xl p-8">
                <h3 className="font-display text-xl font-semibold text-warm-900 mb-4">
                  How Career Counseling Helps
                </h3>
                <ul className="space-y-3">
                  {howWeCanHelp.map((item, index) => (
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

      {/* Common Situations */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-4">
              Common Situations We Address
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {commonSituations.map((situation, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-2xl p-4 text-center shadow-soft">
                  <span className="text-warm-700">{situation}</span>
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
              Common Questions
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
              Ready to Love Your Work?
            </h2>
            <p className="text-accent-100 mb-8">
              Take the first step toward a more fulfilling professional life. Schedule a 
              free consultation to discuss your career concerns.
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
