import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#0066FF",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#1A1A1A",
          foreground: "#A3A3A3",
        },
        accent: {
          DEFAULT: "#0A0A0A",
          foreground: "#ffffff",
        },
        border: "#262626",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-dark":
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
