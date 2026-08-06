const fs = require('fs');
const path = require('path');

const srcDir = 'E:\\Jeyapandi\\AKN CONSTRUCTION\\akn-gallery';
const destImagesDir = 'c:\\workspace\\akn\\public\\assets\\images';
const destVideosDir = 'c:\\workspace\\akn\\public\\assets\\videos';

fs.mkdirSync(destImagesDir, { recursive: true });
fs.mkdirSync(destVideosDir, { recursive: true });

// Copy pics
const picsDir = path.join(srcDir, 'pics');
if (fs.existsSync(picsDir)) {
  const files = fs.readdirSync(picsDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));
  files.forEach((file, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const destFile = `project-${num}.jpg`;
    fs.copyFileSync(path.join(picsDir, file), path.join(destImagesDir, destFile));
  });
  console.log(`Copied ${files.length} project images.`);
}

// Copy root jpeg if exists
const rootFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));
rootFiles.forEach((file, idx) => {
  const destFile = `hero-showcase-${idx + 1}.jpg`;
  fs.copyFileSync(path.join(srcDir, file), path.join(destImagesDir, destFile));
});

// Copy videos
const videosDir = path.join(srcDir, 'videos');
if (fs.existsSync(videosDir)) {
  const vFiles = fs.readdirSync(videosDir).filter(f => f.endsWith('.mp4'));
  vFiles.forEach((file, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const destFile = `onsite-video-${num}.mp4`;
    fs.copyFileSync(path.join(videosDir, file), path.join(destVideosDir, destFile));
  });
  console.log(`Copied ${vFiles.length} project videos.`);
}
