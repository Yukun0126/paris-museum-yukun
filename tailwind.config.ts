import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4EFE6",
        "background-soft": "#ECE3D6",
        paper: "#FBF7EF",
        "paper-deep": "#E7DAC8",
        ink: "#24201B",
        muted: "#756A5D",
        gold: "#B89B5E",
        "gold-soft": "#D8C69A",
        terracotta: "#A65F46",
        stone: "#B8AEA0",
        line: "#D8CDBC",
        stonepaper: "#F4EFE6",
        louvre: "#A65F46",
        verdigris: "#7B604A"
      },
      boxShadow: {
        soft: "0 22px 70px rgba(58, 45, 32, 0.12)",
        card: "0 16px 42px rgba(58, 45, 32, 0.08)",
        button: "0 12px 28px rgba(36, 32, 27, 0.16)"
      },
      borderRadius: {
        booklet: "24px",
        image: "28px"
      }
    }
  },
  plugins: []
};

export default config;
