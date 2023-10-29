import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // ref: https://github.com/vitejs/vite/issues/512#issuecomment-656547187
//   base: process.env.VITE_BASE_URL ?? "/",
// });

export default ({ _mode }) => {

  const env = loadEnv(
    'all',
    process.cwd()
  );

  

  console.log(env.VITE_BASE_URL);

  return defineConfig({
    plugins: [react()],
    // ref: https://stackoverflow.com/a/76787905
    base: env.VITE_BASE_URL ??  "/",
  });
}
