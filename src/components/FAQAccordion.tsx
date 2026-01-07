'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <FAQAccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => toggleItem(index)}
          shouldReduceMotion={shouldReduceMotion}
        />
      ))}
    </div>
  );
}

interface FAQAccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  shouldReduceMotion: boolean | null;
}

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
  shouldReduceMotion,
}: FAQAccordionItemProps) {
  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500"
        aria-expanded={isOpen}
      >
        <span className="font-display font-medium text-warm-900 pr-4">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-warm-500" />
        </motion.span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: {
                height: { duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' },
                opacity: { duration: shouldReduceMotion ? 0 : 0.2, delay: shouldReduceMotion ? 0 : 0.05 },
              },
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: shouldReduceMotion ? 0 : 0.2, ease: 'easeIn' },
                opacity: { duration: shouldReduceMotion ? 0 : 0.1 },
              },
            }}
          >
            <div className="px-6 pb-5 pt-0">
              <div className="border-t border-warm-100 pt-4">
                <p className="text-warm-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Single FAQ item for inline use
interface SingleFAQProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function SingleFAQ({ question, answer, defaultOpen = false }: SingleFAQProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const shouldReduceMotion = useReducedMotion();

  return (
    <FAQAccordionItem
      item={{ question, answer }}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      shouldReduceMotion={shouldReduceMotion}
    />
  );
}
