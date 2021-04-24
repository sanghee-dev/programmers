const answers = [1, 2, 3, 4, 5];

function solution(answers) {
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const a1 = answers.filter((v, i) => v === p1[i % p1.length]).length;
  const a2 = answers.filter((v, i) => v === p2[i % p2.length]).length;
  const a3 = answers.filter((v, i) => v === p3[i % p3.length]).length;
  const arr = [a1, a2, a3];
  return arr
    .map((v, i) => (v === Math.max(...arr) ? i + 1 : false))
    .filter((v) => v !== false);
}

console.log(solution(answers));
