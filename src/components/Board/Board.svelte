<script>
     import Tile from "./Tile/Tile.svelte";
     import Game from "./GameModel/Game.js";
     import resources from '../res.json'
     import TextToPlay from "./TextToPlay/TextToPlay.svelte";
     import TextWon from "./TextWon/TextWon.svelte";
     import TextDraw from "./TextDraw/TextDraw.svelte";
     
     var currentGame = new Game();
     export let currentPiece = "x";
     function changePlayingPiece() {
          currentPiece = currentPiece == "x" ? "o" : "x";
     }
     function arrayAlreadyHasArray(arr, testArr){
          console.log(arr, testArr)
          for(var i = 0; i<arr.length; i++){
               let checker = []
               for(var j = 0; j<arr[i].length; j++){
                    if(arr[i][j] === testArr[j]){
                         checker.push(true)
                    } else {
                         checker.push(false)
                    }
               }
               if (checker.every(check => check === true)){
                    return true
               }
          }
          return false
    }
</script>

<div class="container">
     <div class="board">
          <div class="playarea">
               {#each currentGame.board as row, y}
                    {#each row as cell, x}

                         <Tile 
                         darken={(currentGame.finished && !currentGame.draw && !arrayAlreadyHasArray(currentGame.winningPieces, [x, y])) ? "yes" : "no"}
                         currentTileForegroundImageSource={resources[currentGame.board[x][y]].tileForegroundImageSource}
                         currentTileAltText={resources[currentGame.board[x][y]].tileAltText}
                         currentTileClassName={resources[currentGame.board[x][y]].tileClassName}
                         on:click={() => { if (currentGame.playMove(currentPiece, x, y)) changePlayingPiece(); 
                              /*The following "useless" reassignment, while technically useless, tells Svelte that the variable has, in fact, been updated.*/ currentGame=currentGame} } />
                    {/each}
               {/each}
          </div>
     </div>
     <div class="separator">
     </div>
     <div class="bottom-row">
          {#if (!currentGame.finished)}
               <TextToPlay toPlay={currentPiece}/>
          {:else if (currentGame.draw)}
               <TextDraw />
          {:else}
               <TextWon toPlay={currentPiece == "x" ? "o" : "x"}/>
          {/if}
     </div>
</div>


<style>
     .container {
          position: absolute;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
          
     }

     .separator {
          width: 100%;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.2));
          height: 2px;
          margin-top: 10px;
          margin-bottom: 10px;
     }
     
	.board {
          width: 400px;
          aspect-ratio: 1;
          background-image: url("data:image/svg+xml;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjY3Ij4KICA8ZGVmcz4KICAgIDxwYXRoIGlkPSJwIiBkPSJNMTksOWgyMjBNMTMsMThoMTk1TTEyLDI2aDIwMU0xOCwzM2gxNzlNNiw0MWgxODJNMTAsNTFoMTcxTTIsNjFoMjAwTTE3LDY2aDIwOCIvPgogIDwvZGVmcz4KICA8ZyBvcGFjaXR5PSIwLjEiPgogICAgPHVzZSBocmVmPSIjcCIgc3Ryb2tlPSJibGFjayIvPgogICAgPHVzZSBocmVmPSIjcCIgc3Ryb2tlPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwxKSIvPgogIDwvZz4KPC9zdmc+");
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5), inset 0 0px 16px rgba(0, 0, 0, 0.5);
          background-color: tan;
          padding: 16px;
          border-radius: 8px;
          margin: 0 auto;
     }

     .playarea {
          border: 2px solid;
          border-color: rgba(0, 0, 0, 0.2) rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.2) rgba(0, 0, 0, 0.2);
          background-color: rgba(255, 255, 255, 0.2);
          padding: 2px;
          display: grid;
          grid-gap: 5px;
          grid-template-columns: auto auto auto;
          width: -webkit-fill-available;
          aspect-ratio: 1;
     }


     @media only screen and (max-width: 600px) {
          .board {
               width: 300px !important;
          }
     }
     @media only screen and (max-width: 320px) {
          .board {
               width: 240px !important;
          }
     }
     @media only screen and (max-height: 600px) {
          .board {
               width: 240px !important;
          }
     }
     @media only screen and (max-height: 300px) {
          .container {
               top: 90% !important;
          }
     }
     
</style>