/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        "blue-10": "rgba(0,102,255,255)",
        "blue-60": "rgba(210, 232, 254, 255)",
        "blue-90": "rgba(178, 221, 254, 255)",
      },
      backgroundImage: {
        hero: "url('/hero.jpg')",
        aboutMe: "url('/aboutMe.jpg')",
        tech: "url('/tech.jpg')",
        contact: "url('/contact.jpg')",
        Seta: "url('/presentationSeta.jpg')",
        html: "url('/html.jpg')",
        css: "url('/css.png')",
        js: "url('/javascript.png')",
        jsx: "url('/react.png')",
        node: "url('/node-js.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
