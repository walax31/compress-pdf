import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          600: "#95ABB5",
          700: "#585858",
          800: "#232323",
          900: "#000000",
        },
        primary: {
          200: "#EFF6FF",
          400: "#73B2FF",
          500: "#4A94EE",
          600: "#327FDE",
          700: "#69829E",
        },
        secondary: {
          500: "#F9B66D",
          600: "#E0923D",
        },
        error: {
          600: "#FF7272",
        },
        extra: {
          1: "#FFC700",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
