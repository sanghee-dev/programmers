const dartResult = "1D2S0T";

function solution(dartResult) {
  let result = [];
  let dart = 0;
  for (let i = 0; i < dartResult.length; i++) {
    let str = dartResult[i];
    if (!isNaN(+str)) {
      if (dartResult[i + 1] === "0") {
        result.push(dart);
        dart = str;
      } else if (dartResult[i - 1] === "1") {
        dart += str;
        dart = +dart;
      } else {
        if (i !== 0) result.push(dart);
        dart = +str;
      }
    }
    if (str === "S") dart = Math.pow(dart, 1);
    if (str === "D") dart = Math.pow(dart, 2);
    if (str === "T") dart = Math.pow(dart, 3);
    if (str === "*") {
      dart = dart * 2;
      result[result.length - 1] = result[result.length - 1] * 2;
    }
    if (str === "#") dart = -dart;
    if (i === dartResult.length - 1) result.push(dart);
  }
  return result.reduce((acc, cur) => acc + cur);
}

console.log(solution(dartResult));
