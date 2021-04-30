const arr1 = [
  [2, 3, 2],
  [4, 2, 4],
  [3, 1, 4],
];
const arr2 = [
  [5, 4],
  [2, 4],
  [3, 1],
];

function solution(arr1, arr2) {
  let answer = [];
  arr1.map((v, i) => {
    let result = [];
    for (let j = 0; j < arr2[0].length; j++) {
      const sum = arr1[i].reduce(
        (acc, cur, idx) => acc + cur * arr2[idx][j],
        0
      );
      result.push(sum);
    }
    answer.push(result);
  });
  return answer;
}

function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((_, i) =>
      row.reduce((acc, cur, idx) => acc + cur * arr2[idx][i], 0)
    )
  );
}

console.log(solution(arr1, arr2));
