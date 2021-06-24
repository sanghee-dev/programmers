const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];

function solution(a, b) {
  return a.map((v, i) => v * b[i]).reduce((acc, cur) => acc + cur);
}

function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}

console.log(solution(a, b));
