import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "jsdom", //Virtuliza el DOM para pruebs
    globals: true, //Nos disponibiliza de manera global ciertos matches
    setupFiles: ["./src/setupTest.ts"], //Archivo de configuración de pruebas
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@services': path.resolve(__dirname, './src/services'),
      '@context': path.resolve(__dirname, './src/context'),
    },
  },
});