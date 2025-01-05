module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "home-pattern": "url('https://res.cloudinary.com/dn8lt4rqf/image/upload/v1736059386/front-image_kfx6gl.png')",
      },
      animation: {
        "scale-once": "scaleOnce 1.5s ease-out forwards",
        "cross-rotate": "cross-rotate 8s linear infinite",
      },
      keyframes: {
        scaleOnce: {
          "0%": {
            transform: "translateX(-50%) scale(0)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0) scale(0.5)",
            opacity: "1",
          },
        },
        "cross-rotate": {
          "0%": {
            color: "#FFFFFF",
            fill: "#e7024b",
            opacity: "0.4",
            transform: "rotate(-360deg)",
          },
          "50%": {
            fill: "#19232D",
            opacity: "0.7",
          },
          "60%": {
            fill: "#e7024b",
            opacity: "1",
          },
          "100%": {
            fill: "#f88c31",
            opacity: "0.3",
            transform: "rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};