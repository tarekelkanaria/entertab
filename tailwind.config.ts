import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        main: {
          50: "#232530",
          100: "#252525",
          200: "#ffffff4d",
          300: "#3d3d3d",
          400: "#666666",
        },
        customSlate: {
          50: "#f9f9f9",
          100: "#fcfcfc",
          200: "#ececec",
        },
        tealSolid: {
          50: "#30e5a8",
          100: "#32f7e5",
          200: "#38bfae",
        },
        skyThin: {
          50: "#76abe9",
        },
        errorSolid: {
          50: "#cc0000",
        },
      },
      zIndex: {
        "1": "1",
        "2": "2",
      },
      backgroundImage: {
        "gradient-ar-btn": "linear-gradient(45deg, #57e0d5 0%, #2be6a2 100%);",
        "gradient-ar-hover-btn":
          "linear-gradient(to bottom, #57e0d5 0%, #2be6a2 100%)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
