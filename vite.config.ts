import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Plugin: serve Vercel-style API routes during local development
function apiMiddlewarePlugin() {
  return {
    name: 'api-middleware',
    configureServer(server: any) {
      // Load ALL env vars (including non-VITE_ prefixed) from .env.local
      dotenv.config({ path: '.env.local' });

      server.middlewares.use('/api/form-submission', async (req: any, res: any, next: any) => {
        if (req.method !== 'POST') return next();

        try {
          // 1. Collect and parse the JSON body
          let body = '';
          for await (const chunk of req) body += chunk;
          req.body = JSON.parse(body);

          // 2. Attach Vercel-like helpers to the response
          res.status = (code: number) => { res.statusCode = code; return res; };
          res.json = (data: any) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
          };

          // 3. Dynamically load and execute the handler
          const mod = await server.ssrLoadModule('/api/form-submission.ts');
          await mod.default(req, res);
        } catch (err: any) {
          console.error('Dev API middleware error:', err);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: err.message }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), apiMiddlewarePlugin()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
