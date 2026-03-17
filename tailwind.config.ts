import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0f172a",
                foreground: "#f8fafc",
                primary: {
                    DEFAULT: "#2563EB", // Electric Blue
                    foreground: "#ffffff",
                },
                accent: {
                    gray: "#374151", // Slate Gray
                },
                border: "rgba(255,255,255,0.08)",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                mono: ["Roboto Mono", "monospace"],
                display: ["Bebas Neue", "sans-serif"],
            },
        },
    },
    plugins: [],
}

export default config
