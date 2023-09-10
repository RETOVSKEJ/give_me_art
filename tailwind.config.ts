import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#CB2B28",
        primary: "#B7B2B2",
      },
      boxShadow: {
        custom: "inset 8px 7px 10px rgba(0,0,0,0.3);",
      },
    },
  },
  plugins: [],
};
export default config;
