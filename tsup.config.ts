import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'prisma/seed.ts'
  ],
  outDir: 'dist',
  format: ['cjs'],
  clean: true,
  sourcemap: false,
});