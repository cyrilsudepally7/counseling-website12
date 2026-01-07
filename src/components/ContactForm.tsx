'use client';

import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  privacyTitle: {
    en: 'Important Privacy Notice',
    es: 'Aviso Importante de Privacidad',
  },
  privacyBody: {
    en: 'Please do not include sensitive personal health information in this form. Electronic communications may not be secure. Submitting this form does not establish a therapist-client relationship. This form is not for emergencies.',
    es: 'Por favor, no incluya información personal de salud sensible en este formulario. Las comunicaciones electrónicas pueden no ser seguras. Enviar este formulario no establece una relación terapeuta-cliente. Este formulario no es para emergencias.',
  },
  privacyAck: {
    en: 'I understand and agree.',
    es: 'Entiendo y estoy de acuerdo.',
  },
  firstName: {
    en: 'First Name',
    es: 'Nombre',
  },
  lastName: {
    en: 'Last Name',
    es: 'Apellido',
  },
  email: {
    en: 'Email',
    es: 'Correo Electrónico',
  },
  phone: {
    en: 'Phone (Optional)',
    es: 'Teléfono (Opcional)',
  },
  preferredContact: {
    en: 'Preferred Contact Method',
    es: 'Método de Contacto Preferido',
  },
  serviceInterest: {
    en: 'Service of Interest',
    es: 'Servicio de Interés',
  },
  selectService: {
    en: 'Select a service...',
    es: 'Seleccione un servicio...',
  },
  message: {
    en: 'What brings you to counseling?',
    es: '¿Qué te trae a la consejería?',
  },
  messagePlaceholder: {
    en: 'Please share a little about what you\'re experiencing and what you hope to get from counseling...',
    es: 'Por favor comparta un poco sobre lo que está experimentando y lo que espera obtener de la consejería...',
  },
  submit: {
    en: 'Request Free Consultation',
    es: 'Solicitar Consulta Gratis',
  },
  submitting: {
    en: 'Submitting...',
    es: 'Enviando...',
  },
  required: {
    en: 'Required',
    es: 'Requerido',
  },
};

const services = [
  'Individual Counseling',
  'Group Counseling',
  'Couples Counseling',
  'Family Counseling',
  'Child & Adolescent Counseling',
  'Play Therapy',
  'Career Counseling',
  'Athlete Counseling',
  'Child Parent Relationship Therapy',
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Allow the form to submit naturally - don't prevent default
    // The submitting state provides visual feedback
  };

  return (
    <form
      action="https://formspree.io/f/mojvgayd"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Hidden fields */}
      <input type="hidden" name="_subject" value="New Counseling Consultation Request" />
      <input type="hidden" name="_redirect" value="/thank-you" />

      {/* Privacy Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h3 className="font-semibold text-amber-900 mb-2">
              {t(translations.privacyTitle)}
            </h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              {t(translations.privacyBody)}
            </p>
          </div>
        </div>
        
        {/* Privacy Acknowledgment Checkbox */}
        <div className="mt-4 pt-4 border-t border-amber-200">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="privacy_ack"
              value="Yes"
              required
              className="mt-1 w-4 h-4 text-primary-600 border-amber-300 rounded focus:ring-primary-500 focus:ring-offset-0"
            />
            <span className="text-amber-900 text-sm font-medium">
              {t(translations.privacyAck)} <span className="text-red-500">*</span>
            </span>
          </label>
        </div>
      </div>

      {/* Name Fields - Two Column on Desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="first_name" className="block text-sm font-medium text-warm-700 mb-2">
            {t(translations.firstName)} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            required
            className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="last_name" className="block text-sm font-medium text-warm-700 mb-2">
            {t(translations.lastName)} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            required
            className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder="Smith"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-warm-700 mb-2">
          {t(translations.email)} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="jane@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-warm-700 mb-2">
          {t(translations.phone)}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="(555) 123-4567"
        />
      </div>

      {/* Preferred Contact Method - Radio Group */}
      <fieldset>
        <legend className="block text-sm font-medium text-warm-700 mb-3">
          {t(translations.preferredContact)} <span className="text-red-500">*</span>
        </legend>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="preferred_contact"
              value="Email"
              required
              className="w-4 h-4 text-primary-600 border-warm-300 focus:ring-primary-500 focus:ring-offset-0"
            />
            <span className="text-warm-700">Email</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="preferred_contact"
              value="Phone"
              className="w-4 h-4 text-primary-600 border-warm-300 focus:ring-primary-500 focus:ring-offset-0"
            />
            <span className="text-warm-700">{t(translations.phone).replace(' (Optional)', '').replace(' (Opcional)', '')}</span>
          </label>
        </div>
      </fieldset>

      {/* Service of Interest - Select */}
      <div>
        <label htmlFor="service_interest" className="block text-sm font-medium text-warm-700 mb-2">
          {t(translations.serviceInterest)} <span className="text-red-500">*</span>
        </label>
        <select
          id="service_interest"
          name="service_interest"
          required
          className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%236b7280%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5rem] bg-[right_0.75rem_center] bg-no-repeat pr-10"
        >
          <option value="">{t(translations.selectService)}</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-warm-700 mb-2">
          {t(translations.message)} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-y"
          placeholder={t(translations.messagePlaceholder)}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-200 ${
          isSubmitting
            ? 'bg-warm-300 text-warm-500 cursor-not-allowed'
            : 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg hover:-translate-y-0.5 shadow-md shadow-primary-500/20'
        }`}
      >
        {isSubmitting ? t(translations.submitting) : t(translations.submit)}
      </button>

      {/* Footer Note */}
      <p className="text-warm-500 text-xs text-center">
        <span className="text-red-500">*</span> {t(translations.required)}
      </p>
    </form>
  );
}
