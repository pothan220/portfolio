import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        serif:  ['"Instrument Serif"', 'Georgia', 'serif'],
        sans:   ['"Geist"', 'system-ui', 'sans-serif'],
        mono:   ['"Geist Mono"', 'monospace'],
      },
      colors: {
        cream:       '#f5f0e8',
        paper:       '#faf7f2',
        ink:         '#1a1814',
        'ink-soft':  '#4a4540',
        'ink-faint': '#9a9490',
        border:      '#e0d8cc',
        accent:      '#c85a2a',
      },
    },
  },
  plugins: [],
}
export default config
