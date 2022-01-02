/**
 * push and pop 이 더 좋다 왜냐하면
 * reindex를 할 필요가 없다!
 * shift unshift의 경우 reindex해줘야 함!
 */
const stack = [];

stack.push("google");
stack.push("happy");
stack.push("yolo");

stack.unshift("무야호");
stack.unshift("무야호1");
stack.unshift("무야호3");
stack.pop();
stack.pop();
stack.pop();

console.log(stack);
