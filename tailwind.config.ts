import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand tokens
        brand: {
          bg: '#05060a',
          surface: '#0c0d14',
          'surface-2': '#11121c',
          border: 'rgba(255,255,255,0.07)',
          'border-strong': 'rgba(255,255,255,0.12)',
          accent: '#7c6ff7',        // violet primary
          'accent-glow': '#9d96fa',
          gold: '#c9a84c',          // warm gold
          'gold-light': '#e2c077',
          muted: '#5a5f7a',
          'text-primary': '#f0f1f8',
          'text-secondary': '#9095b0',
          'text-muted': '#5a5f7a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glow':
          'radial-gradient(ellipse at 50% 0%, rgba(124,111,247,0.15) 0%, transparent 70%)',
        'gradient-gold':
          'linear-gradient(135deg, #c9a84c 0%, #e2c077 50%, #c9a84c 100%)',
        'gradient-brand':
          'linear-gradient(135deg, #7c6ff7 0%, #9d96fa 100%)',
        'card-shine':
          'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 60%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(124,111,247,0.15)',
        'glow-md': '0 0 40px rgba(124,111,247,0.2)',
        'glow-lg': '0 0 80px rgba(124,111,247,0.25)',
        'gold-glow': '0 0 30px rgba(201,168,76,0.2)',
        'glass': '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-lg': '0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      screens: {
        'xs': '480px',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}

export default config
