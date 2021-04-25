const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  let count = 0;
  const stack = [];
  for (let i = 0; i < moves.length; i++) {
    const now = moves[i] - 1; // 0
    for (let j = 0; j < board.length; j++) {
      if (board[j][now] !== 0) {
        if (stack[stack.length - 1] === board[j][now]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(board[j][now]);
        }
        board[j][now] = 0;
        break;
      }
    }
  }
  return count;
}

console.log(solution(board, moves));
