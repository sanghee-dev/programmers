const brown = 24;
const yellow = 24;

function solution(brown, yellow) {
  const sum = brown + yellow;
  for (let h = 0; h <= sum / h; h++) {
    let w = sum / h;
    if (Number.isInteger(w) && (w - 2) * (h - 2) === yellow) {
      return [w, h];
    }
  }
}

console.log(solution(brown, yellow));
