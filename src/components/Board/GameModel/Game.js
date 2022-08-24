class Game {
     constructor () {
          this.winner = "";
          this.board = [
               ["null", "null", "null"],
               ["null", "null", "null"],
               ["null", "null", "null"]
          ];
          this.finished = 0;
          this.draw = 0;
          this.winningPieces = [];
     } 

     playMove(piece, locX, locY) {
          if (this.board[locX][locY]!== "null" || this.finished) return false
          this.board[locX][locY] = piece;
          this.board = this.board;

          var hasWon = this.checkForWins();
          console.log(hasWon);
          if (hasWon) {
               this.finished = 1;
          }
          return true;
     }

     checkForWins() {
          const matches = [
               [[0, 0], [0, 1], [0, 2]],
               [[1, 0], [1, 1], [1, 2]],
               [[2, 0], [2, 1], [2, 2]],

               [[0, 0], [1, 0], [2, 0]],
               [[0, 1], [1, 1], [2, 1]],
               [[0, 2], [1, 2], [2, 2]],

               [[0, 0], [1, 1], [2, 2]],
               [[2, 0], [1, 1], [0, 2]]
          ]
          var hasWon = false;
          matches.forEach(matchTriplet => {
               if (
                    this.board[matchTriplet[0][0]][matchTriplet[0][1]] ==
                    this.board[matchTriplet[1][0]][matchTriplet[1][1]] &&
                    this.board[matchTriplet[1][0]][matchTriplet[1][1]] ==
                    this.board[matchTriplet[2][0]][matchTriplet[2][1]] &&
                    this.board[matchTriplet[2][0]][matchTriplet[2][1]] !== "null"
               ) {hasWon = true; this.winningPieces = matchTriplet}
          });

          if (!hasWon && this.boardIsFinished()) {this.draw = 1; this.finished = 1; console.log("d")}

          return hasWon;
     }
     boardIsFinished() {
          var isFinished = true;

          this.board.forEach(row => {
               row.forEach(cell => {
                    console.log(cell)
                    if (cell == "null") isFinished = false;
               });
               
          });

          return isFinished; 
     }
}

export default Game;