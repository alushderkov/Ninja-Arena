function isJsonFile(file) {
  return file.name.endsWith('.json');
}

function isJsonContent(content) {
  const trimmedContent = content.trim();

  return trimmedContent.startsWith('[') && trimmedContent.endsWith(']');
}

export function shouldParseAsJson(file, content) {
  return isJsonFile(file) || isJsonContent(content);
}

export function validateNinjaObject(item) {

  if (!item.type || !item.data) {
    throw new Error("Invalid ninja object structure");
  }

  return item;
}

export function validateNinjaType(item, classData) {

  if (!classData[item.type]) {
    throw new Error(`Unknown ninja type: ${item.type}`);
  }

  return item;
}

export function ensureFileExtension(fileName, extension) {
  return fileName.endsWith(extension) ? fileName : `${fileName}${extension}`;
}