import { Metadata } from 'next';
import { PRACTICE_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Contact | ${PRACTICE_INFO.name} | ${PRACTICE_INFO.location.city}, ${PRACTICE_INFO.location.state}`,
  description: `Schedule a free consultation with ${PRACTICE_INFO.therapist.name} or send a message. Serving ${PRACTICE_INFO.location.city}, ${PRACTICE_INFO.location.state} and surrounding areas.`,
  openGraph: {
    title: `Contact | ${PRACTICE_INFO.name}`,
    description: `Schedule a free consultation or get in touch. ${PRACTICE_INFO.name} serves ${PRACTICE_INFO.location.city}, ${PRACTICE_INFO.location.state}.`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
