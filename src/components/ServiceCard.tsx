'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { User, Puzzle, Users, ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: 'User' | 'Puzzle' | 'Users';
  color?: 'primary' | 'secondary' | 'accent';
}

const iconMap: Record<string, LucideIcon> = {
  User,
  Puzzle,
  Users,
};

const colorClasses = {
  primary: {
    bg: 'bg-primary-100',
    icon: 'text-primary-600',
    hover: 'group-hover:bg-primary-200',
  },
  secondary: {
    bg: 'bg-secondary-100',
    icon: 'text-secondary-600',
    hover: 'group-hover:bg-secondary-200',
  },
  accent: {
    bg: 'bg-accent-100',
    icon: 'text-accent-600',
    hover: 'group-hover:bg-accent-200',
  },
};

export function ServiceCard({
  title,
  description,
  href,
  icon,
  color = 'primary',
}: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = iconMap[icon];
  const colors = colorClasses[color];

  return (
    <Link href={href} className="block group">
      <motion.article
        className="card h-full flex flex-col"
        whileHover={shouldReduceMotion ? {} : { y: -4 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {/* Icon */}
        <div 
          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 ${colors.bg} ${colors.hover}`}
        >
          <Icon className={`w-7 h-7 ${colors.icon}`} strokeWidth={1.5} />
        </div>

        {/* Content */}
        <h3 className="text-xl font-display font-semibold text-warm-900 mb-3 group-hover:text-primary-700 transition-colors">
          {title}
        </h3>
        <p className="text-warm-600 leading-relaxed flex-grow mb-4">
          {description}
        </p>

        {/* Link indicator */}
        <div className="flex items-center gap-2 text-primary-600 font-medium text-sm">
          <span>Learn more</span>
          <ArrowRight 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
          />
        </div>
      </motion.article>
    </Link>
  );
}

// Compact version for service overview page
export function ServiceCardCompact({
  title,
  description,
  href,
  icon,
  color = 'primary',
}: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = iconMap[icon];
  const colors = colorClasses[color];

  return (
    <Link href={href} className="block group">
      <motion.article
        className="bg-white rounded-2xl p-5 shadow-soft flex items-start gap-4 h-full"
        whileHover={shouldReduceMotion ? {} : { y: -2 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div 
          className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center transition-colors duration-300 ${colors.bg} ${colors.hover}`}
        >
          <Icon className={`w-6 h-6 ${colors.icon}`} strokeWidth={1.5} />
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-display font-semibold text-warm-900 mb-1 group-hover:text-primary-700 transition-colors">
            {title}
          </h3>
          <p className="text-warm-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <ArrowRight 
          className="w-5 h-5 text-warm-400 flex-shrink-0 mt-1 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-200" 
        />
      </motion.article>
    </Link>
  );
}
