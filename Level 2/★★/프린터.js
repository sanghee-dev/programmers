const priorities = [2, 1, 3, 2];
const location = 2;

function solution(priorities, location) {
  const list = priorities.map((v, i) => ({
    isLocation: i === location,
    priority: v,
  }));
  let count = 0;
  while (true) {
    let cur = list.shift();
    if (list.some((v) => cur.priority < v.priority)) {
      list.push(cur);
    } else {
      count++;
      if (cur.isLocation) return count;
    }
  }
}

console.log(solution(priorities, location));
