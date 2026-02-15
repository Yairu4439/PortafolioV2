import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distPath, 'index.html');
const notFoundHtmlPath = path.join(distPath, '404.html');

if (fs.existsSync(indexHtmlPath)) {
    fs.copyFileSync(indexHtmlPath, notFoundHtmlPath);
    console.log('404.html created successfully from index.html');
} else {
    console.error('Error: index.html not found in dist folder. Run "npm run build" first.');
    process.exit(1);
}
