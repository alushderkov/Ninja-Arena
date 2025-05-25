import { NinjaGroup } from "../composite/NinjaGroup";
import { Ninja } from "../composite/Ninja";

export class NinjaBuilder {
  private root?: NinjaGroup;
  private currentGroup?: NinjaGroup;

  createGroup(name: string): NinjaBuilder {
    this.root = new NinjaGroup(name);
    this.currentGroup = this.root;
    return this;
  }

  addNinja(name: string, weapon: string): NinjaBuilder {
    if (!this.currentGroup) {
      throw new Error("Сначала создайте группу");
    }
    this.currentGroup.add(new Ninja(name, weapon));
    return this;
  }

  addSubgroup(name: string): NinjaBuilder {
    if (!this.currentGroup) {
      throw new Error("Сначала создайте группу");
    }
    const subgroup = new NinjaGroup(name);
    this.currentGroup.add(subgroup);
    this.currentGroup = subgroup; // Переходим в подгруппу
    return this;
  }

  up(): NinjaBuilder {
    if (this.currentGroup && this.currentGroup !== this.root) {
      // Находим родительскую группу (требует доработки NinjaGroup)
      this.currentGroup = this.findParent(this.root!, this.currentGroup);
    }
    return this;
  }

  private findParent(root: NinjaGroup, target: NinjaGroup): NinjaGroup | undefined {
    for (const child of root.children) {
      if (child === target) return root;
      if (child instanceof NinjaGroup) {
        const found = this.findParent(child, target);
        if (found) return found;
      }
    }
    return undefined;
  }

  build(): NinjaGroup {
    if (!this.root) {
      throw new Error("Нечего строить");
    }
    return this.root;
  }
}