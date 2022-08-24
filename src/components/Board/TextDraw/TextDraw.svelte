<script>
</script>

<div class="textWon">
     
	<div class="heading">Draw</div>
     <button on:click={() => window.location.reload()} class="play-again-button">Play again</button>
</div>

<style>
     .play-again-button {
          text-decoration: none;
          color: #FFF;
          border-top-color: #1992da;
          border-left-color: #0c75bb;
          border-right-color: #0c75bb;
          border-bottom-color: #00589c;
          -webkit-box-shadow: inset 0 1px 1px 0 #6fc5f5;
          -moz-box-shadow: inset 0 1px 1px 0 #6fc5f5;
          box-shadow: inset 0 1px 1px 0 #6fc5f5;
          background: #117ed2;
          background: -webkit-gradient(linear,left top,left bottom,from(#37aaea),to(#117ed2));
          background: -moz-linear-gradient(top,#37aaea,#117ed2);
          background-image: -o-linear-gradient(top,#37aaea 0,#117ed2 100%);
          background-image: linear-gradient(to bottom,#37aaea 0,#117ed2 100%);
          font-size: 15px;
          padding: 7px 24px;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          -webkit-box-shadow: inset 0 1px 1px 0 white;
          -moz-box-shadow: inset 0 1px 1px 0 white;
          box-shadow: inset 0 1px 1px 0 white;
          line-height: 19px;
          display: inline-block;
          cursor: pointer;
          -webkit-font-smoothing: subpixel-antialiased;
     }

     .play-again-button:hover, .play-again-button:active {
          background: #1c5bad;
          background: -webkit-gradient(linear,left top,left bottom,from(#2488d4),to(#1c5bad));
          background: -moz-linear-gradient(top,#2488d4,#1c5bad);
          background-image: -o-linear-gradient(top,#2488d4 0,#1c5bad 100%);
          background-image: linear-gradient(to bottom,#2488d4 0,#1c5bad 100%);
          -webkit-box-shadow: inset 0 1px 1px 0 #64bef1;
          -moz-box-shadow: inset 0 1px 1px 0 #64bef1;
          box-shadow: inset 0 1px 1px 0 #64bef1;
     }
     .textWon {
          text-align: center;
     }
     .heading {
          font-size: 50px;
          font-weight: bold;
          color: black;
     }
     @media only screen and (max-width: 320px) {
          .heading {
               font-size: 30px !important;
          }
     }
</style>