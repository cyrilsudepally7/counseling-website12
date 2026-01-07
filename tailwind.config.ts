import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Light blush pink - soft, nurturing, welcoming
        primary: {
          50: '#fef7f8',
          100: '#feecef',
          200: '#fdd9df',
          300: '#fbb8c4',
          400: '#f88da1',
          500: '#f06280',
          600: '#dc3d5f',
          700: '#ba2c4b',
          800: '#9b2842',
          900: '#84263d',
          950: '#49101d',
        },
        // Secondary: Warm sunny yellow - hopeful, optimistic, cheerful
        secondary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        // Accent: Soft rose/blush - gentle, calming
        accent: {
          50: '#fff5f6',
          100: '#ffe8eb',
          200: '#ffd5db',
          300: '#ffb3be',
          400: '#ff8599',
          500: '#f95d78',
          600: '#e63b5a',
          700: '#c22848',
          800: '#a12541',
          900: '#89233d',
          950: '#4c0e1d',
        },
        // Warm neutrals
        warm: {
          50: '#fdfcfb',
          100: '#f9f6f3',
          200: '#f3ede6',
          300: '#e9dfd3',
          400: '#d9c8b5',
          500: '#c5ac94',
          600: '#b09477',
          700: '#947a60',
          800: '#7a6551',
          900: '#655444',
          950: '#352b22',
        },
        // Background cream with warm pink undertone
        cream: {
          50: '#fffcfa',
          100: '#fff8f5',
          200: '#fff1ec',
          300: '#ffe8e0',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px',
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.08), 0 4px 16px -4px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 4px 12px -4px rgba(0, 0, 0, 0.1), 0 8px 24px -8px rgba(0, 0, 0, 0.08)',
        'soft-xl': '0 8px 24px -8px rgba(0, 0, 0, 0.12), 0 16px 40px -16px rgba(0, 0, 0, 0.1)',
        'lifted': '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
