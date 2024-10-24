import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const __dirname = fileURLToPath(new URL(".", import.meta.url));

  if (command === "build") {
    console.log(command, mode);
    return {
      base: "./",
      build: {
        outDir: "dist",
        rollupOptions: {
          input: {
            main: resolve(__dirname, "index.html"),
            nested: resolve(__dirname, "nested/index.html"),
          },
        },
      },
      plugins: [react()],
    };
  } else {
    console.log(command, mode);
    return {
      plugins: [react()],
      server: {
        port: 8080,
      },
    };
  }
});
