import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Users, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { PRACTICE_INFO, SERVICES, SEO_DEFAULTS } from '@/lib/constants';
import { AnimatedSection, StaggerContainer, StaggerItem, PageTransition } from '@/components/AnimatedSection';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: `Family Counseling in ${PRACTICE_INFO.location.city} | ${PRACTICE_INFO.name}`,
  description: `Family therapy in ${PRACTICE_INFO.location.city}, ${PRACTICE_INFO.location.state}. Strengthen communication, resolve conflicts, and build stronger family connections. Schedule your free consultation.`,
  openGraph: {
    title: `Family Counseling | ${PRACTICE_INFO.name}`,
    description: `Professional family therapy to improve communication and strengthen relationships in ${PRACTICE_INFO.location.city}.`,
  },
  alternates: {
    canonical: `${SEO_DEFAULTS.siteUrl}/services/family-counseling`,
  },
};

const whoItsFor = [
  'Families experiencing communication breakdowns',
  'Parents and children struggling to connect',
  'Families navigating major transitions (divorce, moves, new family members)',
  'Families dealing with a member\'s mental health challenges',
  'Blended families working to come together',
];

const commonGoals = [
  'Improve communication',
  'Resolve ongoing conflicts',
  'Navigate family transitions',
  'Strengthen parent-child bonds',
  'Set healthy boundaries',
  'Support a struggling family member',
  'Process grief or loss together',
  'Build trust and connection',
];

const faqs = [
  {
    question: 'Who should attend family counseling sessions?',
    answer: 'It depends on your family\'s situation and goals. Sometimes the whole family attends; other times we might meet with specific members (like parents only, or parent and child). We\'ll discuss the best approach during your consultation and may adjust as therapy progresses.',
  },
  {
    question: 'What if one family member doesn\'t want to participate?',
    answer: 'This is common, and we can work with it. Family therapy can still be effective even if not everyone attends every session. Sometimes we start with willing members and others join later. We\'ll discuss strategies for engaging reluctant family members while respecting everyone\'s autonomy.',
  },
  {
    question: 'How is family counseling different from individual therapy?',
    answer: 'While individual therapy focuses on one person\'s experience, family therapy looks at the family system—how members interact, communicate, and influence each other. We work on patterns and dynamics that affect everyone, not just one person\'s "problem."',
  },
  {
    question: 'Will you take sides?',
    answer: 'My role is to support the entire family, not to judge or take sides. I\'ll help each person feel heard while keeping focus on the family\'s shared goals. Sometimes I\'ll gently challenge patterns that aren\'t serving the family, but this comes from a place of care for everyone.',
  },
  {
    question: 'What if my child needs their own therapy too?',
    answer: 'Family counseling and individual therapy can work well together. If it seems your child would benefit from their own therapeutic space (like play therapy), we can discuss whether I\'m the right fit to provide both services or if a referral would be better to maintain clear boundaries.',
  },
];

export default function FamilyCounselingPage() {
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
            src="/images/service-family.jpg"
            alt="Family counseling session"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70" />
        </div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl">
            <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-accent-600" strokeWidth={1.5} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-warm-950 mb-6">
              Family Counseling
            </h1>
            <p className="text-lg text-warm-700 leading-relaxed">
              Strengthening the bonds that matter most. A supportive space for families to improve 
              communication, navigate challenges together, and build healthier relationships.
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
                What Is Family Counseling?
              </h2>
              <div className="space-y-4 text-warm-700 leading-relaxed">
                <p>
                  Family counseling is therapy that focuses on the family as a whole, rather than 
                  just one individual. It recognizes that families are complex systems—when one 
                  person struggles, it affects everyone, and when the family functions better, 
                  everyone benefits.
                </p>
                <p>
                  In family therapy, we explore how family members communicate, how roles and 
                  patterns have developed, and what changes might help the family thrive. We work 
                  together to break unhelpful patterns and build new, healthier ways of relating.
                </p>
                <p>
                  My approach is warm and non-judgmental. I help each family member feel heard while 
                  keeping us focused on shared goals. Every family has strengths—my job is to help 
                  you build on them.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-accent-50 rounded-3xl p-8">
                <h3 className="font-display text-xl font-semibold text-warm-900 mb-4">
                  Who It's For
                </h3>
                <ul className="space-y-3">
                  {whoItsFor.map((item, index) => (
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

      {/* Common Goals Section */}
      <section className="section-alt">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-4">
              Common Goals in Family Therapy
            </h2>
            <p className="text-warm-600 max-w-2xl mx-auto">
              Families come to therapy for many reasons. Here are some of the goals we commonly 
              work toward together.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {commonGoals.map((goal, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-2xl p-4 text-center shadow-soft">
                  <span className="text-warm-700">{goal}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What Sessions Look Like */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-6 text-center">
              What Sessions Look Like
            </h2>
            
            <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-3xl p-8 md:p-10">
              <div className="space-y-6 text-warm-700 leading-relaxed">
                <p>
                  Family sessions are typically 50-80 minutes, depending on who's attending and 
                  what we're working on. Sessions take place in a comfortable space where everyone 
                  can sit together and see each other.
                </p>
                <p>
                  Early sessions focus on understanding each person's perspective and identifying 
                  shared goals. I'll ask questions, facilitate conversation, and help family members 
                  really hear each other—sometimes for the first time in a while.
                </p>
                <p>
                  As we continue, we might work on communication skills, practice having difficult 
                  conversations in a supported environment, explore family patterns, or process 
                  emotional experiences together. Some sessions might include just parents; others 
                  might include children. We'll tailor the approach to your family's needs.
                </p>
                <p>
                  Between sessions, I may give the family "homework"—specific things to practice 
                  or try at home. These aren't busy work; they're opportunities to put what we're 
                  learning into practice in real life.
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
      <section className="section bg-accent-600">
        <div className="container-custom">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              Strengthen Your Family's Connection
            </h2>
            <p className="text-accent-100 mb-8">
              Every family faces challenges. What matters is how you navigate them together. 
              Let's talk about how family counseling might help yours.
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
