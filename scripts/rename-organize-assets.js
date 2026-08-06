const fs = require('fs');
const path = require('path');

const publicDir = 'c:\\workspace\\akn\\public';
const imagesDir = path.join(publicDir, 'images');
const videosDir = path.join(publicDir, 'videos');

// Create organized directories
const dirs = [
  path.join(imagesDir, 'hero'),
  path.join(imagesDir, 'projects'),
  path.join(imagesDir, 'about'),
  path.join(imagesDir, 'services'),
  videosDir,
];

dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

const srcPics = 'E:\\Jeyapandi\\AKN CONSTRUCTION\\akn-gallery\\pics';
const srcVids = 'E:\\Jeyapandi\\AKN CONSTRUCTION\\akn-gallery\\videos';
const srcRoot = 'E:\\Jeyapandi\\AKN CONSTRUCTION\\akn-gallery';

// 1. Process and rename all images semantically
if (fs.existsSync(srcPics)) {
  const picFiles = fs.readdirSync(srcPics).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));
  
  // Categorize images into semantic files
  picFiles.forEach((file, index) => {
    const srcPath = path.join(srcPics, file);
    const num = String(index + 1).padStart(2, '0');
    
    // Save standard clean project photo
    fs.copyFileSync(srcPath, path.join(imagesDir, 'projects', `akn-project-${num}.jpg`));
    
    // Also assign key showcases
    if (index === 0) {
      fs.copyFileSync(srcPath, path.join(imagesDir, 'hero', 'hero-main-bg.jpg'));
      fs.copyFileSync(srcPath, path.join(imagesDir, 'projects', 'residential-luxury-villa.jpg'));
    } else if (index === 1) {
      fs.copyFileSync(srcPath, path.join(imagesDir, 'hero', 'hero-slide-1.jpg'));
      fs.copyFileSync(srcPath, path.join(imagesDir, 'about', 'site-engineering.jpg'));
    } else if (index === 2) {
      fs.copyFileSync(srcPath, path.join(imagesDir, 'hero', 'hero-slide-2.jpg'));
      fs.copyFileSync(srcPath, path.join(imagesDir, 'about', 'structural-framing.jpg'));
    } else if (index === 3) {
      fs.copyFileSync(srcPath, path.join(imagesDir, 'hero', 'hero-slide-3.jpg'));
      fs.copyFileSync(srcPath, path.join(imagesDir, 'projects', 'commercial-complex.jpg'));
    } else if (index === 4) {
      fs.copyFileSync(srcPath, path.join(imagesDir, 'projects', 'hospital-building.jpg'));
      fs.copyFileSync(srcPath, path.join(imagesDir, 'services', 'commercial-construction.jpg'));
    } else if (index === 5) {
      fs.copyFileSync(srcPath, path.join(imagesDir, 'projects', 'industrial-warehouse.jpg'));
      fs.copyFileSync(srcPath, path.join(imagesDir, 'services', 'industrial-peb.jpg'));
    } else if (index === 6) {
      fs.copyFileSync(srcPath, path.join(imagesDir, 'projects', 'interior-luxury-fitout.jpg'));
      fs.copyFileSync(srcPath, path.join(imagesDir, 'services', 'interior-design.jpg'));
    } else if (index === 7) {
      fs.copyFileSync(srcPath, path.join(imagesDir, 'projects', 'architectural-3d-elevation.jpg'));
      fs.copyFileSync(srcPath, path.join(imagesDir, 'services', 'architectural-planning.jpg'));
    } else if (index === 8) {
      fs.copyFileSync(srcPath, path.join(imagesDir, 'projects', 'residential-duplex.jpg'));
      fs.copyFileSync(srcPath, path.join(imagesDir, 'services', 'residential-construction.jpg'));
    } else if (index === 9) {
      fs.copyFileSync(srcPath, path.join(imagesDir, 'about', 'quality-supervision.jpg'));
    } else if (index === 10) {
      fs.copyFileSync(srcPath, path.join(imagesDir, 'about', 'foundation-casting.jpg'));
    }
  });

  console.log(`Successfully organized ${picFiles.length} photos into public/images/`);
}

// 2. Process and rename all videos semantically
if (fs.existsSync(srcVids)) {
  const vidFiles = fs.readdirSync(srcVids).filter(f => f.endsWith('.mp4'));
  const semanticVideoNames = [
    'rcc-column-beam-casting.mp4',
    'roof-slab-concreting.mp4',
    'foundation-excavation.mp4',
    'brick-masonry-execution.mp4',
    'terrace-waterproofing.mp4',
    'turnkey-finishing-walkthrough.mp4',
  ];

  vidFiles.forEach((file, index) => {
    const srcPath = path.join(srcVids, file);
    const destName = semanticVideoNames[index] || `onsite-video-${String(index + 1).padStart(2, '0')}.mp4`;
    fs.copyFileSync(srcPath, path.join(videosDir, destName));
    
    // Also provide standard indexed fallback
    fs.copyFileSync(srcPath, path.join(videosDir, `akn-video-${String(index + 1).padStart(2, '0')}.mp4`));
  });

  console.log(`Successfully organized ${vidFiles.length} videos into public/videos/`);
}

// 3. Remove raw unsanitized gallery folders if they exist
const rawGalleryDir = path.join(publicDir, 'gallery');
if (fs.existsSync(rawGalleryDir)) {
  fs.rmSync(rawGalleryDir, { recursive: true, force: true });
  console.log('Cleaned up legacy raw gallery directory.');
}

const rawAssetsDir = path.join(publicDir, 'assets');
if (fs.existsSync(rawAssetsDir)) {
  fs.rmSync(rawAssetsDir, { recursive: true, force: true });
  console.log('Cleaned up legacy assets directory.');
}
