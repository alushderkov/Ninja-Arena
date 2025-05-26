import { NinjaComponent } from "./NinjaComponent";
import { NinjaIterator } from "../iterator/NinjaIterator";
import { Ninja } from "./Ninja";

export class NinjaGroup implements NinjaComponent {
  children: NinjaComponent[] = [];
  parent: NinjaGroup | null = null;

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

    const iterator = this.getIterator();
    let result = iterator.next();

    while (!result.done) {
      const child = result.value;
      const isLast = 'isLast' in iterator ?
        (iterator as any).isLast() : false;
      const childPrefix = isLast ? '└── ' : '├── ';

      if (child instanceof Ninja) {
        console.log(`${indentStr}${childPrefix}Ниндзя: ${child.name}, Оружие: ${child.weapon} [Ур. ${level}]`);

      } else if (child instanceof NinjaGroup) {
        child.display(indent + 4);
      }

      result = iterator.next();
    }
  }

  getIterator(): NinjaIterator {
    return new NinjaIterator(this.children);
  }

  getWeapons(): Set<string> {
    const weapons = new Set<string>();
    const iterator = this.getIterator();
    let result = iterator.next();

    while (!result.done) {
      const child = result.value;
      const childWeapons = child.getWeapons();

      childWeapons.forEach(weapon => weapons.add(weapon));

      result = iterator.next();
    }

    return weapons;
  }
}