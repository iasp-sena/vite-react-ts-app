import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		open: '/',
	},
	resolve: {
		alias: [{ find: '@components', replacement: '/src/components' }],
	},
});
