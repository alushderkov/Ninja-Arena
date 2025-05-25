import { NinjaComponent } from "./NinjaComponent";
import { NinjaIterator } from "../iterator/NinjaIterator";
import { Ninja } from "./Ninja";

export class NinjaGroup implements NinjaComponent {
  children: NinjaComponent[] = [];
  private parent: NinjaGroup | null = null;

  constructor(public name: string) {}

  setParent(parent: NinjaGroup) {
    this.parent = parent;
  }

  add(component: NinjaComponent) {
    if (component instanceof NinjaGroup) {
      component.setParent(this);
    }
    this.children.push(component);
  }

  display(indent: number = 0): void {
    const indentStr = ' '.repeat(indent);
    const connector = indent > 0 ? '├── ' : '';
    const level = Math.floor(indent/4) + 1;

    console.log(`${indentStr}${connector}Группа: ${this.name} [Ур. ${level}]`);

    this.children.forEach((child, index) => {
      const isLast = index === this.children.length - 1;
      const childPrefix = isLast ? '└── ' : '├── ';

      if (child instanceof Ninja) {
        // Добавляем отображение уровня для ниндзя
        console.log(`${indentStr}${childPrefix}Ниндзя: ${child.name}, Оружие: ${child.weapon} [Ур. ${level}]`);
      } else if (child instanceof NinjaGroup) {
        child.display(indent + 4);
      }
    });
  }
  getIterator(): Iterator<NinjaComponent> {
    return new NinjaIterator(this.children);
  }
}