let s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";

function solution(s) {
  s = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]")).sort(
    (a, b) => a.length - b.length
  );
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    let num =
      i === 0 ? s[i][0] : s[i].filter((el) => !s[i - 1].includes(el))[0];
    answer.push(num);
  }
  return answer;
}

function solution(s) {
  return JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"))
    .sort((a, b) => a.length - b.length)
    .reduce((acc, cur, idx) => {
      if (idx) {
        let num = cur.filter((v) => !acc.includes(v));
        return acc.concat(num);
      }
      return cur;
    }, []);
}

console.log(solution(s));
