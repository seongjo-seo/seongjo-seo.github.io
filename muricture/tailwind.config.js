/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "350px",
      md: "634px",
      lg: "1240px",
    },
    extend: {
      backgroundColor: {
        "dark-mode": "rgba(9, 13, 31, 0.9)", // 사용자 정의 다크 모드 배경색
      },
      textColor: {
        "light-mode": "black",
        "dark-mode": "white",
      },
    },
  },
  plugins: [],
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.js"],
  },
  variants: {},
};
