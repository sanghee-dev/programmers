let s = "(())()";

function solution(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? sum++ : sum--;
    if (sum < 0) break;
  }
  return sum === 0;
}

console.log(solution(s));
