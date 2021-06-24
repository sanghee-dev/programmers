const numbers = "011";

function solution(numbers) {
  // 순열
  const permutation = (arr, selectNum) => {
    let result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
      const fixer = v;
      const restArr = arr.filter((_, index) => index !== idx);
      const permuationArr = permutation(restArr, selectNum - 1);
      const combineFixer = permuationArr.map((v) => [fixer, ...v]);
      result.push(...combineFixer);
    });
    return result;
  };
  let permutationArr = [];
  for (let i = 1; i <= numbers.length; i++) {
    let result = permutation(Array.from(numbers), i).map((v) => +v.join(""));
    permutationArr.push(...result);
  }

  // 중복제거
  const s = new Set(permutationArr);
  const uniqArr = Array.from(s);

  // 소수찾기
  const isPrime = (n) => {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };
  const primeArr = uniqArr.filter((v) => isPrime(v));

  return primeArr.length;
}

console.log(solution(numbers));
