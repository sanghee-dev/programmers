const numbers = [1, 1, 1, 1, 1];
const target = 3;

function solution(numbers, target) {
  let answer = 0;
  const getTarget = (i, value) => {
    if (i < numbers.length) {
      getTarget(i + 1, value + numbers[i]);
      getTarget(i + 1, value - numbers[i]);
    } else if (value === target) {
      answer++;
    }
  };
  getTarget(0, 0);
  return answer;
}

console.log(solution(numbers, target));
