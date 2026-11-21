import path from "node:path";
const myPath=path.join("home","user","uploads");
console.log(myPath);

console.log(path.join("uploads", "images", "photo.jpg"));

console.log(path.join("uploads", "images", "..", "documents"));

console.log(path.join("folder", ".", "file.txt"));

console.log(path.join("folder", "subfolder", "..", "file.txt"));