export class Queue<T> {
    container: T[] = [];
    constructor() {
    }
    enqueue(data: T) {
        this.container.push(data);
    }
    dequeue(): T {
        return this.container.shift();
    }
    size():number {
        return this.container.length;
    }
}