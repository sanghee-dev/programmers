const n = 5000;

function solution(n) {
  let count = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n - 1;
      count++;
    }
  }
  return count;
}

console.log(solution(n));
