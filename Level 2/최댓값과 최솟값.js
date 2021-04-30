let s = "-1 -2 -3 -4";

function solution(s) {
  s = s
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b);
  return s[0] + " " + s[s.length - 1] + "";
}

function solution(s) {
  const arr = s.split(" ");
  return Math.min(...arr) + " " + Math.max(...arr);
}

console.log(solution(s));
