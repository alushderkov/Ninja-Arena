import { NinjaComponent } from "../composite/NinjaComponent";

export class NinjaIterator implements Iterator<NinjaComponent> {
  private position: number = 0;

  constructor(private collection: NinjaComponent[]) {}

  next(): IteratorResult<NinjaComponent> {
    if (this.position >= this.collection.length) {
      return { done: true, value: null };
    }

    const value = this.collection[this.position];
    this.position++;
    return { done: false, value };
  }
}