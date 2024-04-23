//36. Valid Sudoku
//https://leetcode.com/problems/valid-sudoku/description/

// solution 1
// const isValidSudoku = function (board) {
//   console.log("======================================");

//   let isValidRow = true;
//   let isValidCol = true;
//   let isValidCell = true;
//   let hashTableForCell = {};
//   for (let i = 0; i < 9; i++) {
//     let hashTableForRow = {};
//     let hashTableForCol = {};

//     for (let j = 0; j < 9; j++) {
//       //row
//       if (board[i][j] !== ".") {
//         if (hashTableForRow[board[i][j]] == undefined) {
//           hashTableForRow[board[i][j]] = 1;
//         } else {
//           console.log("invalid becuse of row", board[i]);
//           isValidRow = false;
//           return false;
//         }
//       }
//       // col
//       if (board[j][i] !== ".") {
//         if (hashTableForCol[board[j][i]] == undefined) {
//           hashTableForCol[board[j][i]] = 1;
//         } else {
//           console.log("invalid becuse of col for", i, j);
//           isValidCol = false;
//           return false;
//         }
//       }

//       // cell
//       if (board[i][j] != ".") {
//         let index = "" + Math.floor(i / 3) + "" + Math.floor(j / 3);
//         if (hashTableForCell[index] == undefined) {
//           hashTableForCell[index] = {};
//         }
//         if (hashTableForCell[index][board[i][j]] == undefined) {
//           hashTableForCell[index][board[i][j]] = 1;
//         } else {
//           console.log("invalid becuse of cell for", i, j);
//           isValidCell = false;
//           return false;
//         }
//       }
//     }
//   }

//   return isValidRow && isValidCol && isValidCell;
// };

// solution 2
const isValidSudoku = function (board) {
  let hashTableForCell = {};
  for (let i = 0; i < 9; i++) {
    let hashTableForRow = {};
    let hashTableForCol = {};

    for (let j = 0; j < 9; j++) {
      //row
      if (board[i][j] !== ".") {
        if (hashTableForRow[board[i][j]] == undefined) {
          hashTableForRow[board[i][j]] = 1;
        } else {
          console.log("invalid becuse of row", board[i]);
          return false;
        }
      }
      // col
      if (board[j][i] !== ".") {
        if (hashTableForCol[board[j][i]] == undefined) {
          hashTableForCol[board[j][i]] = 1;
        } else {
          console.log("invalid becuse of col for", i, j);
          return false;
        }
      }

      // cell
      if (board[i][j] != ".") {
        let index = "" + Math.floor(i / 3) + "" + Math.floor(j / 3);
        if (hashTableForCell[index] == undefined) {
          hashTableForCell[index] = {};
        }
        if (hashTableForCell[index][board[i][j]] == undefined) {
          hashTableForCell[index][board[i][j]] = 1;
        } else {
          console.log("invalid becuse of cell for", i, j);

          return false;
        }
      }
    }
  }

  return true;
};

const runIsValidSudoku = () => {
  // col issue
  console.log(
    isValidSudoku([
      ["8", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
  ); // false

  //   row issue
  console.log(
    isValidSudoku([
      ["8", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["5", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", "8", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
  ); // false

  // cell issue
  console.log(
    isValidSudoku([
      ["8", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "1", ".", ".", ".", ".", "6", "."],
      ["5", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", "6", ".", ".", "4"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
  ); // false

  console.log(
    isValidSudoku([
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
  ); //true
};

export default runIsValidSudoku;
