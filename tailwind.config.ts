const { nextui } = require('@nextui-org/react');

import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {},
        },
    },
    darkMode: 'class',
    plugins: [nextui({
        // DOCS: https://nextui.org/docs/customization/layout
        prefix: 'next-basis',
        defaultTheme: 'dark',
        defaultExtendTheme: 'dark',
        layout: {
            fontSize: {},
            lineHeight: {},
        },
        themes: {
            light: {},
            dark: {}
        }
    })],
}
export default config
