/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        screens: {
            mobile: { max: '375px' }
        },
        extend: {
            inset: {},
            backgroundImage: {
                backgroundLogo: "url('./backgroundlogo.png')"
            },
            boxShadow: {
                '3xl': 'inset 0px -1px 0px #DDDEE5, inset 0px 1px 0px #DDDEE5'
            }
        },
        colors: {
            'neutral-black-lighter': '#C7C8D9',
            'primary-dark': '#2090A5',
            'neutral-white-lighter': '#FCFCFE',
            'neutral-black-default': '#555770',
            'complimentary-blue-tint': '#F3FBFD',
            'neutral-black-darker': '#1C1C28',
            'neutral-black-light': '#8E90A6',
            'neutral-black-dark': '#28293D'
        },
        fontFamily: {
            montserrat: ['Montserrat']
        },

        letterSpacing: {
            tight: '0.0313em'
        }
    },
    plugins: []
};
