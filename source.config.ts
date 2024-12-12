import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
// defineConfig is a must-have config here

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
});

export default defineConfig();
