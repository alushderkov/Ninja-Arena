import { ensureFileExtension } from "./check_data.js";

export function readFileAsText(file) {

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => resolve(event.target.result);
    reader.onerror = () => reject(new Error("Error reading file"));

    reader.readAsText(file);
  });
}

export function downloadSerializedData(data, fileName) {
  const jsonData = JSON.stringify(data, null, 2);

  createDownloadLink(jsonData, ensureFileExtension(fileName, '.json'), 'application/json');

  let txtData = '';

  data.forEach(item => {
    txtData += `Type: ${item.type}\n`;
    Object.entries(item.data).forEach(([key, value]) => {
      txtData += `${key}: ${value}\n`;
    });
    txtData += '\n';
  });

  createDownloadLink(txtData, ensureFileExtension(fileName, '.txt'), 'text/plain');
}

function createDownloadLink(content, fileName, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}