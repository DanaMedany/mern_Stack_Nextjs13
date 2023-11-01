/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#1A1A2E",
        "secondary-gray": "rgba(86, 86, 103, 0.29)",
        "home-color": "#101010",
      },
    },
  },
  plugins: [],
};
