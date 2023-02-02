/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        // aquaLight
        blueLight1: "#EBF7FE",
        blueLight2: "#CBE3EF",
        blueLight3: "#cee1f3",
        blueLight4: "#a3cbe5",
        // aquaBright
        blueBright4: "#187598",
        blueBright3: "#1B7EA2",
        blueBright2: "#34A7BE",
        blueBright1: "#82C2E6",
        /* blueDark */
        blueDark4: "#13547a",
        blueDark3: "#172740",
        blueDark2: "#012233",
        blueDark1: "#051A28",
        /* aquaLight */
        aquaLight1: "#E1F6F7",
        aquaLight2: "#bed9dd",
        aquaLight3: "#aecfd0",
        aquaLight4: "#74b4b3",
        /* aquaBright */
        aquaBright1: "#99f6e4",
        aquaBright2: "#78dcca",
        aquaBright3: "#55D8CD",
        aquaBright4: "#4DC5B8",
        /* aquaDark */

        aquaDark4: "#3bb6bf",
        aquaDark3: "#3c979f",
        aquaDark2: "#164E63",
        aquaDark1: "#073d52",
        // cream
        // white
        whiteAqua:"#deebec",
        whiteBlue:"#E1EFF5",
      },
      fontFamily: {
        AmsterdamOne: "AmsterdamOne",
        GreatVibes: `'Great Vibes', cursive;`,
      },
    },
    screens: {
      phone: { min: "1px", max: "550px" },
      tablet: { min: "550px", max: "1080px" },
      laptop: { min: "1081px", max: "1920px" },
      desktop: { min: "1921px" },
    },
  },
  plugins: [],
};
