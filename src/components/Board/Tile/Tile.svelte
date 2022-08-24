<script>
     export let currentTileForegroundImageSource;
     export let currentTileAltText;
     export let currentTileClassName;
     export let darken = "no";
</script>

<div on:click class="tile {currentTileClassName} {darken=="yes"? "dark" : ""}">
	<img class="tile-image" src={currentTileForegroundImageSource} alt={currentTileAltText}>
</div>

<style>
	.tile {
          aspect-ratio: 1;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
     }
     .dark {
        filter: brightness(0.5);  
     }
     .nomoves {
          border: 1px rgba(0, 0, 0, 0.5) solid;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.7);
          background-color: rgba(0, 0, 0, 0.5);
     }
     .played {
          border: 1px #555 solid;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
          background-image: linear-gradient(170deg, #fff, rgb(248, 248, 248) 50%, rgb(239, 239, 239) 50.1%, #e9e9e9);
     }
     .tile-image {
          width: 90%;
          aspect-ratio: 1;
     }
     .refTile {
          width: 100px;
          transform: rotate(-10deg);
          margin: 0 auto;
     }
     @media only screen and (max-width: 320px) {
          .refTile {
               width: 70px !important;
          }
     }
</style>