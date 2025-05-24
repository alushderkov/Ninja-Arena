import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

// Получаем аналог __dirname для ES-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 1. Анализ файла класса
const customClassFileName = 'ExtraClass.ts';
const customClassPath = resolve(__dirname, '../src/models/ninjas/', customClassFileName);

if (!fs.existsSync(customClassPath)) {
  throw new Error(`File ${customClassFileName} not found!`);
}

const customClassContent = fs.readFileSync(customClassPath, 'utf-8');

// Определяем имя класса
const classNameMatch = customClassContent.match(/class (\w+) extends/);
if (!classNameMatch) throw new Error('Class name not found in the file!');
const className = classNameMatch[1];

// Определяем родительский класс
const parentClassMatch = customClassContent.match(/extends (\w+)/);
if (!parentClassMatch) throw new Error('Parent class not found in the file!');
const parentClassName = parentClassMatch[1];

// Находим все дополнительные поля
const fieldMatches = [...customClassContent.matchAll(/(?:public|protected|private)?\s+_?(\w+)\s*:\s*(\w+)\s*;/g)];
const fields = fieldMatches.map(match => ({
  name: match[1],
  type: match[2].toLowerCase(),
}));

// 2. Обновляем ninjaFactory.ts
const ninjaFactoryPath = resolve(__dirname, '../src/models/factories/ninjaFactory.ts');
let ninjaFactoryContent = fs.readFileSync(ninjaFactoryPath, 'utf-8');

// Добавляем импорт
const importStatement = `import { ${className} } from "../ninjas/${customClassFileName.replace('.ts', '')}";\n`;
if (!ninjaFactoryContent.includes(importStatement)) {
  const lastImportIndex = ninjaFactoryContent.lastIndexOf('import');
  const insertPosition = lastImportIndex > -1
    ? ninjaFactoryContent.indexOf('\n', lastImportIndex) + 1
    : 0;
  ninjaFactoryContent = ninjaFactoryContent.slice(0, insertPosition) +
    importStatement +
    ninjaFactoryContent.slice(insertPosition);
}

// Добавляем регистрацию в globalThis
const exportIndex = ninjaFactoryContent.indexOf('export function createDynamicNinja');
const lastGlobalThis = ninjaFactoryContent.lastIndexOf('(globalThis as any)', exportIndex);
const insertGlobalAt = ninjaFactoryContent.indexOf('\n', lastGlobalThis) + 1;
const globalRegistration = `(globalThis as any).${className} = ${className};\n`;
ninjaFactoryContent = ninjaFactoryContent.slice(0, insertGlobalAt) +
  globalRegistration +
  ninjaFactoryContent.slice(insertGlobalAt);

fs.writeFileSync(ninjaFactoryPath, ninjaFactoryContent);

// 3. Обновляем classes.json
const classesJsonPath = resolve(__dirname, '../src/assets/ninjaData/classes.json');
const classesJson = JSON.parse(fs.readFileSync(classesJsonPath, 'utf-8'));

if (!classesJson.classes[parentClassName]) {
  throw new Error(`Parent class "${parentClassName}" not found in classes.json!`);
}

// Создаем запись для нового класса
const classDefinition = {
  fields: fields.map(field => ({
    name: field.name,
    type: field.type === 'number' ? 'number' : 'text',
    placeholder: field.name.replace(/_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase()),
    ...(field.type === 'number' ? { range: "from 0 to 1000" } : {}),
  })),
  children: [],
};

// Добавляем в иерархию
if (!classesJson.classes[parentClassName].children) {
  classesJson.classes[parentClassName].children = [];
}

if (!classesJson.classes[parentClassName].children.includes(className)) {
  classesJson.classes[parentClassName].children.push(className);
}

classesJson.classes[className] = classDefinition;

fs.writeFileSync(classesJsonPath, JSON.stringify(classesJson, null, 2));

console.log(`✅ Successfully added ${className} to the hierarchy!`);
console.log(`Parent: ${parentClassName}`);
console.log(`Fields: ${fields.map(f => `${f.name}:${f.type}`).join(', ')}`);