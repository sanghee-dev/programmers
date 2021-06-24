const n = 5;

function solution(n) {
  if (n < 2) return n;
  return ((solution(n - 1) % 1234567) + (solution(n - 2) % 1234567)) % 1234567;
}

function solution(n) {
  let x = 0;
  let y = 1;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i < 2) continue;
    sum = (x + y) % 1234567;
    x = y % 1234567;
    y = sum % 1234567;
  }
  return sum;
}

console.log(solution(n));
