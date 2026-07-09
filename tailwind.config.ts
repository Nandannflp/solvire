import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-geist)', 'sans-serif'],
  			display: ['var(--font-clash)', 'sans-serif'],
  		},
  		colors: {
  			background: '#FAFAFA',
  			foreground: '#1F2937',
  			surface: '#FFFFFF',
  			editorial: '#F9FAFB',
  			textPrimary: '#1F2937',
  			textSecondary: '#4B5563',
  			solar: '#F58220', // Orange
  			energy: '#2DBE60', // Green
  			card: {
  				DEFAULT: '#FFFFFF',
  				foreground: '#1F2937'
  			},
  			popover: {
  				DEFAULT: '#FFFFFF',
  				foreground: '#1F2937'
  			},
  			primary: {
  				DEFAULT: '#FE9B02',
  				foreground: '#FFFFFF'
  			},
  			secondary: {
  				DEFAULT: '#F9FAFB',
  				foreground: '#1F2937'
  			},
  			muted: {
  				DEFAULT: '#F3F4F6',
  				foreground: '#6B7280'
  			},
  			accent: {
  				DEFAULT: '#FE9B02',
  				foreground: '#FFFFFF'
  			},
  			destructive: {
  				DEFAULT: '#EF4444',
  				foreground: '#FFFFFF'
  			},
  			border: 'rgba(0,0,0,0.1)',
  			input: 'rgba(0,0,0,0.1)',
  			ring: '#2DBE60',
  			chart: {
  				'1': '#2DBE60',
  				'2': '#F58220',
  				'3': '#1A1A1A',
  				'4': '#EAE6DF',
  				'5': '#E9EEF3'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
};
export default config;
