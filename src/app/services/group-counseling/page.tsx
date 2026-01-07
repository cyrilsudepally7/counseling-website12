import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Users, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { PRACTICE_INFO, SEO_DEFAULTS } from '@/lib/constants';
import { AnimatedSection, StaggerContainer, StaggerItem, PageTransition } from '@/components/AnimatedSection';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: `Group Counseling in ${PRACTICE_INFO.location.city} | ${PRACTICE_INFO.name}`,
  description: `Group counseling services in ${PRACTICE_INFO.location.city}, ${PRACTICE_INFO.location.state}. Connect with others facing similar challenges in a supportive, therapeutic group setting.`,
  openGraph: {
    title: `Group Counseling | ${PRACTICE_INFO.name}`,
    description: `Supportive group therapy in ${PRACTICE_INFO.location.city}. Heal and grow alongside others.`,
  },
  alternates: {
    canonical: `${SEO_DEFAULTS.siteUrl}/services/group-counseling`,
  },
};

const benefits = [
  'Realize you\'re not alone in your struggles',
  'Learn from others\' experiences and perspectives',
  'Practice social skills in a safe environment',
  'Receive support from multiple sources',
  'Develop a sense of belonging and community',
];

const groupTopics = [
  'Anxiety management',
  'Social skills',
  'Grief support',
  'Parenting strategies',
  'Stress reduction',
  'Self-esteem building',
];

const faqs = [
  {
    question: 'How is group counseling different from individual therapy?',
    answer: 'While individual therapy focuses on your personal journey with one-on-one support, group counseling allows you to connect with others facing similar challenges. You benefit from shared experiences, diverse perspectives, and the realization that you\'re not alone. Many people find the combination of both individual and group therapy most effective.',
  },
  {
    question: 'Will I have to share personal details with the group?',
    answer: 'You control what and how much you share. While participation enhances the experience, you\'re never pressured to disclose more than you\'re comfortable with. Many people start by just listening and gradually become more involved as they feel safe.',
  },
  {
    question: 'Is what\'s shared in group confidential?',
    answer: 'Yes, confidentiality is a cornerstone of group therapy. All members agree to keep what\'s shared in the group private. This creates a safe space for open, honest discussion.',
  },
  {
    question: 'How many people are in a group?',
    answer: 'Groups typically have 4-8 members. This size allows for meaningful connection and individual attention while providing diverse perspectives and support.',
  },
];

export default function GroupCounselingPage() {
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
            src="/images/service-group.jpg"
            alt="Group therapy session"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70" />
        </div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-primary-600" strokeWidth={1.5} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-warm-950 mb-6">
              Group Counseling
            </h1>
            <p className="text-lg text-warm-700 leading-relaxed">
              Connect with others who understand what you're going through. Group counseling offers 
              a unique opportunity to heal alongside others, share experiences, and build meaningful 
              support networks.
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
                The Power of Shared Experience
              </h2>
              <div className="space-y-4 text-warm-700 leading-relaxed">
                <p>
                  There's something powerful about being in a room with others who truly understand 
                  what you're going through. Group counseling provides a supportive environment where 
                  you can learn from others' experiences while contributing your own insights.
                </p>
                <p>
                  Research consistently shows that group therapy is highly effective for many concerns. 
                  The combination of professional guidance and peer support creates a unique healing 
                  environment that complements individual therapy beautifully.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-primary-50 rounded-3xl p-8">
                <h3 className="font-display text-xl font-semibold text-warm-900 mb-4">
                  Benefits of Group Counseling
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

      {/* Group Topics */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-4">
              Group Topics
            </h2>
            <p className="text-warm-600 max-w-2xl mx-auto">
              Groups may focus on specific themes or challenges. Contact us to learn about 
              currently available groups.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {groupTopics.map((topic, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-2xl p-4 text-center shadow-soft">
                  <span className="text-warm-700">{topic}</span>
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
      <section className="py-16 md:py-20 bg-primary-600">
        <div className="container-custom">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              Find Your Community
            </h2>
            <p className="text-primary-100 mb-8">
              Interested in group counseling? Schedule a consultation to learn about available 
              groups and find the right fit for you.
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
