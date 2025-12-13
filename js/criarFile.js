const { readFile, copyFile } = require("fs");

export async function createFile(file) {
  console.log(file);
  const response = await fetch("http://localhost:3001/upload", {
    method: "POST",
    headers: {
      "x-filename": file.name,
      "Content-Type": "application/octet-stream",
    },
    body: file,
  });
  const dados = await response.json();
}
