/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: "#CBD6AE",
        primary2: "#EBECCC",
        primary3: "#FCFBDD",
        primary4: "#FCEDCE",
        primary5: "#DCC4A2",
      },
    },
  },
};
