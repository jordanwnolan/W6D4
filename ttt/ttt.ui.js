(function(root){

  var TTT = root.TTT = (root.TTT || {});

  var Tile = TTT.Tile = function(id, div, game) {
    // this.tileId = id;
    this.game = game;
    this.$div = div;
    this.pos = Tile.createPair(id);
  };

  Tile.createPair = function(id) {
    var x;
    x = Math.floor(((id)/ 3) );
    y = id % 3;
    console.log([x,y]);
    return [x,y];
  };

  Tile.prototype.installTileHandler = function () {
    console.log('installTileHandler');
    this.$div.on(
      'click',
      this.tileHandler.bind(this)
    );

  };

  Tile.prototype.tileHandler = function () {
    var color = (this.game.player === 'x' ? "red" : "blue");

    if (this.game.move(this.pos)) {
      this.$div.toggleClass("tile-" + color);
      this.$div.off('click');
      if (this.game.winner()) {
        alert(color + ' Wins!');
      }
    };


  };






})(this);

$(function () {

  $("div").each(function (index, div) {
    new TTT.Tile(index, $(div), TTT).installTileHandler();
  });
});