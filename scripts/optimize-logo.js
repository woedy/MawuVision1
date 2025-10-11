import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../public/assets/mawu-vision-logo.png');
const outputDir = path.join(__dirname, '../public');

// Ensure output directory exists
async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function optimizeLogo() {
  try {
    await ensureDir(outputDir);
    
    // Create favicon.ico (32x32)
    await sharp(inputPath)
      .resize(32, 32)
      .toFile(path.join(outputDir, 'favicon.ico'));
    
    // Create apple-touch-icon.png (180x180)
    await sharp(inputPath)
      .resize(180, 180)
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));
    
    // Create android-chrome-192x192.png
    await sharp(inputPath)
      .resize(192, 192)
      .toFile(path.join(outputDir, 'android-chrome-192x192.png'));
    
    // Create android-chrome-512x512.png
    await sharp(inputPath)
      .resize(512, 512)
      .toFile(path.join(outputDir, 'android-chrome-512x512.png'));
    
    // For favicon.svg, we'll just copy the original if it's an SVG, or convert if not
    // For now, we'll create a simple SVG placeholder
    const svgContent = `
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#4F46E5"/>
        <text x="50%" y="50%" font-family="Arial" font-size="14" fill="white" text-anchor="middle" dy=".3em">MV</text>
      </svg>
    `.trim();
    
    await fs.writeFile(path.join(outputDir, 'favicon.svg'), svgContent);
    
    console.log('✅ Successfully generated all favicon files!');
  } catch (error) {
    console.error('❌ Error optimizing logo:', error);
    process.exit(1);
  }
}

optimizeLogo();
