import { defineConfig, loadEnv } from "vite";
import { node } from "@liuli-util/vite-plugin-node";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [node()],
    define: {
      "process.env.MY_NAME": JSON.stringify(env.MY_NAME),
      "process.env.AUTH_TOKEN": JSON.stringify(env.AUTH_TOKEN),
    },
  };
});
