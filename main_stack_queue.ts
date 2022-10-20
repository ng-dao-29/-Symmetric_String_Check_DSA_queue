import {Stack} from "./stackSymmetric";
import {Queue} from "./queueSymmetric";

let stack = new Stack();
let queue = new Queue();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

function checkSymmetric() {
    let a = queue.container.length
    for (let i=0; i<=a; i++) {
        if (stack.pop() !== queue.dequeue()) {
            return `ko đối xứng`
        }
    }
    return `có đối xứng`
}

console.log(checkSymmetric())
