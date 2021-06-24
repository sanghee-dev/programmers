const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

function solution(participant, completion) {
  const p = participant.sort();
  const c = completion.sort();
  return p.filter((v, i) => v !== c[i])[0];
}

console.log(solution(participant, completion));
