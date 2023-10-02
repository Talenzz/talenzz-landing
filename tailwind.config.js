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
            brightness: {
                25: ".25",
                40: ".4",
                35: ".35",
            },
            width: {
                "1/7": "14.2857143%",
                "2/7": "28.5714286%",
                "3/7": "42.8571429%",
                "4/7": "57.1428571%",
                "5/7": "71.4285714%",
                "6/7": "85.7142857%",
                "54p": "54%",
                "24r": "24rem",
            },
            maxWidth: {
                "24r": "24rem",
            },
            fontSize: {
                "1halfxl": "1.35rem",
            }
        },
    },
    plugins: [],
};
