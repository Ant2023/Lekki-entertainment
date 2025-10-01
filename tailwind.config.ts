
import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: {
    bg:"#0b0f0f", card:"#121717", ink:"#e6f7f7", muted:"#a8b3b3", teal1:"#2c7a7b", teal2:"#319795"
  }}},
  plugins: []
} satisfies Config;
