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
                "d-info": "30px",
                "m-info": "50px",
            },
        },
    },
    plugins: [],
};
