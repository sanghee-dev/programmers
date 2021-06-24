const citations = [3, 0, 6, 1, 5];

function solution(citations) {
  const n = citations.length;
  for (let h = n; h >= 0; h--) {
    if (citations.filter((v) => v >= h).length >= h) return h;
  }
}

console.log(solution(citations));
