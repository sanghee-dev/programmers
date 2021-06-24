const numbers = [6, 10, 2];

function solution(numbers) {
  const arr = numbers
    .sort((a, b) => {
      return (
        a.toString().repeat(12 / a.toString().length) -
        b.toString().repeat(12 / b.toString().length)
      );
    })
    .reverse();
  return parseInt(arr.join("")) === 0 ? "0" : arr.join("");
}

function solution(numbers) {
  const answer = numbers
    .map((v) => v + "")
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join("");
  return answer[0] === "0" ? "0" : answer;
}

console.log(solution(numbers));
