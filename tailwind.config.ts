import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      script: ['var(--script)'],
      display: ['var(--display)'],
      body: ['var(--body)'],
      mono: ['var(--mono)'],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
