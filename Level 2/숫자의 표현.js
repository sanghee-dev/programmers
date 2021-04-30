const n = 15;

function solution(n) {
  let count = 0;
  for (let i = 1; i * i < n * 2; i++) {
    if ((n * 2) % i === 0 && (i + (n * 2) / i) % 2 === 1) count++;
  }
  return count;
}

console.log(solution(n));
