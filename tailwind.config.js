/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('./src/assets/images/logo-bg.svg')",
        'service-features': "url('./src/assets/images/service-features.png')",
        'banner': "url('./src/assets/images/banner.png')",
        'faq-image': "url('./src/assets/images/faq-image.png')",
        'hero-intro': "url('./src/assets/images/hero-intro.png')",
      }
    },
  },
  plugins: [],
}