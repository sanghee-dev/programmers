const strings = ["sun", "bed", "car"];
const n = 1;

function solution(strings, n) {
  return strings
    .map((v) => [v.charAt(n), v])
    .sort()
    .map((v) => v[1]);
}

function solution(strings, n) {
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
}

console.log(solution(strings, n));
