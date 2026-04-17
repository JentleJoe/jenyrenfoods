/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm Neutrals (Base Colors)
        cream: {
          50: '#FDF9F4',  // Lightest cream
          100: '#F8F5F0', // Primary background cream
          200: '#F5F1EC', // Soft beige
          300: '#F0EBE5', // Medium beige
          400: '#E8E1D9', // Darker beige
          500: '#DDD4C9', // Medium taupe
          600: '#C9BDB0', // Warm taupe
          700: '#B5A697', // Darker taupe
          800: '#8D6E63', // Warm taupe (text)
          900: '#6D5548', // Deep taupe
        },
        // Earth Tones (Primary Browns)
        brown: {
          50: '#F7F3F0',  // Very light brown
          100: '#EDE5DF', // Light brown
          200: '#D4C4B8', // Medium light brown
          300: '#B8A091', // Medium brown
          400: '#9C7B6A', // Medium dark brown
          500: '#5D4037', // Medium brown (headers)
          600: '#4A2C20', // Dark brown
          700: '#3D2F1F', // Rich brown (dark sections)
          800: '#2C1810', // Very dark brown
          900: '#1C0F08', // Deepest brown
        },
        // Honey-Inspired Accents (Primary Action Colors)
        honey: {
          50: '#FFF8E1',  // Very light honey
          100: '#FFECB3', // Light honey
          200: '#FFE082', // Medium light honey
          300: '#FFD54F', // Medium honey
          400: '#FFCA28', // Medium dark honey
          500: '#FFC107', // Golden yellow (primary CTA)
          600: '#FFB300', // Signature honey
          700: '#FF8F00', // Amber orange
          800: '#FF6F00', // Deep amber
          900: '#E65100', // Deepest amber
        },
        // Supporting Natural Colors
        forest: {
          50: '#E8F5E8',  // Very light green
          100: '#C8E6C8', // Light green
          200: '#A5D6A7', // Medium light green
          300: '#81C784', // Medium green
          400: '#66BB6A', // Medium dark green
          500: '#2E7D32', // Forest green (accents)
          600: '#388E3C', // Medium forest
          700: '#2E7D32', // Dark forest
          800: '#1B5E20', // Very dark forest
          900: '#0D4E11', // Deepest forest
        },
        // Soft Orange (Decorative)
        peach: {
          50: '#FFF3E0',  // Very light peach
          100: '#FFE0B2', // Soft orange (decorative)
          200: '#FFCC80', // Light peach
          300: '#FFB74D', // Medium peach
          400: '#FFA726', // Medium dark peach
          500: '#FF9800', // Orange
          600: '#FB8C00', // Dark orange
          700: '#F57C00', // Darker orange
          800: '#EF6C00', // Deep orange
          900: '#E65100', // Deepest orange
        },
        // Pure whites for contrast
        pure: {
          white: '#FFFFFF', // Pure white
          black: '#000000', // Pure black
        }
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'Inter Fallback', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}