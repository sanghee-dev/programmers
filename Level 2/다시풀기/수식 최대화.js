let expression = "100-200*300-500+20";

function solution(expression) {
  const orders = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];
  let result = [];
  for (let i = 0; i < 6; i++) {
    let operators = expression.match(/[^0-9]/g);
    let numbers = expression.split(/[^0-9]/).map((v) => +v);
    let operatorIdx = 0;
    while (operators.length > 0) {
      let sign = orders[i][operatorIdx];
      let idx = operators.indexOf(sign);
      if (idx === -1) {
        operatorIdx++;
      } else {
        let result = eval(numbers[idx] + sign + numbers[idx + 1]);
        operators.splice(idx, 1);
        numbers.splice(idx, 1);
        numbers[idx] = result;
      }
    }
    result.push(Math.abs(numbers[0]));
  }
  return Math.max(...result);
}

console.log(solution(expression));
