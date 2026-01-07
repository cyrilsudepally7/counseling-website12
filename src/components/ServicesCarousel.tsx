'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { 
  User, 
  Users, 
  Heart, 
  Home, 
  Baby, 
  Puzzle, 
  Briefcase, 
  Trophy,
  HandHeart,
  ChevronRight
} from 'lucide-react';

interface Service {
  id: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  icon: React.ElementType;
  href: string;
  color: string;
}

const services: Service[] = [
  {
    id: 'individual',
    title: { 
      en: 'Individual Counseling', 
      es: 'Consejería Individual' 
    },
    description: { 
      en: 'One-on-one support tailored to your unique needs and goals.',
      es: 'Apoyo individual adaptado a tus necesidades y metas únicas.'
    },
    icon: User,
    href: '/services/individual-counseling',
    color: 'bg-primary-100 text-primary-500',
  },
  {
    id: 'group',
    title: { 
      en: 'Group Counseling', 
      es: 'Consejería Grupal' 
    },
    description: { 
      en: 'Connect with others facing similar challenges in a supportive group setting.',
      es: 'Conéctate con otros que enfrentan desafíos similares en un entorno grupal de apoyo.'
    },
    icon: Users,
    href: '/services/group-counseling',
    color: 'bg-secondary-100 text-secondary-600',
  },
  {
    id: 'couples',
    title: { 
      en: 'Couples Counseling', 
      es: 'Consejería de Parejas' 
    },
    description: { 
      en: 'Strengthen your relationship through improved communication and connection.',
      es: 'Fortalece tu relación a través de una mejor comunicación y conexión.'
    },
    icon: Heart,
    href: '/services/couples-counseling',
    color: 'bg-accent-100 text-accent-500',
  },
  {
    id: 'family',
    title: { 
      en: 'Family Counseling', 
      es: 'Consejería Familiar' 
    },
    description: { 
      en: 'Work together as a family to improve dynamics and resolve conflicts.',
      es: 'Trabajen juntos como familia para mejorar las dinámicas y resolver conflictos.'
    },
    icon: Home,
    href: '/services/family-counseling',
    color: 'bg-primary-100 text-primary-500',
  },
  {
    id: 'child-adolescent',
    title: { 
      en: 'Child & Adolescent Counseling', 
      es: 'Consejería para Niños y Adolescentes' 
    },
    description: { 
      en: 'Age-appropriate support for young people navigating life\'s challenges.',
      es: 'Apoyo apropiado para jóvenes que navegan los desafíos de la vida.'
    },
    icon: Baby,
    href: '/services/child-adolescent-counseling',
    color: 'bg-secondary-100 text-secondary-600',
  },
  {
    id: 'play-therapy',
    title: { 
      en: 'Play Therapy', 
      es: 'Terapia de Juego' 
    },
    description: { 
      en: 'Help children express themselves and heal through the power of play.',
      es: 'Ayuda a los niños a expresarse y sanar a través del poder del juego.'
    },
    icon: Puzzle,
    href: '/services/play-therapy',
    color: 'bg-accent-100 text-accent-500',
  },
  {
    id: 'career',
    title: { 
      en: 'Career Counseling', 
      es: 'Consejería de Carrera' 
    },
    description: { 
      en: 'Navigate career transitions and find fulfillment in your professional life.',
      es: 'Navega transiciones profesionales y encuentra satisfacción en tu vida laboral.'
    },
    icon: Briefcase,
    href: '/services/career-counseling',
    color: 'bg-primary-100 text-primary-500',
  },
  {
    id: 'athlete',
    title: { 
      en: 'Athlete Counseling', 
      es: 'Consejería para Atletas' 
    },
    description: { 
      en: 'Mental performance support for athletes at all levels.',
      es: 'Apoyo de rendimiento mental para atletas de todos los niveles.'
    },
    icon: Trophy,
    href: '/services/athlete-counseling',
    color: 'bg-secondary-100 text-secondary-600',
  },
  {
    id: 'cprt',
    title: { 
      en: 'Child Parent Relationship Therapy', 
      es: 'Terapia de Relación Padre-Hijo' 
    },
    description: { 
      en: 'Strengthen the bond between parent and child through guided interactions.',
      es: 'Fortalece el vínculo entre padre e hijo a través de interacciones guiadas.'
    },
    icon: HandHeart,
    href: '/services/child-parent-relationship-therapy',
    color: 'bg-accent-100 text-accent-500',
  },
];

export function ServicesCarousel() {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);

  // Triple the services for seamless infinite scroll
  const tripleServices = [...services, ...services, ...services];

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div className="flex">
        <motion.div
          className="flex gap-6"
          animate={shouldReduceMotion ? {} : {
            x: ['0%', '-33.333%'],
          }}
          transition={{
            x: {
              duration: 60,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {tripleServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={`${service.id}-${index}`}
                className="flex-shrink-0 w-[300px] md:w-[340px]"
                whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={service.href} className="block h-full">
                  <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow h-full flex flex-col border border-warm-100">
                    <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-warm-900 mb-2">
                      {service.title[language]}
                    </h3>
                    <p className="text-warm-600 text-sm flex-grow">
                      {service.description[language]}
                    </p>
                    <div className="mt-4 text-primary-400 font-medium text-sm flex items-center gap-1">
                      {language === 'es' ? 'Saber más' : 'Learn more'}
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
