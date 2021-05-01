const n = 3;
const words = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];

function solution(n, words) {
  let errorIdx = -1;
  for (let i = 0; i < words.length; i++) {
    if (
      words.slice(0, i).indexOf(words[i]) > -1 ||
      (i > 0 && words[i - 1].slice(-1) !== words[i][0].slice(0, 1))
    ) {
      errorIdx = i;
      break;
    }
  }
  if (errorIdx === -1) return [0, 0];
  const person = (errorIdx + 1) % n === 0 ? n : (errorIdx + 1) % n;
  const count = Math.ceil((errorIdx + 1) / n);
  return [person, count];
}

console.log(solution(n, words));
