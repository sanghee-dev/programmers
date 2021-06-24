let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

function solution(record) {
  record = record.map((v) => v.split(" "));
  let database = {};
  for (let i = 0; i < record.length; i++) {
    if (record[i][2]) database[record[i][1]] = record[i][2];
  }
  const result = record
    .filter((v) => v[0] !== "Change")
    .map((v) => {
      if (v[0] === "Enter") return `${database[v[1]]}님이 들어왔습니다.`;
      if (v[0] === "Leave") return `${database[v[1]]}님이 나갔습니다.`;
    });
  return result;
}

console.log(solution(record));
