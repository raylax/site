/** @type {import("prettier").Config} */
export default {
  trailingComma: 'none',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 120,
  bracketSpacing: true,
  endOfLine: 'lf',
  bracketSameLine: false,
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
