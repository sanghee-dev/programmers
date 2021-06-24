const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];

function solution(bridge_length, weight, truck_weights) {
  let bridge = new Array(bridge_length).fill(0);
  const weightAll = (bridge) => bridge.reduce((acc, cur) => acc + cur);
  let count = 0;
  while (truck_weights.length > 0) {
    bridge.shift();
    if (weightAll(bridge) + truck_weights[0] <= weight) {
      bridge.push(truck_weights[0]);
      truck_weights.shift();
    } else {
      bridge.push(0);
    }
    count += 1;
  }
  return count + bridge_length;
}

console.log(solution(bridge_length, weight, truck_weights));
