import { createHierarchy } from "../ninjaData/processNinjaData.js";
import { prepareForFile } from "./file_operations/prepare_data_for_file.js";
import { parseFileContent } from "./file_operations/parse_data.js";
import { readFileAsText, downloadSerializedData } from "./file_operations/up_download_data.js";
import { LocalStorageAccessor } from "../localStorageAccessor.js";

export async function serialize(container, options = {}) {
  const { format = 'localStorage', fileName = null } = options;
  const classData = await createHierarchy('../ninjaData/classes.json');
  let result;

  if (format === 'localStorage') {
    LocalStorageAccessor.serializeContainer(container, classData);
    result = true;

  } else if (format === 'file') {
    result = prepareForFile(container, classData);

    if (fileName) {
      downloadSerializedData(result, fileName);
    }

  } else {
    throw new Error(`Unknown serialization format: ${format}`);
  }

  return result;
}

export async function deserialize(options = {}) {
  const { source = 'localStorage', file = null } = options;
  let result;

  if (source === 'localStorage') {
    result = await LocalStorageAccessor.deserializeContainer();

  } else if (source === 'file') {

    if (!file) {
      throw new Error('File is required for file deserialization');
    }

    const fileContent = await readFileAsText(file);

    result = await parseFileContent(file, fileContent);

  } else {
    throw new Error(`Unknown deserialization source: ${source}`);
  }

  return result;
}

export async function uploadContainer() {

  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,.txt';

    input.onchange = async (e) => {
      const file = e.target.files[0];

      if (!file) {
        return reject(new Error('No file selected'));
      }

      try {
        const containerData = await deserialize({ source: 'file', file });

        localStorage.setItem('Container', JSON.stringify(containerData));
        resolve(true);

      } catch (error) {
        reject(error);
      }
    };

    input.click();
  });
}

export async function downloadCurrentContainer() {
  const container = await deserialize();

  await serialize(container, { format: 'file', fileName: 'ninja_container' });

  return true;
}


