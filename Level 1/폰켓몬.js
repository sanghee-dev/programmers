const nums = [3, 1, 2, 3];

function solution(nums) {
  const count = Math.floor(nums.length / 2);
  const uniqueArr = [...new Set(array)];
  return uniqueArr.length > count ? count : uniqueArr.length;
}

console.log(solution(nums));
