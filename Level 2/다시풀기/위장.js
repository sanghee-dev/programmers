const clothes = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

function solution(clothes) {
  const arr = clothes.reduce((acc, cur) => {
    acc[cur[1]] = acc[cur[1]] ? acc[cur[1]] + 1 : 1;
    return acc;
  }, {});
  return Object.values(arr).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}

console.log(solution(clothes));
