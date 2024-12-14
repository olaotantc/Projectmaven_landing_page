/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",
        "content-secondary": "#545353",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      spacing: {
        hero: "calc(100vh - 71px)",
      },
    },
  },
  plugins: [],
};
