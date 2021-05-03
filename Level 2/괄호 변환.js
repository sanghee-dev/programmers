let p = "()))((()";

function solution(p) {
  let answer = "";
  let left = 0;
  let right = 0;
  let isTrue = false;
  if (p.length === 0) return "";
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") left++;
    if (p[i] === ")") right++;
    if (left > right) isTrue = true;
    if (left === right) {
      if (isTrue) {
        answer += p.slice(0, i + 1);
        answer += solution(p.slice(i + 1, p.length));
        return answer;
      } else {
        answer += "(" + solution(p.slice(i + 1, p.length)) + ")";
        for (let j = 1; j < i; j++) {
          if (p[j] === "(") answer += ")";
          if (p[j] === ")") answer += "(";
        }
        return answer;
      }
    }
  }
}

console.log(solution(p));
