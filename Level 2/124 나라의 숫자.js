let n = 10;

function solution(n) {
  const arr = [1, 2, 4];
  let answer = "";
  while (n) {
    answer = arr[(n - 1) % 3] + answer;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }
  return answer;
}

console.log(solution(n));
