const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

function solution(progresses, speeds) {
  const days = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
  let max = days[0];
  let answer = [0];
  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] > max) {
      max = days[i];
      answer[++j] = 1;
    } else {
      answer[j] += 1;
    }
  }
  return answer;
}

console.log(solution(progresses, speeds));
