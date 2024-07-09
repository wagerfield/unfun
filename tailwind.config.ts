import { fontFamily } from "tailwindcss/defaultTheme"
import type { Config } from "tailwindcss"

export default {
  content: ["src/**/*.{astro,mdx,md,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter Variable", "Inter", ...fontFamily.sans],
      mono: ["JetBrains Mono Variable", "JetBrains Mono", ...fontFamily.mono],
    },
  },
} satisfies Config
