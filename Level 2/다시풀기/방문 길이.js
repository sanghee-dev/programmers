const dirs = "LULLLLLLU";

function solution(dirs) {
  let x = [
    [0, 0],
    [0, 0],
  ];
  let path = [];
  for (let i = 0; i < dirs.length; i++) {
    let move = true;
    if (dirs[i] === "U" && x[1][1] !== 5) {
      x = [x[1], [x[1][0], x[1][1] + 1]];
    } else if (dirs[i] === "D" && x[1][1] !== -5) {
      x = [x[1], [x[1][0], x[1][1] - 1]];
    } else if (dirs[i] === "R" && x[1][0] !== 5) {
      x = [x[1], [x[1][0] + 1, x[1][1]]];
    } else if (dirs[i] === "L" && x[1][0] !== -5) {
      x = [x[1], [x[1][0] - 1, x[1][1]]];
    } else {
      move = false;
    }
    if (move) path.push(x);
  }
  path = path.map((v) => v.sort().join(""));
  return new Set(path).size;
}

console.log(solution(dirs));
