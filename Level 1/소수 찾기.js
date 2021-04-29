const n = 10;

function solution(n) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  arr[0] = 0;
  for (let i = 2; i * i <= n; i++) {
    if (arr[i - 1]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j - 1] = 0;
      }
    }
  }
  const count = arr.filter((v) => v).length;
  return count;
}

console.log(solution(n));
