const arr = [1, 1, 3, 3, 0, 1, 1];

function solution(arr) {
  return arr.filter((v, i) => v !== arr[i + 1]);
}

console.log(solution(arr));
