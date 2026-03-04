const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.html"],
  safelist: ["active"],
  theme: {
    fontFamily: {
      header: ['"Press Start 2P"', "monospace"],
      body: ["VT323", "monospace"],
      mono: ['"Share Tech Mono"', "monospace"],
    },

    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },

    colors: {
      transparent: "transparent",
      primary: "#00ff41",
      secondary: "#0a0a0a",
      white: "#e0e0e0",
      black: "#0a0a0a",
      yellow: "#ffb000",
      amber: "#ffb000",
      cyan: "#00ffff",
      red: "#ff0040",
      "dim-green": "#0d4f0d",
      "mid-green": "#33cc33",
      "dark-green": "#0a3a0a",
      "grey-10": "#1a1a1a",
      "grey-20": "#222222",
      "grey-30": "#2a2a2a",
      "grey-40": "#0d4f0d",
      "grey-50": "#0d0d0d",
      "grey-60": "#111111",
      "grey-70": "#0d4f0d",
      lila: "#0d4f0d",
      "hero-gradient-from": "rgba(0, 255, 65, 0.05)",
      "hero-gradient-to": "rgba(0, 0, 0, 0.95)",
      "blog-gradient-from": "#0d4f0d",
      "blog-gradient-to": "#0a0a0a",
    },

    container: {
      center: true,
      padding: "1rem",
    },

    shadows: {
      default: "0 0 10px rgba(0, 255, 65, 0.3)",
      md: "0 0 20px rgba(0, 255, 65, 0.4)",
    },

    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        42: "10.5rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        148: "37rem",
        152: "38rem",
        156: "39rem",
        160: "40rem",
        164: "41rem",
        168: "42rem",
        172: "43rem",
        176: "44rem",
        180: "45rem",
        184: "46rem",
        188: "47rem",
        190: "48rem",
        194: "49rem",
        200: "50rem",
        204: "51rem",
      },
      zIndex: {
        "-1": "-1",
        60: "60",
        70: "70",
      },
      inset: {
        "2/5": "40%",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "glow-pulse": {
          "0%, 100%": { textShadow: "0 0 5px #00ff41, 0 0 10px #00ff41" },
          "50%": { textShadow: "0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "#00ff41", boxShadow: "0 0 5px rgba(0, 255, 65, 0.3)" },
          "50%": { borderColor: "#33cc33", boxShadow: "0 0 15px rgba(0, 255, 65, 0.5)" },
        },
        scanline: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      animation: {
        flicker: "flicker 3s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "border-glow": "border-glow 2s ease-in-out infinite",
        scanline: "scanline 8s linear infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
