import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Puzzle, ArrowRight, CheckCircle, ArrowLeft, Heart } from 'lucide-react';
import { PRACTICE_INFO, SERVICES, SEO_DEFAULTS } from '@/lib/constants';
import { AnimatedSection, StaggerContainer, StaggerItem, PageTransition } from '@/components/AnimatedSection';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: `Play Therapy for Children in ${PRACTICE_INFO.location.city} | ${PRACTICE_INFO.name}`,
  description: `Child-centered play therapy in ${PRACTICE_INFO.location.city}, ${PRACTICE_INFO.location.state}. Helping children express emotions, build coping skills, and work through challenges in a safe, developmentally appropriate way.`,
  openGraph: {
    title: `Play Therapy for Children | ${PRACTICE_INFO.name}`,
    description: `Developmentally appropriate therapy for children in ${PRACTICE_INFO.location.city}. Using play to help kids heal and grow.`,
  },
  alternates: {
    canonical: `${SEO_DEFAULTS.siteUrl}/services/play-therapy`,
  },
};

const whoItsFor = [
  'Children ages 3-12 experiencing emotional difficulties',
  'Kids struggling with anxiety, fears, or worries',
  'Children who have experienced trauma or significant life changes',
  'Kids having difficulty with social skills or behavior',
  'Children whose parents are concerned about their emotional wellbeing',
];

const commonSituations = [
  'Anxiety or excessive worry',
  'Behavioral concerns',
  'Difficulty with transitions',
  'Parental divorce or separation',
  'Grief and loss',
  'School difficulties',
  'Low self-esteem',
  'Social challenges',
];

const faqs = [
  {
    question: 'What is play therapy, exactly?',
    answer: 'Play therapy is a developmentally appropriate form of therapy that uses play—the natural language of children—to help kids express emotions, process experiences, and develop coping skills. Rather than expecting children to sit and talk like adults, we meet them where they are developmentally, using toys, games, art, and imaginative play as therapeutic tools.',
  },
  {
    question: 'How is play therapy different from regular play?',
    answer: 'While it may look like "just playing," play therapy is guided by a trained therapist who observes, responds to, and gently facilitates the child\'s play in therapeutic ways. The playroom materials are carefully selected, and I use specific techniques to help children work through their challenges and build skills—even when they\'re not consciously aware that healing is happening.',
  },
  {
    question: 'What age range do you work with?',
    answer: 'I specialize in play therapy for children ages 3-12. For older children and teens, I integrate play-based elements with more traditional talk therapy approaches based on what works best for each individual. We can discuss the best approach for your child during the consultation.',
  },
  {
    question: 'Will I be involved in my child\'s therapy?',
    answer: 'Absolutely. Parent involvement is crucial to the success of play therapy. While individual sessions with your child are confidential, I meet with parents regularly to discuss progress, share themes I\'m observing (without breaking your child\'s trust), and provide guidance for supporting your child at home. We\'re a team.',
  },
  {
    question: 'How long does play therapy take to work?',
    answer: 'Every child is different. Some show improvement in a few sessions; others need longer-term support. Progress in play therapy often happens gradually and may show up at home before it\'s visible in sessions. We\'ll check in regularly about your child\'s progress and adjust our approach as needed.',
  },
];

export default function PlayTherapyPage() {
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
            src="/images/service-play-therapy.jpg"
            alt="Play therapy session with children"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70" />
        </div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl">
            <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mb-6">
              <Puzzle className="w-8 h-8 text-secondary-600" strokeWidth={1.5} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-warm-950 mb-6">
              Play Therapy
            </h1>
            <p className="text-lg text-warm-700 leading-relaxed">
              Helping children express themselves, process their experiences, and develop emotional 
              skills through the natural language of play. A warm, safe space where kids can be kids 
              while healing happens.
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
                What Is Play Therapy?
              </h2>
              <div className="space-y-4 text-warm-700 leading-relaxed">
                <p>
                  Children communicate and process their world differently than adults. While adults 
                  can talk through problems, children often lack the vocabulary or abstract thinking 
                  to express complex emotions verbally. Play therapy meets children where they are.
                </p>
                <p>
                  Using toys, games, art, sand, puppets, and imaginative play, children can express 
                  feelings they can't put into words, work through difficult experiences, and develop 
                  healthier ways of coping—all in a way that feels natural and safe to them.
                </p>
                <p>
                  As a trained play therapist, I provide a carefully designed environment and use 
                  specific techniques to facilitate healing. But to your child, it often just feels 
                  like a special time to play with a caring adult who really listens.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-secondary-50 rounded-3xl p-8">
                <h3 className="font-display text-xl font-semibold text-warm-900 mb-4">
                  Who It's For
                </h3>
                <ul className="space-y-3">
                  {whoItsFor.map((item, index) => (
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

      {/* Common Situations Section */}
      <section className="section-alt">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-warm-950 mb-4">
              When Play Therapy Can Help
            </h2>
            <p className="text-warm-600 max-w-2xl mx-auto">
              These are some situations where play therapy can be beneficial. Every child is 
              unique, and we'll focus on your child's specific needs.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {commonSituations.map((situation, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-2xl p-4 text-center shadow-soft">
                  <span className="text-warm-700">{situation}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.4} className="text-center mt-8">
            <p className="text-warm-500 text-sm">
              This is not a diagnostic list. We'll discuss your child's individual situation 
              during the consultation.
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
            
            <div className="bg-gradient-to-br from-secondary-50 to-accent-50 rounded-3xl p-8 md:p-10">
              <div className="space-y-6 text-warm-700 leading-relaxed">
                <p>
                  Sessions take place in a specially designed playroom filled with carefully selected 
                  toys and materials. The space is warm, welcoming, and feels safe for children—a 
                  place where they can be themselves.
                </p>
                <p>
                  During sessions, your child chooses what to play with and how. I follow their lead, 
                  observing and responding in therapeutic ways. Sometimes I'll participate in their 
                  play; other times I'll reflect what I see or ask gentle questions. There's no 
                  pressure to perform or "do therapy" the right way.
                </p>
                <p>
                  Sessions typically last 45-50 minutes. I meet with parents separately (without the 
                  child) on a regular basis to discuss progress, answer questions, and provide 
                  guidance for supporting your child at home.
                </p>
              </div>
            </div>

            {/* Parent Partnership Box */}
            <div className="mt-8 bg-white rounded-2xl border border-warm-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-warm-900 mb-2">
                    Partnership with Parents
                  </h3>
                  <p className="text-warm-600 text-sm leading-relaxed">
                    You know your child best. Your involvement is essential to the success of play 
                    therapy. We'll work together as a team—I provide therapeutic support, and you 
                    provide the love, consistency, and follow-through at home that helps your child thrive.
                  </p>
                </div>
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
              Questions Parents Often Ask
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="max-w-2xl mx-auto">
            <FAQAccordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary-600">
        <div className="container-custom">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              Support Your Child's Wellbeing
            </h2>
            <p className="text-secondary-100 mb-8">
              If you're concerned about your child's emotional wellbeing, let's talk. Schedule a 
              free consultation to discuss whether play therapy might help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#consultation" className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary-700 rounded-2xl font-medium text-lg hover:bg-secondary-50 transition-all duration-200 hover:-translate-y-0.5">
                Request a Free Consultation
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-secondary-300 text-white rounded-2xl font-medium hover:bg-secondary-500 transition-all duration-200">
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
