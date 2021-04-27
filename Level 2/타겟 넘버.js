const numbers = [1, 1, 1, 1, 1];
const target = 3;

function solution(numbers, target) {
  let answer = 0;
  const getAnswer = (x, value) => {
    if (x < numbers.length) {
      getAnswer(x + 1, value + numbers[x]);
      getAnswer(x + 1, value - numbers[x]);
    } else {
      if (value === target) {
        answer++;
      }
    }
  };
  getAnswer(0, 0);
  return answer;
}

console.log(solution(numbers, target));
