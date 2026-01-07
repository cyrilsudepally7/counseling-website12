import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Baby, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { PRACTICE_INFO, SEO_DEFAULTS } from '@/lib/constants';
import { AnimatedSection, StaggerContainer, StaggerItem, PageTransition } from '@/components/AnimatedSection';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: `Child & Adolescent Counseling in ${PRACTICE_INFO.location.city} | ${PRACTICE_INFO.name}`,
  description: `Child and teen counseling in ${PRACTICE_INFO.location.city}, ${PRACTICE_INFO.location.state}. Age-appropriate support for children and adolescents navigating emotional, social, and behavioral challenges.`,
  openGraph: {
    title: `Child & Adolescent Counseling | ${PRACTICE_INFO.name}`,
    description: `Specialized therapy for children and teens in ${PRACTICE_INFO.location.city}.`,
  },
  alternates: {
    canonical: `${SEO_DEFAULTS.siteUrl}/services/child-adolescent-counseling`,
  },
};

const signsYourChildMayBenefit = [
  'Persistent sadness, worry, or irritability',
  'Significant changes in behavior or mood',
  'Difficulty at school (academically or socially)',
  'Withdrawal from family or friends',
  'Sleep or appetite changes',
  'Expressing hopelessness or low self-worth',
];

const commonConcerns = [
  'Anxiety',
  'Depression',
  'ADHD',
  'Behavioral issues',
  'School problems',
  'Social difficulties',
  'Trauma',
  'Family changes',
];

const faqs = [
  {
    question: 'What age range do you work with?',
    answer: 'I work with children as young as 3 (using play therapy) through adolescence (age 18). The approach is tailored to each child\'s developmental stage, using play-based methods for younger children and integrating more talk-based approaches as appropriate for teens.',
  },
  {
    question: 'How will therapy be different for my teen vs. a younger child?',
    answer: 'For younger children, I primarily use play therapy, which allows them to express themselves through their natural language of play. For teens, sessions may look more like traditional talk therapy, though I often incorporate creative and interactive elements to keep them engaged.',
  },
  {
    question: 'Will I know what happens in my child\'s sessions?',
    answer: 'I balance your child\'s need for confidentiality with your need to know how they\'re doing. I meet with parents regularly to discuss progress and themes without breaking your child\'s trust. For teens, I explain confidentiality clearly while ensuring parents are informed of any safety concerns.',
  },
  {
    question: 'How involved will I be in my child\'s therapy?',
    answer: 'Parent involvement is crucial. Beyond regular parent meetings, I may provide guidance for supporting your child at home. For younger children especially, parents are often the key to lasting change, and I may incorporate parent-child sessions or teach specific techniques.',
  },
];

export default function ChildAdolescentCounselingPage() {
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
            src="/images/service-child-adolescent.webp"
            alt="Child and adolescent counseling"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70" />
        </div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl">
            <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mb-6">
              <Baby className="w-8 h-8 text-secondary-600" strokeWidth={1.5} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-warm-950 mb-6">
              Child & Adolescent Counseling
            </h1>
            <p className="text-lg text-warm-700 leading-relaxed">
              Growing up isn't easy. Children and teens face unique challenges that require 
              age-appropriate support. I provide a safe, understanding space where young people 
              can express themselves, develop coping skills, and thrive.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Signs Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-6">
                Supporting Young People Through Life's Challenges
              </h2>
              <div className="space-y-4 text-warm-700 leading-relaxed">
                <p>
                  Children and adolescents experience the world differently than adults. They may 
                  not have the words to express their feelings or the life experience to put their 
                  struggles into perspective. That's where specialized support can help.
                </p>
                <p>
                  Whether your child is dealing with anxiety, navigating social challenges, processing 
                  a difficult experience, or struggling with behavioral issues, therapy provides tools 
                  and support for healthy development.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-secondary-50 rounded-3xl p-8">
                <h3 className="font-display text-xl font-semibold text-warm-900 mb-4">
                  Signs Your Child May Benefit from Counseling
                </h3>
                <ul className="space-y-3">
                  {signsYourChildMayBenefit.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
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
              Common Concerns We Address
            </h2>
            <p className="text-warm-600 max-w-2xl mx-auto">
              These are some issues commonly addressed in child and adolescent therapy. 
              Every young person is unique.
            </p>
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
              Questions Parents Ask
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="max-w-2xl mx-auto">
            <FAQAccordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary-600">
        <div className="container-custom">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              Help Your Child Thrive
            </h2>
            <p className="text-secondary-100 mb-8">
              Concerned about your child or teen? Schedule a free consultation to discuss 
              how therapy can support their wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#consultation" className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary-700 rounded-2xl font-medium text-lg hover:bg-secondary-50 transition-all duration-200 hover:-translate-y-0.5">
                Request a Free Consultation
              </Link>
              <Link href="/services/play-therapy" className="inline-flex items-center justify-center px-8 py-4 border-2 border-secondary-300 text-white rounded-2xl font-medium hover:bg-secondary-500 transition-all duration-200">
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
