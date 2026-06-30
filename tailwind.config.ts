import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1F2421",
        cream: "#F7F3EC",
        spice: "#C65D3B",
        sage: "#6B8F71",
      },
    },
  },
  plugins: [],
};

export default config;
