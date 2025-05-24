import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

// Получаем аналог __dirname для ES-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 1. Определяем имя класса из файла
const customClassPath = resolve(__dirname, '../src/models/ninjas/ExtraClass.ts');
const customClassContent = fs.readFileSync(customClassPath, 'utf-8');

// Извлекаем имя класса
const classNameMatch = customClassContent.match(/class (\w+) extends/);
if (!classNameMatch) throw new Error('Class name not found in the file!');
const className = classNameMatch[1];

// 2. Удаляем класс из ninjaFactory.ts
const ninjaFactoryPath = resolve(__dirname, '../src/models/factories/ninjaFactory.ts');
let ninjaFactoryContent = fs.readFileSync(ninjaFactoryPath, 'utf-8');

// Удаляем импорт класса
ninjaFactoryContent = ninjaFactoryContent.replace(
  new RegExp(`import\\s*{\\s*${className}\\s*}\\s*from\\s*"[^"]+";?\\n`, 'g'),
  ''
);

// Удаляем регистрацию в globalThis
ninjaFactoryContent = ninjaFactoryContent.replace(
  new RegExp(`\\(globalThis\\s+as\\s+any\\)\\.${className}\\s*=\\s*${className};\\n`, 'g'),
  ''
);

fs.writeFileSync(ninjaFactoryPath, ninjaFactoryContent);

// 3. Удаляем класс из classes.json
const classesJsonPath = resolve(__dirname, '../src/assets/ninjaData/classes.json');
const classesJson = JSON.parse(fs.readFileSync(classesJsonPath, 'utf-8'));

// Находим родителя класса
let parentClass = null;
for (const [key, value] of Object.entries(classesJson.classes)) {
  const children = value.children || [];
  if (children.includes(className)) {
    parentClass = key;
    break;
  }
}

// Удаляем класс из children родителя
if (parentClass) {
  classesJson.classes[parentClass].children = classesJson.classes[parentClass].children.filter(
    child => child !== className
  );
}

// Удаляем запись класса
delete classesJson.classes[className];

// Сохраняем обновленный JSON
fs.writeFileSync(classesJsonPath, JSON.stringify(classesJson, null, 2));

/* 4. (Опционально) Удаляем сам файл класса
try {
  fs.unlinkSync(customClassPath);
  console.log(`🗑️ File ${customClassPath.split('/').pop()} deleted.`);
} catch (err) {
  console.log(`⚠️ Could not delete file (it may have been removed already).`);
}
*/

console.log(`✅ Successfully removed ${className} from the hierarchy!`);
if (parentClass) console.log(`Parent class: ${parentClass}`);
else console.log("No parent class found (may have been already removed).");