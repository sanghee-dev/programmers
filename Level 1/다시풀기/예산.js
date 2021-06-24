const d = [1, 3, 2, 5, 4];
const budget = 9;

function solution(d, budget) {
  let answer = 0;
  let sum = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (budget < sum + d[i]) break;
    sum += d[i];
    answer++;
  }
  return answer;
}

console.log(solution(d, budget));
