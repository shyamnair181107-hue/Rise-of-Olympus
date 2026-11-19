/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olympus: {
          midnight: "#080D1B",      // Primary background
          secondary: "#10182B",     // Secondary background
          deepNavy: "#111E38",      // Deep navy
          imperialGold: "#D4AF62",  // Imperial gold
          antiqueGold: "#A77B32",   // Antique gold
          lightGold: "#F5E6BE",     // Sunlit gold highlight
          marbleWhite: "#F4F0E7",   // Marble white
          celestialBlue: "#6BA7E8", // Celestial blue
          cloudGrey: "#C8CBD3",     // Cloud grey
          bronze: "#8C6228",        // Ancient bronze
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        'cinzel-dec': ['"Cinzel Decorative"', 'Cinzel', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFF4D0 0%, #D4AF62 50%, #A77B32 100%)',
        'burnished-gold': 'linear-gradient(180deg, #F5E6BE 0%, #D4AF62 40%, #8C6228 100%)',
        'gold-radial': 'radial-gradient(circle at center, rgba(212,175,98,0.28) 0%, transparent 70%)',
        'celestial-radial': 'radial-gradient(circle at center, rgba(107,167,232,0.22) 0%, transparent 70%)',
        'temple-dark': 'linear-gradient(180deg, rgba(8, 13, 27, 0.4) 0%, rgba(16, 24, 43, 0.95) 100%)',
        'marble-dark': 'linear-gradient(145deg, #10182B 0%, #080D1B 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 98, 0.35)',
        'gold-glow-lg': '0 0 55px rgba(212, 175, 98, 0.55)',
        'celestial-glow': '0 0 35px rgba(107, 167, 232, 0.45)',
        'pedestal': '0 20px 50px -10px rgba(0, 0, 0, 0.9), 0 0 30px rgba(212, 175, 98, 0.2)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatRev 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'lightning': 'lightningFlash 8s infinite ease-in-out',
        'cloud-drift': 'cloudDrift 45s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.95' },
        },
        cloudDrift: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        lightningFlash: {
          '0%, 93%, 95%, 97%, 100%': { opacity: '0' },
          '94%': { opacity: '0.9' },
          '96%': { opacity: '0.65' },
        }
      }
    },
  },
  plugins: [],
}
