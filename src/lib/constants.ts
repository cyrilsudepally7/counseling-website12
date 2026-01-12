/**
 * Site-wide constants and practice information
 */

export const PRACTICE_INFO = {
  // Practice Details
  name: "Yet Counseling",
  tagline: "Healing Is a Process. You Don't Have To Be There Yet.",
  
  // Therapist Details
  therapist: {
    name: "Kim Sullivan",
    credentials: "LPC",
    licenseNumber: "[LICENSE #]",
    licenseState: "Texas",
  },
  
  // Location
  location: {
    street: "1013 Long Prairie Road, #103",
    city: "Flower Mound",
    state: "Texas",
    zip: "75022",
    country: "United States",
    fullAddress: "1013 Long Prairie Road, #103, Flower Mound, Texas 75022",
    mapQuery: "1013 Long Prairie Road, #103 Flower Mound, Texas 75022, United States",
  },
  
  // Contact
  contact: {
    phone: "972-371-0058",
    email: "yetcounseling@gmail.com",
    bookingUrl: "", // Calendly or similar
  },
  
  // Hours
  hours: {
    display: "By Appointment",
    detailed: [
      { day: "Monday", hours: "By Appointment" },
      { day: "Tuesday", hours: "By Appointment" },
      { day: "Wednesday", hours: "By Appointment" },
      { day: "Thursday", hours: "By Appointment" },
      { day: "Friday", hours: "By Appointment" },
      { day: "Saturday", hours: "By Appointment" },
      { day: "Sunday", hours: "Closed" },
    ],
  },

  // Response time
  responseTime: "24 hours",

  // Insurance Information
  insurance: {
    accepted: [
      "Aetna",
      "Quest Behavioral Health",
      "Carelon Behavioral Health",
      "Ascension (Smart Health)",
      "Cigna",
      "United Health Care",
      "UMR",
      "Anthem EAP",
    ],
    comingSoon: [
      "Blue Cross Blue Shield",

      "Oxford Optum",
      "Oscar Optum",
    ],
  },
  
  // Areas Served (for local SEO)
  areasServed: [
    "Flower Mound",
    "Highland Village",
    "Lewisville",
    "Coppell",
    "Grapevine",
    "Southlake",
  ],
} as const;

// SEO Defaults
export const SEO_DEFAULTS = {
  siteName: PRACTICE_INFO.name,
  titleTemplate: `%s | ${PRACTICE_INFO.name}`,
  defaultTitle: `${PRACTICE_INFO.name} | Counseling in ${PRACTICE_INFO.location.city}, ${PRACTICE_INFO.location.state}`,
  defaultDescription: `Compassionate counseling services in ${PRACTICE_INFO.location.city}, ${PRACTICE_INFO.location.state}. Individual therapy, play therapy, and family counseling. Schedule your free consultation today.`,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
  locale: "en_US",
  type: "website",
} as const;

// Navigation Links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { 
    href: "/services", 
    label: "Services",
    children: [
      { href: "/services/individual-counseling", label: "Individual Counseling" },
      { href: "/services/group-counseling", label: "Group Counseling" },
      { href: "/services/couples-counseling", label: "Couples Counseling" },
      { href: "/services/family-counseling", label: "Family Counseling" },
      { href: "/services/child-adolescent-counseling", label: "Child & Adolescent Counseling" },
      { href: "/services/play-therapy", label: "Play Therapy" },
      { href: "/services/career-counseling", label: "Career Counseling" },
      { href: "/services/athlete-counseling", label: "Athlete Counseling" },
      { href: "/services/child-parent-relationship-therapy", label: "Child Parent Relationship Therapy" },
    ],
  },
  { href: "/contact", label: "Contact" },
] as const;

// Service Information
export const SERVICES = {
  individual: {
    title: "Individual Counseling",
    slug: "individual-counseling",
    shortDescription: "A safe space to explore your thoughts, feelings, and experiences with personalized support.",
    icon: "User",
  },
  group: {
    title: "Group Counseling",
    slug: "group-counseling",
    shortDescription: "Connect with others facing similar challenges in a supportive group setting.",
    icon: "Users",
  },
  couples: {
    title: "Couples Counseling",
    slug: "couples-counseling",
    shortDescription: "Strengthen your relationship through improved communication and connection.",
    icon: "Heart",
  },
  family: {
    title: "Family Counseling",
    slug: "family-counseling",
    shortDescription: "Strengthening communication and connection within your family unit.",
    icon: "Home",
  },
  childAdolescent: {
    title: "Child & Adolescent Counseling",
    slug: "child-adolescent-counseling",
    shortDescription: "Age-appropriate support for young people navigating life's challenges.",
    icon: "Baby",
  },
  playTherapy: {
    title: "Play Therapy",
    slug: "play-therapy",
    shortDescription: "Helping children express themselves and work through challenges in a developmentally appropriate way.",
    icon: "Puzzle",
  },
  career: {
    title: "Career Counseling",
    slug: "career-counseling",
    shortDescription: "Navigate career transitions and find fulfillment in your professional life.",
    icon: "Briefcase",
  },
  athlete: {
    title: "Athlete Counseling",
    slug: "athlete-counseling",
    shortDescription: "Mental performance support for athletes at all levels.",
    icon: "Trophy",
  },
  cprt: {
    title: "Child Parent Relationship Therapy",
    slug: "child-parent-relationship-therapy",
    shortDescription: "Strengthen the bond between parent and child through guided interactions.",
    icon: "HandHeart",
  },
} as const;

// Disclaimers
export const DISCLAIMERS = {
  emergency: "If you are experiencing a mental health emergency, please call 911 or go to the nearest emergency room. You can also contact the 988 Suicide & Crisis Lifeline by calling or texting 988.",
  
  hipaaCommunication: "Please do not include sensitive personal health information in this form. Electronic communications are not guaranteed to be secure. Submitting this form does not establish a therapist-client relationship.",
  
  generalMedical: "The information on this website is for general informational purposes only and is not intended as medical advice, diagnosis, or treatment. Always seek the advice of a qualified mental health professional with any questions you may have.",
  
  responseTime: "We typically respond to inquiries within 24 hours.",
  
  privacyConsent: "I understand that this form does not establish a therapist-client relationship, that I should not include sensitive health information, and that electronic communications may not be secure. I have read and agree to the privacy policy.",
} as const;

// Form Options
export const FORM_OPTIONS = {
  contactMethods: [
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone" },
  ],
  services: [
    { value: "individual", label: "Individual Counseling" },
    { value: "group", label: "Group Counseling" },
    { value: "couples", label: "Couples Counseling" },
    { value: "family", label: "Family Counseling" },
    { value: "child-adolescent", label: "Child & Adolescent Counseling" },
    { value: "play-therapy", label: "Play Therapy" },
    { value: "career", label: "Career Counseling" },
    { value: "athlete", label: "Athlete Counseling" },
    { value: "cprt", label: "Child Parent Relationship Therapy" },
    { value: "not-sure", label: "Not sure yet" },
  ],
} as const;
