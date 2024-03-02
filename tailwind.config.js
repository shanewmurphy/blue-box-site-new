/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      myblue: "#3745b6",
      mywhite: "#fcfcfc",
      myblack: "#3A3A3A",
      btnbgcolour: "#d7dae5",
      cardbggray: "#f7f7f7",
    },
    screens: {
      sm: "358px",
      md: "768px",
      laptop: "900px",
      lg: "1024px",
      xl: "1280px",
    },
    fontSize: {
      "6xl": [
        "3.75rem",
        {
          lineHeight: "3rem",
        },
      ],
      "5xl": [
        "2.6rem",
        {
          lineHeight: "3rem",
        },
      ],
      "4xl": [
        "2.25rem",
        {
          lineHeight: "2.7rem",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "2.4rem;",
        },
      ],
      "2xl": [
        "1.6rem",
        {
          lineHeight: "2rem;",
        },
      ],
      "text-xl": [
        "1.25rem",
        {
          lineHeight: "2rem;",
        },
      ],
      "text-lg": [
        "1.125rem",
        {
          lineHeight: "1.75rem;",
        },
      ],
    },
  },
  plugins: [],
};
