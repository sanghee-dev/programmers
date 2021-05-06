const cacheSize = 0;
let cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"];

function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;
  let time = 0;
  let cache = new Array(cacheSize);
  cities = cities.map((v) => v.toUpperCase());
  for (let i = 0; i < cities.length; i++) {
    let data = cities[i];
    if (cache.includes(data)) {
      cache.splice(cache.indexOf(data), 1);
      cache.push(data);
      time += 1;
    } else {
      cache.shift();
      cache.push(data);
      time += 5;
    }
  }
  return time;
}

console.log(solution(cacheSize, cities));
