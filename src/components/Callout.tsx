import { ReactNode } from 'react';
import { AlertCircle, Info, Shield, AlertTriangle } from 'lucide-react';

type CalloutVariant = 'warning' | 'info' | 'neutral' | 'emergency';

interface CalloutProps {
  children: ReactNode;
  variant?: CalloutVariant;
  title?: string;
  className?: string;
  showIcon?: boolean;
}

const variantStyles = {
  warning: {
    container: 'bg-amber-50 border-amber-200 text-amber-900',
    icon: 'text-amber-600',
    IconComponent: AlertTriangle,
  },
  info: {
    container: 'bg-accent-50 border-accent-200 text-accent-900',
    icon: 'text-accent-600',
    IconComponent: Info,
  },
  neutral: {
    container: 'bg-warm-100 border-warm-200 text-warm-800',
    icon: 'text-warm-600',
    IconComponent: Shield,
  },
  emergency: {
    container: 'bg-secondary-50 border-secondary-300 text-secondary-900',
    icon: 'text-secondary-600',
    IconComponent: AlertCircle,
  },
};

export function Callout({
  children,
  variant = 'neutral',
  title,
  className = '',
  showIcon = true,
}: CalloutProps) {
  const styles = variantStyles[variant];
  const Icon = styles.IconComponent;

  return (
    <div
      className={`rounded-2xl border p-5 ${styles.container} ${className}`}
      role={variant === 'emergency' || variant === 'warning' ? 'alert' : 'note'}
    >
      <div className="flex gap-3">
        {showIcon && (
          <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${styles.icon}`} />
        )}
        <div className="flex-grow">
          {title && (
            <p className="font-semibold mb-1">{title}</p>
          )}
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

// Specific callout for emergency disclaimers
export function EmergencyCallout({ className = '' }: { className?: string }) {
  return (
    <Callout variant="emergency" title="In a Crisis?" className={className}>
      <p>
        If you are experiencing a mental health emergency, please call{' '}
        <strong>911</strong> or go to the nearest emergency room. You can also
        contact the{' '}
        <strong>988 Suicide & Crisis Lifeline</strong> by calling or texting{' '}
        <strong>988</strong>.
      </p>
    </Callout>
  );
}

// HIPAA/communication disclaimer
export function CommunicationDisclaimer({ className = '' }: { className?: string }) {
  return (
    <Callout variant="info" title="About This Form" className={className}>
      <p>
        Please do not include sensitive personal health information in this form.
        Electronic communications are not guaranteed to be secure. Submitting this
        form does not establish a therapist-client relationship.
      </p>
    </Callout>
  );
}

// General medical disclaimer
export function MedicalDisclaimer({ className = '' }: { className?: string }) {
  return (
    <Callout variant="neutral" className={className}>
      <p>
        The information on this website is for general informational purposes only
        and is not intended as medical advice, diagnosis, or treatment. Always seek
        the advice of a qualified mental health professional with any questions you
        may have.
      </p>
    </Callout>
  );
}
