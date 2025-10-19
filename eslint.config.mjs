export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '*.d.ts',
      '*.json',
      '*.css',
      '*.md',
      '*.html',
      'package-lock.json'
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn'
    }
  }
]