import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogPagesDir = path.join(__dirname, '..', 'blog_pages');
const postsDir = path.join(__dirname, 'routes', 'posts');

if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

function deleteExcept(directory, keepFile) {
    // Resolve the full path of the file to keep
    const keepFilePath = path.resolve(directory, keepFile);

    // Read the contents of the directory
    const files = fs.readdirSync(directory);

    // Iterate over each file/directory in the directory
    files.forEach(file => {
        const filePath = path.resolve(directory, file);

        // Skip the file we want to keep
        if (filePath === keepFilePath) {
            return;
        }

        // Check if the path is a directory or a file
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            // Recursively delete the directory
            fs.rmSync(filePath, { recursive: true, force: true });
            console.log(`Deleted directory: ${filePath}`);
        } else {
            // Delete the file
            fs.unlinkSync(filePath);
            console.log(`Deleted file: ${filePath}`);
        }
    });
}

deleteExcept(postsDir, '+page.svelte');

fs.readdir(blogPagesDir, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${blogPagesDir}`, err);
    return;
  }

  const markdownFiles = files.filter(file => file.endsWith('.md'));

  markdownFiles.forEach(file => {
    const fileNameWithoutExt = path.parse(file).name;

    const newDir = path.join(postsDir, fileNameWithoutExt);
    if (!fs.existsSync(newDir)) {
      fs.mkdirSync(newDir, { recursive: true });
    }

    const fileContents = fs.readFileSync(path.join(blogPagesDir, file), 'utf-8');

    const newFilePath = path.join(newDir, '+page.md');
    fs.writeFileSync(newFilePath, fileContents, 'utf-8');

    console.log(`Created ${newFilePath}`);
  });
});
