const fs = require("fs");
const path = require("path");

const srcDir = "C:\\Users\\Developer\\Downloads\\ongoing_projects";
const publicDir = "c:\\workspace\\akn\\public";
const ongoingImagesDir = path.join(publicDir, "images", "ongoing_projects");
const ongoingVideosDir = path.join(publicDir, "videos", "ongoing_projects");
const projectsDir = path.join(publicDir, "images", "projects");
const videosDir = path.join(publicDir, "videos");

// Ensure target directories exist
fs.mkdirSync(ongoingImagesDir, { recursive: true });
fs.mkdirSync(ongoingVideosDir, { recursive: true });
fs.mkdirSync(projectsDir, { recursive: true });
fs.mkdirSync(videosDir, { recursive: true });

if (!fs.existsSync(srcDir)) {
  console.error("Source directory does not exist:", srcDir);
  process.exit(1);
}

const files = fs.readdirSync(srcDir);

let imgCount = 0;
let vidCount = 0;

files.forEach((file) => {
  const srcPath = path.join(srcDir, file);
  const ext = path.extname(file).toLowerCase();

  if (ext === ".jpeg" || ext === ".jpg" || ext === ".png") {
    imgCount++;
    const numStr = String(imgCount).padStart(2, "0");
    const destName = `ongoing-site-${numStr}${ext}`;
    const destPath = path.join(ongoingImagesDir, destName);
    fs.copyFileSync(srcPath, destPath);

    // Also mirror to main project images for portfolio
    const mirrorPath = path.join(projectsDir, `akn-ongoing-${numStr}${ext}`);
    fs.copyFileSync(srcPath, mirrorPath);

    console.log(`Copied image: ${file} -> ${destName}`);
  } else if (ext === ".mp4") {
    vidCount++;
    const numStr = String(vidCount).padStart(2, "0");
    const destName = `ongoing-site-video-${numStr}${ext}`;
    const destPath = path.join(ongoingVideosDir, destName);
    fs.copyFileSync(srcPath, destPath);

    // Also mirror to main videos directory
    const mirrorPath = path.join(videosDir, `akn-ongoing-video-${numStr}${ext}`);
    fs.copyFileSync(srcPath, mirrorPath);

    console.log(`Copied video: ${file} -> ${destName}`);
  }
});

console.log(`\nSuccessfully processed ${imgCount} ongoing project images and ${vidCount} site videos.`);
