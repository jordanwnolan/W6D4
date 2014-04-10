(function(root) {

  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var View = SnakeGame.View = function ($el) {
    this.$el = $el;
    this.board = null;
  }

  View.prototype.start = function() {
    this.board = new SnakeGame.Board();
  }

})(this);