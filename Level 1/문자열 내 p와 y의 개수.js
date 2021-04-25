const s = "pPoooyY";

function solution(s) {
  return (
    s.toLowerCase().split("p").length === s.toLowerCase().split("y").length
  );
}

// 런타임에러
function solution(s) {
  return s.match(/p/gi)?.length === s.match(/y/gi)?.length;
}

console.log(solution(s));
