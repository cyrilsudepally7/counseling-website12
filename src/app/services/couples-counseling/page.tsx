import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Heart, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { PRACTICE_INFO, SEO_DEFAULTS } from '@/lib/constants';
import { AnimatedSection, StaggerContainer, StaggerItem, PageTransition } from '@/components/AnimatedSection';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: `Couples Counseling in ${PRACTICE_INFO.location.city} | ${PRACTICE_INFO.name}`,
  description: `Couples counseling in ${PRACTICE_INFO.location.city}, ${PRACTICE_INFO.location.state}. Strengthen your relationship through improved communication, deeper connection, and conflict resolution.`,
  openGraph: {
    title: `Couples Counseling | ${PRACTICE_INFO.name}`,
    description: `Relationship therapy in ${PRACTICE_INFO.location.city}. Build a stronger, healthier partnership.`,
  },
  alternates: {
    canonical: `${SEO_DEFAULTS.siteUrl}/services/couples-counseling`,
  },
};

const benefits = [
  'Improve communication patterns',
  'Resolve recurring conflicts',
  'Rebuild trust and intimacy',
  'Navigate major life transitions together',
  'Strengthen your emotional connection',
];

const commonConcerns = [
  'Communication breakdown',
  'Trust issues',
  'Intimacy concerns',
  'Conflict resolution',
  'Life transitions',
  'Parenting disagreements',
  'Financial stress',
  'Growing apart',
];

const faqs = [
  {
    question: 'Do both partners need to attend every session?',
    answer: 'While couples sessions involve both partners together, there may be times when individual sessions are beneficial. We\'ll discuss what approach works best for your specific situation during our initial consultation.',
  },
  {
    question: 'What if my partner doesn\'t want to come?',
    answer: 'It\'s common for one partner to be more hesitant. Sometimes starting with individual sessions can help. If your partner isn\'t ready, you can still benefit from individual counseling focused on your relationship and personal growth.',
  },
  {
    question: 'Is couples counseling only for marriages in crisis?',
    answer: 'Not at all! While many couples come during difficult times, counseling is also valuable for strengthening already-good relationships, navigating transitions, or doing preventive maintenance on your partnership.',
  },
  {
    question: 'How long does couples counseling typically take?',
    answer: 'The length varies based on your goals and concerns. Some couples see significant improvement in 8-12 sessions, while others benefit from longer-term work. We\'ll regularly assess progress and adjust as needed.',
  },
];

export default function CouplesCounselingPage() {
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
            src="/images/service-couples.jpg"
            alt="Couples counseling session"
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
              Couples Counseling
            </h1>
            <p className="text-lg text-warm-700 leading-relaxed">
              Every relationship faces challenges. Couples counseling provides a safe space to 
              improve communication, resolve conflicts, and build a stronger, more connected 
              partnership.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-6">
                Strengthen Your Connection
              </h2>
              <div className="space-y-4 text-warm-700 leading-relaxed">
                <p>
                  Relationships require ongoing attention and care. Over time, couples can develop 
                  communication patterns that create distance rather than connection. Old hurts 
                  can build up, and life's stresses can pull partners apart.
                </p>
                <p>
                  Couples counseling helps you understand each other more deeply, communicate 
                  more effectively, and work through challenges together. Whether you're facing 
                  a specific crisis or simply want to strengthen your bond, therapy can help.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-primary-50 rounded-3xl p-8">
                <h3 className="font-display text-xl font-semibold text-warm-900 mb-4">
                  What You Can Achieve
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

      {/* Common Concerns */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-4">
              Common Concerns We Address
            </h2>
            <p className="text-warm-600 max-w-2xl mx-auto">
              These are some of the challenges couples commonly bring to therapy. Every 
              relationship is unique, and we'll focus on your specific needs.
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
              Questions About Couples Counseling
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
              Invest in Your Relationship
            </h2>
            <p className="text-primary-100 mb-8">
              Ready to work on your relationship? Schedule a free consultation to discuss 
              how couples counseling can help you and your partner.
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
