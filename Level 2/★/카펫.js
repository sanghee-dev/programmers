const brown = 10;
const yellow = 2;

function solution(brown, yellow) {
  for (let w = 3; w - 2 <= yellow; w++) {
    if (yellow % (w - 2) === 0) {
      let h = yellow / (w - 2) + 2;
      if (h <= w && w * h === brown + yellow) return [w, h];
    }
  }
}

console.log(solution(brown, yellow));
