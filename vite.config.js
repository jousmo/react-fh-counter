import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    reporters: ['verbose'],
    coverage: {
      all: true,
      reporter: ['text', 'html', 'lcov'],
      include: ['**/src/**/*.{js,jsx}'],
      exclude: [
        '**/src/main.{js,jsx,ts,tsx}',
        '**/*.types.{ts,tsx}',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/src/vite-env*'
      ],
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0
    }
  }
})
