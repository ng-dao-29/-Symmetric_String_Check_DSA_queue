"use strict";
exports.__esModule = true;
var stackSymmetric_1 = require("./stackSymmetric");
var queueSymmetric_1 = require("./queueSymmetric");
var stack = new stackSymmetric_1.Stack();
var queue = new queueSymmetric_1.Queue();
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
    var a = queue.container.length;
    for (var i = 0; i <= a; i++) {
        if (stack.pop() !== queue.dequeue()) {
            return "ko \u0111\u1ED1i x\u1EE9ng";
        }
    }
    return "\u0111\u1ED1i x\u1EE9ng";
}
console.log(checkSymmetric());
