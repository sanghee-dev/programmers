const w = 8;
const h = 12;

function solution(w, h) {
  const gcd = (a, b) => {
    return a % b === 0 ? b : gcd(b, a % b);
  };
  return w * h - (w + h - gcd(w, h));
}

console.log(solution(w, h));
