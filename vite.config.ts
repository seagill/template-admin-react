import { UserConfigExport, ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { viteMockServe } from 'vite-plugin-mock';

export default ({ command }: ConfigEnv): UserConfigExport => ({
  plugins: [
    react(),
    viteMockServe({
      mockPath: 'mock',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${path.resolve(__dirname, 'src/styles/variables.less')}";`,
      },
    },
  },
});
