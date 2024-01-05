import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Font Size
      fontSize: {
        "gc-heading": "32px",

        "gc-sub-heading": "24px",

        "gc-body-1": "20px",
        "gc-body-2": "16px",
        "gc-body-3": "14px",
        "gc-body-4": "12px",
        "gc-body-5": "10px",
      },
      // Line Height
      lineHeight: {
        "gc-heading": "48px",
        "gc-sub-heading": "36px",
        "gc-body-1": "30px",
        "gc-body-2": "20px",
        "gc-body-3": "16px",
        "gc-body-4": "18px",
        "gc-body-5": "14px",
      },
      // Letter Spacing
      letterSpacing: {
        "gc-heading": "0.32px",

        "gc-sub-heading-regular": "0px",
        "gc-sub-heading-medium": "0.48px",
        "gc-sub-heading-bold": "0px",

        "gc-body-1-regular": "0px",
        "gc-body-1-medium": "0px",
        "gc-body-1-bold": "0.2px",

        "gc-body-2-regular": "-0.16px",
        "gc-body-2-medium": "0px",
        "gc-body-2-bold": "0.16px",

        "gc-body-3-regular": "0px",
        "gc-body-3-medium": "0.7px",
        "gc-body-3-bold": "0.14px",

        "gc-body-4-regular": "0px",
        "gc-body-4-medium": "0px",
        "gc-body-4-bold": "0.12px",

        "gc-body-5-regular": "0px",
        "gc-body-5-medium": "0.5px",
        "gc-body-5-bold": "0.1px",
      },
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--color-secondary-primary) / <alpha-value>)",
          surface: "rgb(var(--color-secondary-surface) / <alpha-value>)",
          border: "rgb(var(--color-secondary-border) / <alpha-value>)",
          hover: "rgb(var(--color-secondary-hover) / <alpha-value>)",
          pressed: "rgb(var(--color-secondary-pressed) / <alpha-value>)",
        },
        neutral: {
          100: "rgb(var(--color-neutral-100) / <alpha-value>)",
          200: "rgb(var(--color-neutral-200) / <alpha-value>)",
          300: "rgb(var(--color-neutral-300) / <alpha-value>)",
          400: "rgb(var(--color-neutral-400) / <alpha-value>)",
          500: "rgb(var(--color-neutral-500) / <alpha-value>)",
          600: "rgb(var(--color-neutral-600) / <alpha-value>)",
          700: "rgb(var(--color-neutral-700) / <alpha-value>)",
          800: "rgb(var(--color-neutral-800) / <alpha-value>)",
          900: "rgb(var(--color-neutral-900) / <alpha-value>)",
          1000: "rgb(var(--color-neutral-1000) / <alpha-value>)",
        },
        // END PRIMARY

        // STATE COLOR
        info: {
          DEFAULT: "rgb(var(--color-info-primary) / <alpha-value>)",
          surface: "rgb(var(--color-info-surface) / <alpha-value>)",
          border: "rgb(var(--color-info-border) / <alpha-value>)",
          hover: "rgb(var(--color-info-hover) / <alpha-value>)",
          pressed: "rgb(var(--color-info-pressed) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "rgb(var(--color-warning-primary) / <alpha-value>)",
          surface: "rgb(var(--color-warning-surface) / <alpha-value>)",
          border: "rgb(var(--color-warning-border) / <alpha-value>)",
          hover: "rgb(var(--color-warning-hover) / <alpha-value>)",
          pressed: "rgb(var(--color-warning-pressed) / <alpha-value>)",
        },
        success: {
          DEFAULT: "rgb(var(--color-success-primary) / <alpha-value>)",
          surface: "rgb(var(--color-success-surface) / <alpha-value>)",
          border: "rgb(var(--color-success-border) / <alpha-value>)",
          hover: "rgb(var(--color-success-hover) / <alpha-value>)",
          pressed: "rgb(var(--color-success-pressed) / <alpha-value>)",
        },
        danger: {
          DEFAULT: "rgb(var(--color-danger-primary) / <alpha-value>)",
          surface: "rgb(var(--color-danger-surface) / <alpha-value>)",
          border: "rgb(var(--color-danger-border) / <alpha-value>)",
          hover: "rgb(var(--color-danger-hover) / <alpha-value>)",
          pressed: "rgb(var(--color-danger-pressed) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ":root": {
          // Primary
          "--color-primary": "1 115 186",

          // Secondary
          "--color-secondary-primary": "245 157 7",
          "--color-secondary-hover": "204 131 6",
          "--color-secondary-surface": "255 245 230",
          "--color-secondary-border": "252 206 126",
          "--color-secondary-pressed": "123 79 4",

          // Neutral
          "--color-neutral-100": "255 255 255",
          "--color-neutral-200": "250 250 250",
          "--color-neutral-300": "237 237 237",
          "--color-neutral-400": "224 226 229",
          "--color-neutral-500": "194 194 194",
          "--color-neutral-600": "158 158 158",
          "--color-neutral-700": "117 117 117",
          "--color-neutral-800": "97 97 97",
          "--color-neutral-900": "65 60 60",
          "--color-neutral-1000": "18 25 38",

          // Info
          "--color-info-primary": "57 127 232",
          "--color-info-hover": "36 93 178",
          "--color-info-surface": "242 247 255",
          "--color-info-border": "123 170 240",
          "--color-info-pressed": "28 63 116",

          // Warning
          "--color-warning-primary": "233 163 80",
          "--color-warning-hover": "193 157 53",
          "--color-warning-surface": "255 252 241",
          "--color-warning-border": "254 231 164",
          "--color-warning-pressed": "122 94 13",

          // Success
          "--color-success-primary": "25 185 25",
          "--color-success-hover": "22 151 22",
          "--color-success-surface": "235 255 241",
          "--color-success-border": "142 229 142",
          "--color-success-pressed": "38 100 38",

          // Danger
          "--color-danger-primary": "220 53 53",
          "--color-danger-hover": "226 87 87",
          "--color-danger-surface": "255 235 235",
          "--color-danger-border": "183 44 44",
          "--color-danger-pressed": "110 27 27",
        },
      });
    }),
  ],
}
export default config
