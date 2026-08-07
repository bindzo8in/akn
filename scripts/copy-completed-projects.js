const fs = require("fs");
const path = require("path");

const srcDir = "E:\\Jeyapandi\\AKN CONSTRUCTION\\completed_projects";
const publicDir = "c:\\workspace\\akn\\public";
const completedImagesDir = path.join(publicDir, "images", "completed_projects");
const completedVideosDir = path.join(publicDir, "videos", "completed_projects");
const projectsDir = path.join(publicDir, "images", "projects");
const videosDir = path.join(publicDir, "videos");

// Ensure target directories exist
fs.mkdirSync(completedImagesDir, { recursive: true });
fs.mkdirSync(completedVideosDir, { recursive: true });
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
    const destName = `completed-project-0${imgCount}${ext}`;
    const destPath = path.join(completedImagesDir, destName);
    fs.copyFileSync(srcPath, destPath);

    // Also mirror to main project images for portfolio
    const mirrorPath = path.join(projectsDir, `akn-completed-0${imgCount}${ext}`);
    fs.copyFileSync(srcPath, mirrorPath);

    console.log(`Copied image: ${file} -> ${destName}`);
  } else if (ext === ".mp4") {
    vidCount++;
    const destName = `completed-site-video-0${vidCount}${ext}`;
    const destPath = path.join(completedVideosDir, destName);
    fs.copyFileSync(srcPath, destPath);

    // Also mirror to main videos directory
    const mirrorPath = path.join(videosDir, `akn-completed-video-0${vidCount}${ext}`);
    fs.copyFileSync(srcPath, mirrorPath);

    console.log(`Copied video: ${file} -> ${destName}`);
  }
});

console.log(`\nSuccessfully processed ${imgCount} completed project images and ${vidCount} site videos.`);
