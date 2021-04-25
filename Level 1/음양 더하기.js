const absolutes = [4, 7, 12];
const signs = [true, false, true];

function solution(absolutes, signs) {
  return absolutes
    .map((v, i) => v * (signs[i] ? 1 : -1))
    .reduce((prev, cur) => prev + cur);
}

console.log(solution(absolutes, signs));
