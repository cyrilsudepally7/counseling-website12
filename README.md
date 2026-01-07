# Counseling Practice Website

A modern, professional website for a counseling practice built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Warm, Friendly Design**: Colorful yet professional aesthetic appropriate for counseling practices
- **HIPAA-Conscious**: Proper disclaimers and privacy notices throughout
- **Smooth Animations**: Subtle, calming animations powered by Framer Motion
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Local SEO-friendly with proper meta tags and semantic HTML
- **Accessible**: WCAG AA compliant with proper focus states and ARIA labels
- **Contact Form**: Validated form with honeypot spam protection and rate limiting
- **Scheduling Integration**: Calendly embed for easy appointment booking

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend (configurable)
- **Icons**: Lucide React

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- A Resend account (for email functionality)
- A Calendly account (for scheduling)

### Installation

1. **Clone or download the project**
   ```bash
   git clone [your-repo-url]
   cd counseling-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure environment variables** (see [Environment Variables](#environment-variables) below)

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Email Configuration (Resend)
RESEND_API_KEY=re_your_api_key_here

# Email addresses
CONTACT_EMAIL_TO=your-practice-email@example.com
CONTACT_EMAIL_FROM=noreply@yourdomain.com

# Site URL (for canonical URLs and Open Graph)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Optional: Rate limiting (defaults shown)
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=5
```

#### Getting a Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Create a new API key in your dashboard
3. Verify your sending domain
4. Add the API key to your `.env.local` file

---

## Customizing Your Website

### 1. Update Practice Information

All practice-specific information is centralized in one file:

**`src/lib/constants.ts`**

Update the `PRACTICE_INFO` object with your details:

```typescript
export const PRACTICE_INFO = {
  name: 'Your Practice Name',
  therapistName: 'Your Name',
  credentials: 'LPC, NCC',
  licenseNumber: 'TX-12345',
  city: 'Austin',
  state: 'TX',
  address: '123 Main Street, Suite 100',
  phone: '(512) 555-0123',
  email: 'hello@yourpractice.com',
  hours: 'Monday–Friday, 9am–5pm',
  bookingLink: 'https://calendly.com/your-link',
};
```

### 2. Update Colors/Theme

The color palette is defined in **`tailwind.config.ts`**:

```typescript
colors: {
  primary: {
    // Sage green - main brand color
    50: '#f4f9f4',
    500: '#5a9e5a',
    600: '#4a8a4a',
    // ... other shades
  },
  secondary: {
    // Coral/peach - accent color
    50: '#fff5f2',
    500: '#eb6d4d',
    // ... other shades
  },
  accent: {
    // Lavender - secondary accent
    50: '#f8f5fc',
    500: '#a184c7',
    // ... other shades
  },
}
```

