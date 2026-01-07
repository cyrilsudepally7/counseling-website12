import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, AlertCircle } from 'lucide-react';
import { PRACTICE_INFO, DISCLAIMERS, NAV_LINKS, SERVICES } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-600 text-white">
      {/* Emergency Banner */}
      <div className="bg-red-600 py-3">
        <div className="container-custom">
          <div className="flex items-start sm:items-center gap-2 text-sm text-white">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 sm:mt-0 text-white" />
            <p className="text-white">
              <strong className="text-white">In a crisis?</strong>{' '}
              <span className="text-white">Call <a href="tel:911" className="underline font-semibold text-white hover:text-white/90">911</a> or text <a href="tel:988" className="underline font-semibold text-white hover:text-white/90">988</a> for the Suicide & Crisis Lifeline.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link 
              href="/" 
              className="inline-block hover:opacity-80 transition-opacity mb-4"
            >
              <Image
                src="/images/logo-yet.png"
                alt="Yet Counseling"
                width={70}
                height={35}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-primary-100 text-sm leading-relaxed mb-4">
              {PRACTICE_INFO.tagline}
            </p>
            <p className="text-primary-200 text-xs">
              {PRACTICE_INFO.therapist.name}, {PRACTICE_INFO.therapist.credentials}
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {Object.values(SERVICES).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-primary-100 hover:text-white transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#consultation"
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  Free Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${PRACTICE_INFO.contact.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 text-primary-100 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {PRACTICE_INFO.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PRACTICE_INFO.contact.email}`}
                  className="flex items-center gap-2 text-primary-100 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {PRACTICE_INFO.contact.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-primary-100 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{PRACTICE_INFO.location.fullAddress}</span>
                </div>
              </li>
            </ul>
            <p className="text-primary-200 text-xs mt-4">
              {PRACTICE_INFO.hours.display}
            </p>
          </div>
        </div>

        {/* Insurance Information */}
        <div className="border-t border-primary-500 mt-10 pt-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-display font-semibold text-white mb-3 text-sm">Insurance Accepted</h4>
              <p className="text-primary-100 text-sm">
                {PRACTICE_INFO.insurance.accepted.join(' • ')}
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-3 text-sm">Coming Soon</h4>
              <p className="text-primary-200 text-sm">
                {PRACTICE_INFO.insurance.comingSoon.join(' • ')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-500 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-200 text-xs text-center sm:text-left">
              © {currentYear} Yet Counseling. All rights reserved.
            </p>
            <p className="text-primary-200 text-xs text-center sm:text-right max-w-xl">
              This website provides general information and is not medical advice. 
              It does not establish a therapist-client relationship.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
