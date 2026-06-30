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
  			background: '#F4F1EA',
  			foreground: '#1A1A1A',
  			surface: '#FFFFFF',
  			editorial: '#E7DFC8',
  			textPrimary: '#1A1A1A',
  			textSecondary: '#4A5568',
  			solar: '#F58220', // Orange
  			energy: '#2DBE60', // Green
  			card: {
  				DEFAULT: '#FFFFFF',
  				foreground: '#1A1A1A'
  			},
  			popover: {
  				DEFAULT: '#FFFFFF',
  				foreground: '#1A1A1A'
  			},
  			primary: {
  				DEFAULT: '#2DBE60',
  				foreground: '#FFFFFF'
  			},
  			secondary: {
  				DEFAULT: '#EAE6DF',
  				foreground: '#1A1A1A'
  			},
  			muted: {
  				DEFAULT: 'rgba(0,0,0,0.05)',
  				foreground: 'rgba(0,0,0,0.6)'
  			},
  			accent: {
  				DEFAULT: '#F58220',
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
