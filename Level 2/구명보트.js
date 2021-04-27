let people = [70, 80, 50];
const limit = 100;

function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);
  let from = 0;
  let to = people.length - 1;
  while (from < to) {
    let sum = people[from] + people[to];
    if (sum > limit) {
      from++;
    } else {
      from++;
      to--;
    }
    answer++;
  }
  if (from == to) answer++;
  return answer;
}

console.log(solution(people, limit));
