<script>
	export let toPlay;
     import Tile from '../Tile/Tile.svelte';
     import resources from '../../res.json';
</script>

<div class="textToPlay">
	<div class="heading">Playing</div>
     <Tile
     currentTileForegroundImageSource={resources[toPlay].tileForegroundImageSource}
     currentTileAltText={resources[toPlay].tileAltText}
     currentTileClassName={resources[toPlay].tileClassName + " refTile"}/> 
</div>

<style>
     .textToPlay {
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