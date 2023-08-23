/* Copyright (C), 2023-2024, Sara Echeverria (bl33h)
     @author Sara Echeverria
     FileName: vite.config.js
     @version: I
     Creation: 07/05/2023
     Last modification: 09/05/2023 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  test: {
    setupFiles: './src/setupTests.js',
    globals: true,
    environment: 'jsdom'
  }
})
