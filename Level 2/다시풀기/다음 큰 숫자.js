let n = 78;

function solution(n) {
  let countOne = n.toString(2).match(/1/g).length;
  while (n++) {
    if (countOne === n.toString(2).match(/1/g).length) return n;
  }
}

function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length === a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}

console.log(solution(n));
