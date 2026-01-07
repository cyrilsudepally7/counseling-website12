import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { User, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { PRACTICE_INFO, SERVICES, SEO_DEFAULTS } from '@/lib/constants';
import { AnimatedSection, StaggerContainer, StaggerItem, PageTransition } from '@/components/AnimatedSection';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: `Individual Counseling in ${PRACTICE_INFO.location.city} | ${PRACTICE_INFO.name}`,
  description: `One-on-one therapy for adults in ${PRACTICE_INFO.location.city}, ${PRACTICE_INFO.location.state}. Personalized support for anxiety, depression, life transitions, and personal growth. Schedule your free consultation.`,
  openGraph: {
    title: `Individual Counseling | ${PRACTICE_INFO.name}`,
    description: `Personalized one-on-one therapy for adults in ${PRACTICE_INFO.location.city}. A safe space to explore, heal, and grow.`,
  },
  alternates: {
    canonical: `${SEO_DEFAULTS.siteUrl}/services/individual-counseling`,
  },
};

const whoItsFor = [
  'Adults seeking support for emotional challenges',
  'People navigating major life transitions',
  'Those wanting to improve their relationships and communication',
  'Anyone looking to better understand themselves',
  'People working through past experiences or trauma',
];

const commonConcerns = [
  'Anxiety and worry',
  'Depression and low mood',
  'Stress management',
  'Relationship difficulties',
  'Life transitions (career, family, identity)',
  'Self-esteem and confidence',
  'Grief and loss',
  'Personal growth and self-discovery',
];

const faqs = [
  {
    question: 'How long does individual counseling typically last?',
    answer: 'The length of therapy varies based on your goals and needs. Some people find relief in a few months, while others benefit from longer-term support. We\'ll regularly check in about your progress and adjust as needed. There\'s no one-size-fits-all timeline.',
  },
  {
    question: 'What happens in a typical session?',
    answer: 'Sessions are a collaborative conversation in a safe, confidential space. We\'ll explore what\'s on your mind, discuss patterns you\'ve noticed, and work together on strategies for the challenges you\'re facing. Some sessions may involve specific exercises or techniques; others are more open-ended reflection.',
  },
  {
    question: 'Is what I share confidential?',
    answer: 'Yes, confidentiality is a cornerstone of therapy. What you share stays between us, with limited exceptions required by law (such as imminent risk of harm to yourself or others, or suspected child/elder abuse). We\'ll discuss these limits in detail during our first session.',
  },
  {
    question: 'How often will we meet?',
    answer: 'Most clients begin with weekly sessions to build momentum and establish our therapeutic relationship. As you progress, we may move to bi-weekly or monthly sessions. We\'ll find a rhythm that works for your schedule and therapeutic needs.',
  },
  {
    question: 'What if I\'ve never been to therapy before?',
    answer: 'Many of my clients are new to therapy, and that\'s completely okay. It\'s natural to feel uncertain or nervous at first. We\'ll go at your pace, and I\'ll explain the process as we go. There\'s no pressure to share more than you\'re ready for.',
  },
];

export default function IndividualCounselingPage() {
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
            src="/images/service-individual.webp"
            alt="Individual counseling session"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70" />
        </div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
              <User className="w-8 h-8 text-primary-600" strokeWidth={1.5} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-warm-950 mb-6">
              Individual Counseling
            </h1>
            <p className="text-lg text-warm-700 leading-relaxed">
              A safe, supportive space for you to explore your thoughts, feelings, and experiences. 
              Together, we'll work toward the understanding and change you're seeking.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-6">
                What Is Individual Counseling?
              </h2>
              <div className="space-y-4 text-warm-700 leading-relaxed">
                <p>
                  Individual counseling is one-on-one therapy where you have the undivided attention 
                  and support of a trained mental health professional. It's a confidential space 
                  where you can speak freely about whatever is weighing on your mind.
                </p>
                <p>
                  Whether you're navigating a specific challenge, processing difficult emotions, 
                  or simply wanting to understand yourself better, individual therapy offers the 
                  focused attention and expertise to help you move forward.
                </p>
                <p>
                  I take an integrative approach, drawing from various evidence-based methods to 
                  create a treatment plan tailored specifically to you—your personality, your 
                  values, and your goals.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-warm-50 rounded-3xl p-8">
                <h3 className="font-display text-xl font-semibold text-warm-900 mb-4">
                  Who It's For
                </h3>
                <ul className="space-y-3">
                  {whoItsFor.map((item, index) => (
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

      {/* Common Concerns Section */}
      <section className="section-alt">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-4">
              Common Concerns We Address
            </h2>
            <p className="text-warm-600 max-w-2xl mx-auto">
              These are some of the challenges that bring people to individual counseling. 
              Your experience is unique, and we'll focus on what matters most to you.
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

          <AnimatedSection delay={0.4} className="text-center mt-8">
            <p className="text-warm-500 text-sm">
              This is not a diagnostic list. During our work together, we'll focus on your 
              specific experience and goals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What Sessions Look Like */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-6 text-center">
              What Sessions Look Like
            </h2>
            
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-10">
              <div className="space-y-6 text-warm-700 leading-relaxed">
                <p>
                  Sessions typically last 50 minutes and are held in a comfortable, private setting. 
                  Our time together is structured around your needs—some sessions may be more 
                  conversational, while others might include specific exercises or techniques.
                </p>
                <p>
                  In early sessions, we'll spend time getting to know each other and understanding 
                  what brought you to therapy. I'll ask questions, but there's no pressure to share 
                  more than you're ready for. We'll collaboratively set goals that feel meaningful to you.
                </p>
                <p>
                  As we continue, sessions become a space for you to process your week, explore 
                  patterns and insights, and practice new ways of thinking or behaving. I'll offer 
                  observations, ask thoughtful questions, and share strategies—but this is your journey, 
                  and you're in the driver's seat.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-alt">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-4">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="max-w-2xl mx-auto">
            <FAQAccordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600">
        <div className="container-custom">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              Ready to Begin?
            </h2>
            <p className="text-primary-100 mb-8">
              Take the first step toward the change you're seeking. Schedule a free consultation 
              to see if individual counseling is right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#consultation" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-2xl font-medium text-lg hover:bg-primary-50 transition-all duration-200 hover:-translate-y-0.5">
                Request a Free Consultation
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-300 text-white rounded-2xl font-medium hover:bg-primary-500 transition-all duration-200">
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
