'use client';

import { useEffect } from 'react';
import { PRACTICE_INFO } from '@/lib/constants';

interface CalendlyEmbedProps {
  url?: string;
  className?: string;
  minHeight?: string;
}

export function CalendlyEmbed({
  url = PRACTICE_INFO.contact.bookingUrl,
  className = '',
  minHeight = '700px',
}: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly script if not already loaded
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Show placeholder if URL is the placeholder value
  if (url === '[BOOKING LINK]' || !url) {
    return (
      <div 
        className={`bg-warm-100 rounded-2xl border-2 border-dashed border-warm-300 flex items-center justify-center ${className}`}
        style={{ minHeight }}
      >
        <div className="text-center p-8">
          <p className="text-warm-600 font-medium mb-2">
            Scheduling Widget
          </p>
          <p className="text-warm-500 text-sm">
            Replace [BOOKING LINK] in constants.ts with your Calendly URL
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`calendly-inline-widget rounded-2xl overflow-hidden ${className}`}
      data-url={url}
      style={{ minWidth: '320px', minHeight }}
    />
  );
}

// Button link version
interface CalendlyButtonProps {
  url?: string;
  className?: string;
  children?: React.ReactNode;
}

export function CalendlyButton({
  url = PRACTICE_INFO.contact.bookingUrl,
  className = '',
  children = 'Schedule Online',
}: CalendlyButtonProps) {
  const href = url === '[BOOKING LINK]' ? '#' : url;
  const isPlaceholder = url === '[BOOKING LINK]' || !url;

  return (
    <a
      href={href}
      target={isPlaceholder ? undefined : '_blank'}
      rel={isPlaceholder ? undefined : 'noopener noreferrer'}
      className={`btn-primary ${className}`}
      onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
    >
      {children}
    </a>
  );
}
