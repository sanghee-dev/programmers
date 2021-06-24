const a = 5;
const b = 24;

function solution(a, b) {
  const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  const count = days.slice(0, a).reduce((acc, cur) => acc + cur) + b;
  return day[count % 7];
}

console.log(solution(a, b));
