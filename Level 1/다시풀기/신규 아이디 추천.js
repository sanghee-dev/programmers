const new_id = "=.=";

function solution(new_id) {
  const id = new_id
    .toLowerCase() // 1
    .replace(/[^\w-.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .substring(0, 15)
    .replace(/\.$/g, ""); // 6
  const len = id.length;
  return len > 2 ? id : id + id.charAt(len - 1).repeat(3 - len);
}

console.log(solution(new_id));
