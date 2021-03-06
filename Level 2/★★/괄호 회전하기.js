const s = "[](){}";

function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const str = s.slice(i, s.length) + s.slice(0, i);
    if (isTrue(str)) answer++;
  }
  return answer;
}

function isTrue(str) {
  let string = str;
  while (true) {
    let prevLength = string.length;
    string = string.replace("()", "").replace("{}", "").replace("[]", "");
    if (prevLength === string.length) break;
  }
  return string === "" ? true : false;
}

console.log(solution(s));
