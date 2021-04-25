let n = 5;
let lost = [2, 4];
let reserve = [1, 3, 5];

function solution(n, lost, reserve) {
  let lostArr = lost.filter((v) => !reserve.includes(v));
  let reserveArr = reserve.filter((v) => !lost.includes(v));
  lostArr = lostArr.filter((a) => {
    const b = reserveArr.find((v) => Math.abs(v - a) === 1);
    if (!b) return true;
    reserveArr = reserveArr.filter((v) => v !== b);
  });
  return n - lostArr.length;
}

console.log(solution(n, lost, reserve));
