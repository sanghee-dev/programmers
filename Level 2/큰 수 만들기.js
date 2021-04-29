const number = "1924";
let k = 2;

function solution(number, k) {
  let stack = [];
  for (let i = 0; i < number.length; i++) {
    let current = number[i];
    while (k > 0) {
      if (stack[stack.length - 1] < current) {
        stack.pop();
        k--;
      } else {
        break;
      }
    }
    stack.push(current);
  }
  stack.splice(stack.length - k, k);
  return stack.join("");
}

console.log(solution(number, k));
