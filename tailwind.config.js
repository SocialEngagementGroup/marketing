/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "sans-serif"],
        display: ['"Bebas Neue"', "sans-serif"],
        outfit: ['"Outfit"', "sans-serif"],
        cormorant: ['"Cormorant Garamond"', "serif"],
      },
      colors: {
        neon: "#BEEB9F",
        "neon-dark": "#A8D98A",
        dark: "#0a0a0a",
        brand: {
          black: "#000000",
          brick: "#975554",
          beige: "#EBE0D8",
          forest: "#2D3E1F",
          "beige-light": "#F9F7F2",
          white: "#FFFFFF",
          gray: "#F5F5F3",
          lime: "#BEEB9F",
          purple: "#9067C6",
          offwhite: "#F5F5F5",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        neon: "0 0 20px rgba(212, 255, 0, 0.3)",
        "neon-strong": "0 0 30px rgba(212, 255, 0, 0.5)",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "marquee-reverse": "marquee-reverse 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 3s",
        "spin-slow": "spin 20s linear infinite",
        wave: "wave 8s ease-in-out infinite",
        "scroll-dot": "scrollDot 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        wave: {
          "0%, 100%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(10px) translateY(-5px)" },
        },
        scrollDot: {
          "0%, 100%": { transform: "translateY(0)", opacity: 1 },
          "50%": { transform: "translateY(10px)", opacity: 0.5 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
