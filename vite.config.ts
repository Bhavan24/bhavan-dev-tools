import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        eslint({
            cache: false,
            include: ['src/**/*.ts', 'src/**/*.tsx'],
            exclude: ['node_modules', '.git', 'dist'],
            fix: true,
            extensions: ['.ts', '.tsx'],
        }),
        tsconfigPaths(),
        checker({
            typescript: true,
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    server: { port: 3000 },
});