To change colors:
1. Choose your new color palette
2. Generate shades (use [Tailwind Color Generator](https://uicolors.app/create))
3. Replace the color values in `tailwind.config.ts`
4. Run `npm run dev` to see changes

### 3. Update Page Content

Each page is in its own folder under `src/app/`:

| Page | File Location |
|------|---------------|
| Home | `src/app/page.tsx` |
| About | `src/app/about/page.tsx` |
| Services | `src/app/services/page.tsx` |
| Individual Counseling | `src/app/services/individual-counseling/page.tsx` |
| Play Therapy | `src/app/services/play-therapy/page.tsx` |
| Family Counseling | `src/app/services/family-counseling/page.tsx` |
| Contact | `src/app/contact/page.tsx` |
| Privacy Policy | `src/app/privacy-policy/page.tsx` |

### 4. Update SEO Metadata

Each page has metadata defined either:
- At the top of the page file (server components)
- In a `layout.tsx` file (for client components like Contact)

Example:
```typescript
export const metadata: Metadata = {
  title: 'Your Page Title | Practice Name',
  description: 'Your meta description (max 160 chars)',
  openGraph: {
    title: 'Your Page Title',
    description: 'Description for social sharing',
  },
};
```

### 5. Add Images

Place images in the `public/` folder:

- `public/images/` - General images
- `public/images/team/` - Therapist photos
- `public/favicon.ico` - Site favicon

Reference images in components:
```tsx
<Image src="/images/your-image.jpg" alt="Description" width={400} height={300} />
```

### 6. Update Navigation

Navigation links are defined in **`src/lib/constants.ts`**:

```typescript
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  // ...
];
```

### 7. Customize Fonts

Fonts are configured in `src/app/layout.tsx`:

```typescript
const displayFont = Lora({
  subsets: ['latin'],
  variable: '--font-display',
});

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
});
```

To change fonts:
1. Import from `next/font/google`
2. Update the font configuration
3. Update `tailwind.config.ts` if using different variable names

---

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Environment Variables**
   - In Vercel project settings, add your environment variables:
     - `RESEND_API_KEY`
     - `CONTACT_EMAIL_TO`
     - `CONTACT_EMAIL_FROM`
     - `NEXT_PUBLIC_SITE_URL`

4. **Deploy**
   - Vercel will automatically build and deploy
   - Each push to `main` will trigger a new deployment

5. **Add Custom Domain**
   - In Vercel project settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Other Hosting Options

The site can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted with Node.js

---

## Common Tasks

### Adding a New Service Page

1. Create folder: `src/app/services/your-service/`
2. Create file: `page.tsx` (copy structure from existing service page)
3. Add to navigation in `src/lib/constants.ts`
4. Add to services list in `src/lib/constants.ts`

### Updating the Contact Form Fields

Edit `src/components/ContactForm.tsx`:
- Update the Zod schema for validation
- Update the form fields JSX
- Update the API route in `src/app/api/contact/route.ts`

### Changing Animation Speed

Animation settings are in component files. Look for:
```typescript
transition={{ duration: 0.2 }}
```

Or update the `AnimatedSection` component defaults in `src/components/AnimatedSection.tsx`.

### Disabling Animations

The site respects `prefers-reduced-motion`. Users with this setting enabled will see minimal/no animations automatically.

To disable all animations site-wide, you can:
1. Set `duration: 0` in animation configurations
2. Or remove Framer Motion wrappers

---

## File Structure

```
counseling-website/
├── public/                    # Static assets
│   └── images/               # Image files
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── api/              # API routes
│   │   │   └── contact/      # Contact form endpoint
│   │   ├── about/
│   │   ├── contact/
│   │   ├── privacy-policy/
│   │   ├── services/
│   │   │   ├── individual-counseling/
│   │   │   ├── play-therapy/
│   │   │   └── family-counseling/
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/           # Reusable components
│   │   ├── AnimatedSection.tsx
│   │   ├── Callout.tsx
│   │   ├── CalendlyEmbed.tsx
│   │   ├── ContactForm.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── ServiceCard.tsx
│   ├── lib/                  # Utilities and constants
│   │   └── constants.ts      # Practice info, nav links, etc.
│   └── styles/
│       └── globals.css       # Global styles
├── .env.example              # Environment variable template
├── .env.local               # Your environment variables (git-ignored)
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Troubleshooting

### Contact form not sending emails

1. Check that `RESEND_API_KEY` is set correctly
2. Verify your sending domain is verified in Resend
3. Check the server logs for error messages
4. In development, emails are logged to console if no API key is set

### Styles not updating

1. Stop the dev server
2. Delete `.next` folder: `rm -rf .next`
3. Restart: `npm run dev`

### Build errors

1. Check for TypeScript errors: `npm run type-check`
2. Check for linting errors: `npm run lint`
3. Ensure all imports are correct

### Calendly embed not showing

1. Verify the booking link is correct in `constants.ts`
2. Check browser console for errors
3. Ensure the Calendly URL is publicly accessible

---

## Support

For technical issues with this website template, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

## License

This website template is provided for use by the client. Please do not redistribute without permission.
