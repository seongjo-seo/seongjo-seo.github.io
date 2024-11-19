/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // src 폴더 내 모든 JS, JSX, TS, TSX 파일
    "./public/index.html", // 필요시 HTML 파일 포함
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px", // Extra small screens (작은 모바일)
        sm: "600px", // Small screens
        md: "900px", // Medium screens (태블릿)
        lg: "1200px", // Large screens (작은 데스크톱)
        xl: "1440px", // Extra large screens (큰 데스크톱)
      },
    },
  },
  plugins: [],
};
