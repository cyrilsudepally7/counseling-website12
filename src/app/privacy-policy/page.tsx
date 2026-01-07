import { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';
import { PRACTICE_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Privacy Policy | ${PRACTICE_INFO.name}`,
  description: `Privacy policy for ${PRACTICE_INFO.name}. Learn how we collect, use, and protect your information.`,
  openGraph: {
    title: `Privacy Policy | ${PRACTICE_INFO.name}`,
    description: `Privacy policy for ${PRACTICE_INFO.name}. Learn how we collect, use, and protect your information.`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream-50 to-white py-16 md:py-20">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-display-sm md:text-display-md text-neutral-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-neutral-600">
              Last updated: [DATE]
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="prose prose-neutral max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Your privacy is important to me. This Privacy Policy explains how {PRACTICE_INFO.name} 
                  ("we," "our," or "I") collects, uses, and protects information when you visit this 
                  website or use our services. This policy applies only to this website and does not 
                  cover information collected through other means.
                </p>
                <div className="mt-6 p-4 bg-primary-50 rounded-xl border border-primary-100">
                  <p className="text-primary-800 font-medium mb-2">Important Note</p>
                  <p className="text-primary-700 text-sm">
                    This website provides general information about counseling services and is not 
                    intended as medical or mental health advice. The information on this site does 
                    not create a therapist-client relationship.
                  </p>
                </div>
              </div>

              {/* Information We Collect */}
              <PolicySection title="Information We Collect">
                <p>We may collect the following types of information:</p>
                
                <h4 className="text-lg font-semibold text-neutral-900 mt-6 mb-3">
                  Information You Provide
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li>
                    <strong>Contact Form Submissions:</strong> When you submit our contact form, we 
                    collect your name, email address, phone number (if provided), and the content 
                    of your message.
                  </li>
                  <li>
                    <strong>Scheduling Information:</strong> When you book a consultation through 
                    our scheduling tool, you provide information such as your name, email, and 
                    appointment preferences.
                  </li>
                  <li>
                    <strong>Communications:</strong> If you contact us by email or phone, we keep 
                    records of that correspondence.
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-neutral-900 mt-6 mb-3">
                  Information Collected Automatically
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li>
                    <strong>Usage Data:</strong> Our hosting provider may automatically collect 
                    standard log information, including your IP address, browser type, pages 
                    visited, and time spent on the site.
                  </li>
                  <li>
                    <strong>Cookies:</strong> We may use essential cookies to ensure the website 
                    functions properly. We do not use tracking cookies for advertising purposes.
                  </li>
                </ul>
              </PolicySection>

              {/* How We Use Your Information */}
              <PolicySection title="How We Use Your Information">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700 mt-4">
                  <li>Respond to your inquiries and contact form submissions</li>
                  <li>Schedule and manage consultation appointments</li>
                  <li>Communicate with you about our services</li>
                  <li>Improve our website and user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="mt-4">
                  We do not sell, rent, or share your personal information with third parties 
                  for their marketing purposes.
                </p>
              </PolicySection>

              {/* Third-Party Services */}
              <PolicySection title="Third-Party Services">
                <p>
                  We use third-party services to operate this website. These services may have 
                  access to limited information as needed to perform their functions:
                </p>
                
                <div className="mt-6 space-y-4">
                  <ThirdPartyItem 
                    name="Website Hosting"
                    description="Our website is hosted by [HOSTING PROVIDER, e.g., Vercel]. They may collect standard server logs including IP addresses and access times."
                    link="[HOSTING PRIVACY POLICY URL]"
                  />
                  <ThirdPartyItem 
                    name="Scheduling Service"
                    description="We use [SCHEDULING SERVICE, e.g., Calendly] for appointment booking. When you schedule a consultation, your information is processed according to their privacy policy."
                    link="[SCHEDULING PRIVACY POLICY URL]"
                  />
                  <ThirdPartyItem 
                    name="Email Service"
                    description="Contact form submissions are delivered via [EMAIL PROVIDER, e.g., Resend]. They process emails according to their privacy policy."
                    link="[EMAIL PROVIDER PRIVACY POLICY URL]"
                  />
                  <ThirdPartyItem 
                    name="Analytics (If Used)"
                    description="[If you use analytics: We may use privacy-focused analytics to understand how visitors use our site. This data is anonymized and does not personally identify you.]"
                    link="[ANALYTICS PRIVACY POLICY URL]"
                  />
                </div>
              </PolicySection>

              {/* Cookies */}
              <PolicySection title="Cookies">
                <p>
                  Cookies are small text files stored on your device when you visit a website. 
                  We use only essential cookies necessary for the website to function properly.
                </p>
                <p className="mt-4">
                  You can control cookies through your browser settings. Please note that 
                  disabling certain cookies may affect website functionality.
                </p>
                <p className="mt-4">
                  Third-party services we use (such as our scheduling tool) may set their own 
                  cookies. Please refer to their privacy policies for more information.
                </p>
              </PolicySection>

              {/* Data Retention */}
              <PolicySection title="Data Retention">
                <p>
                  We retain your information only as long as necessary to fulfill the purposes 
                  outlined in this policy, unless a longer retention period is required by law.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700 mt-4">
                  <li>
                    <strong>Contact Form Submissions:</strong> Retained as long as needed to 
                    respond to your inquiry and for reasonable follow-up, typically no longer 
                    than [TIME PERIOD, e.g., 2 years].
                  </li>
                  <li>
                    <strong>Scheduling Data:</strong> Managed according to our scheduling 
                    service's retention policy.
                  </li>
                  <li>
                    <strong>Server Logs:</strong> Typically retained for [TIME PERIOD, e.g., 
                    30-90 days] by our hosting provider.
                  </li>
                </ul>
              </PolicySection>

              {/* Data Security */}
              <PolicySection title="Data Security">
                <p>
                  We take reasonable measures to protect your information from unauthorized 
                  access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700 mt-4">
                  <li>Secure HTTPS encryption for all website traffic</li>
                  <li>Using reputable third-party services with strong security practices</li>
                  <li>Limiting access to personal information to those who need it</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the internet is 100% secure. We 
                  cannot guarantee absolute security of information transmitted through this 
                  website.
                </p>
                <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <p className="text-amber-800 text-sm">
                    <strong>Important:</strong> Please do not submit sensitive personal health 
                    information through our contact form or email. These communications may 
                    not be secure.
                  </p>
                </div>
              </PolicySection>

              {/* Your Rights and Choices */}
              <PolicySection title="Your Rights and Choices">
                <p>You have the following rights regarding your information:</p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700 mt-4">
                  <li>
                    <strong>Access:</strong> You may request a copy of the personal information 
                    we hold about you.
                  </li>
                  <li>
                    <strong>Correction:</strong> You may request that we correct inaccurate 
                    information.
                  </li>
                  <li>
                    <strong>Deletion:</strong> You may request that we delete your personal 
                    information, subject to certain exceptions.
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> You may opt out of receiving communications from 
                    us at any time.
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us using the information below.
                </p>
              </PolicySection>

              {/* Children's Privacy */}
              <PolicySection title="Children's Privacy">
                <p>
                  This website is not intended for children under 13 years of age. We do not 
                  knowingly collect personal information from children under 13. If you are a 
                  parent or guardian and believe your child has provided us with personal 
                  information, please contact us so we can delete it.
                </p>
                <p className="mt-4">
                  For information about play therapy services for children, parents or 
                  guardians should contact us directly.
                </p>
              </PolicySection>

              {/* Changes to This Policy */}
              <PolicySection title="Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time. When we make changes, 
                  we will update the "Last updated" date at the top of this page. We encourage 
                  you to review this policy periodically.
                </p>
                <p className="mt-4">
                  Continued use of the website after changes are posted constitutes acceptance 
                  of the updated policy.
                </p>
              </PolicySection>

              {/* Contact Us */}
              <PolicySection title="Contact Us About Privacy">
                <p>
                  If you have questions about this Privacy Policy or how we handle your 
                  information, please contact us:
                </p>
                <div className="mt-4 p-6 bg-cream-50 rounded-xl">
                  <p className="font-semibold text-neutral-900">{PRACTICE_INFO.name}</p>
                  <p className="text-neutral-700 mt-2">
                    {PRACTICE_INFO.therapist.name}, {PRACTICE_INFO.therapist.credentials}
                  </p>
                  <p className="text-neutral-700 mt-2">
                    {PRACTICE_INFO.location.fullAddress}<br />
                    {PRACTICE_INFO.location.city}, {PRACTICE_INFO.location.state}
                  </p>
                  <p className="text-neutral-700 mt-2">
                    Email: <a href={`mailto:${PRACTICE_INFO.contact.email}`} className="text-primary-600 hover:text-primary-700">{PRACTICE_INFO.contact.email}</a>
                  </p>
                  <p className="text-neutral-700">
                    Phone: <a href={`tel:${PRACTICE_INFO.contact.phone}`} className="text-primary-600 hover:text-primary-700">{PRACTICE_INFO.contact.phone}</a>
                  </p>
                </div>
              </PolicySection>

              {/* Disclaimer */}
              <div className="mt-12 p-6 bg-neutral-100 rounded-xl border border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Disclaimer</h3>
                <p className="text-neutral-700 text-sm">
                  This Privacy Policy is provided for informational purposes and applies to 
                  this website only. It does not constitute legal advice. This policy does 
                  not address the confidentiality of information shared during therapy 
                  sessions, which is governed by professional ethics codes, state law, and 
                  HIPAA regulations where applicable. If you have questions about 
                  confidentiality in therapy, please ask during your consultation.
                </p>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl md:text-2xl font-display font-semibold text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
        {title}
      </h2>
      <div className="text-neutral-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function ThirdPartyItem({ 
  name, 
  description, 
  link 
}: { 
  name: string; 
  description: string; 
  link: string;
}) {
  return (
    <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
      <h5 className="font-semibold text-neutral-900">{name}</h5>
      <p className="text-neutral-700 text-sm mt-1">{description}</p>
      <p className="text-xs text-neutral-500 mt-2">
        Privacy Policy: <span className="text-primary-600">{link}</span>
      </p>
    </div>
  );
}
