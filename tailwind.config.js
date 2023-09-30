/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                white: "var(--white)",
                black: "var(--black)",
                body2: "var(--bodyGray)",
                salmon: "var(--salmon)",
                sky: "var(--sky)",
                icterine: "var(--icterine)",
            },
            fontFamily: {
                sans: [
                    "Epilogue",
                    "sans-serif",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            borderRadius: {
                "d-info": "4rem",
                "m-info": "3rem",
            },
        },
    },
    plugins: [],
};
