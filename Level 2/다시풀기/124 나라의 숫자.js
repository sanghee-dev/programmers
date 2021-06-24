let n = 10;

function solution(n) {
  const arr = [4, 1, 2];
  let answer = "";
  while (n) {
    answer = arr[n % 3] + answer;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }
  return answer;
}

function solution(n) {
  let result = "";
  let rest = 0;
  while (n > 0) {
    rest = n % 3;
    n = Math.floor(n / 3);
    if (rest === 0) {
      rest = 4;
      n--;
    }
    result = rest + result;
  }
  return result;
}

console.log(solution(n));
