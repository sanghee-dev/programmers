const citations = [3, 0, 6, 1, 5];

function solution(citations) {
  let count = 0;
  for (let h = 1; h <= citations.length; h++) {
    if (citations.filter((v) => v >= h).length >= h) count = h;
  }
  return count;
}

console.log(solution(citations));
