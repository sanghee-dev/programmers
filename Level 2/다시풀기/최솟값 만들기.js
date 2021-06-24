const A = [1, 4, 2];
const B = [5, 4, 4];

function solution(A, B) {
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);
  return A.reduce((acc, cur, idx) => acc + cur * B[idx], 0);
}

console.log(solution(A, B));
