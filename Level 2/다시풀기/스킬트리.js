const skill = "CBD";
let skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

function solution(skill, skill_trees) {
  skill_trees = skill_trees
    .map((v) => v.replace(eval(`/[^${skill}]/g`), ""))
    .filter((v) => {
      if (v === skill.slice(0, v.length)) return true;
    });
  return skill_trees.length;
}

console.log(solution(skill, skill_trees));
