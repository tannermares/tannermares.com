const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      display: ["Kanit", ...defaultTheme.fontFamily.sans],
      body: ["Kanit", ...defaultTheme.fontFamily.sans],
      script: ['"Mr Dafoe"', "cursive"],
    },

    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      // Sky at night, top of the page
      night: "#120a2b",
      // Surfaces that sit on the night sky
      plum: "#1d1042",
      // Sky just above the horizon
      dusk: "#2b0f54",
      // Neon horizon and grid lines
      magenta: "#ff2e88",
      // Sun gradient stops
      sun: "#ffd23f",
      ember: "#ff7a3d",
      // Second neon, for status and links
      cyan: "#2de2e6",
      // Text
      haze: "#efe6ff",
      muted: "#a99bc9",
      line: "#3a2470",
    },

    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      zIndex: {
        60: "60",
        70: "70",
      },
    },
  },
  plugins: [],
};
