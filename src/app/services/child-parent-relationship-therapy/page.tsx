import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Heart, ArrowRight, CheckCircle, ArrowLeft, Users } from 'lucide-react';
import { PRACTICE_INFO, SEO_DEFAULTS } from '@/lib/constants';
import { AnimatedSection, StaggerContainer, StaggerItem, PageTransition } from '@/components/AnimatedSection';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: `Child Parent Relationship Therapy (CPRT) in ${PRACTICE_INFO.location.city} | ${PRACTICE_INFO.name}`,
  description: `Child Parent Relationship Therapy in ${PRACTICE_INFO.location.city}, ${PRACTICE_INFO.location.state}. Strengthen the bond between you and your child through guided, play-based interactions.`,
  openGraph: {
    title: `Child Parent Relationship Therapy | ${PRACTICE_INFO.name}`,
    description: `CPRT - Strengthen your parent-child bond in ${PRACTICE_INFO.location.city}.`,
  },
  alternates: {
    canonical: `${SEO_DEFAULTS.siteUrl}/services/child-parent-relationship-therapy`,
  },
};

const benefits = [
  'Deepen your connection with your child',
  'Learn to communicate more effectively with your child',
  'Understand your child\'s behavior and emotions better',
  'Develop skills to manage challenging behaviors',
  'Build your child\'s self-esteem and confidence',
  'Create lasting positive change in your relationship',
];

const whoItsFor = [
  'Parents wanting to strengthen their bond with their child',
  'Families experiencing behavioral challenges',
  'Parents of children with anxiety or emotional difficulties',
  'Adoptive or foster families',
  'Parents navigating divorce or family transitions',
  'Anyone wanting to be a more effective, connected parent',
];

const faqs = [
  {
    question: 'What exactly is Child Parent Relationship Therapy?',
    answer: 'CPRT is an evidence-based approach that trains parents to be therapeutic agents in their child\'s life. You\'ll learn play therapy skills to use at home during special "play times" with your child. I coach you through the process, helping you develop deeper understanding and more effective ways of connecting with your child.',
  },
  {
    question: 'How is CPRT different from family therapy?',
    answer: 'While family therapy typically involves the whole family meeting with a therapist, CPRT focuses on training you—the parent—to facilitate healing through play. You become equipped with skills you can use long after therapy ends, creating lasting change in your parent-child relationship.',
  },
  {
    question: 'What ages of children does CPRT work for?',
    answer: 'CPRT is most effective for children ages 3-10, though the principles can be adapted for older children. The approach uses play-based techniques that naturally resonate with how younger children communicate and process their world.',
  },
  {
    question: 'How long does CPRT take?',
    answer: 'A typical CPRT program consists of 10 sessions. You\'ll learn skills progressively, practice at home between sessions, and receive coaching and support throughout. Many parents find the skills they learn continue to benefit their family long after the formal program ends.',
  },
  {
    question: 'Does my child attend the sessions?',
    answer: 'The training sessions are primarily for parents, though some sessions may include your child. Between sessions, you\'ll conduct weekly "special play times" at home with your child, applying what you\'ve learned. This is where the real magic happens!',
  },
];

export default function CPRTPage() {
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
            src="/images/service-cprt.jpg"
            alt="Parent and child bonding"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70" />
        </div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-primary-600" strokeWidth={1.5} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-warm-950 mb-6">
              Child Parent Relationship Therapy
            </h1>
            <p className="text-lg text-warm-700 leading-relaxed">
              You are your child's most important person. CPRT empowers you with play therapy 
              skills to strengthen your bond, improve communication, and create lasting positive 
              change in your relationship with your child.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What is CPRT Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-6">
                Becoming Your Child's Therapeutic Agent
              </h2>
              <div className="space-y-4 text-warm-700 leading-relaxed">
                <p>
                  No one knows your child better than you. Child Parent Relationship Therapy 
                  harnesses the power of your unique relationship by training you in play 
                  therapy skills you can use at home.
                </p>
                <p>
                  Through structured "special play times," you'll learn to communicate with 
                  your child in ways that build their self-esteem, help them process emotions, 
                  and strengthen your connection. You'll gain insights into their world and 
                  develop more effective responses to challenging behaviors.
                </p>
                <p>
                  The skills you learn in CPRT don't just help during therapy—they transform 
                  your parenting approach and benefit your relationship for years to come.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-primary-50 rounded-3xl p-8">
                <h3 className="font-display text-xl font-semibold text-warm-900 mb-4">
                  Benefits of CPRT
                </h3>
                <ul className="space-y-3">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-warm-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-4">
              Who Can Benefit from CPRT
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <ul className="space-y-3">
                {whoItsFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-warm-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-6 text-center">
              How CPRT Works
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-primary-700">1</div>
                    <div>
                      <h3 className="font-semibold text-warm-900 mb-1">Learn the Skills</h3>
                      <p className="text-warm-600">In sessions with me, you'll learn specific play therapy techniques, understand your child's developmental needs, and practice responses that build connection.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary-200 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-secondary-700">2</div>
                    <div>
                      <h3 className="font-semibold text-warm-900 mb-1">Practice at Home</h3>
                      <p className="text-warm-600">Between sessions, you'll conduct weekly 30-minute "special play times" with your child, applying what you've learned in a structured, meaningful way.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-200 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-accent-700">3</div>
                    <div>
                      <h3 className="font-semibold text-warm-900 mb-1">Receive Coaching</h3>
                      <p className="text-warm-600">I'll support you throughout the process—reviewing your experiences, troubleshooting challenges, and helping you refine your skills for maximum impact.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-4">
              Questions About CPRT
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="max-w-2xl mx-auto">
            <FAQAccordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary-600">
        <div className="container-custom">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              Transform Your Parent-Child Relationship
            </h2>
            <p className="text-primary-100 mb-8">
              Ready to become an even more effective, connected parent? Schedule a free 
              consultation to learn if CPRT is right for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#consultation" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-2xl font-medium text-lg hover:bg-primary-50 transition-all duration-200 hover:-translate-y-0.5">
                Request a Free Consultation
              </Link>
              <Link href="/services/play-therapy" className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-300 text-white rounded-2xl font-medium hover:bg-primary-500 transition-all duration-200">
                Learn About Play Therapy
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
