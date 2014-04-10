(function(root) {

  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Board = SnakeGame.Board = function() {
    this.snake = new SnakeGame.Snake();
    this.board = Board.generateBoard();
    this.placeSnake();
  }

  Board.DIMENSION = 20;

  Board.generateBoard = function () {
    var results = new Array(Board.DIMENSION);
    for (var i = 0; i < results.length; i++) {
      results[i] = new Array(Board.DIMENSION);
    }

    return results;
  };

  Board.prototype.placeSnake = function() {
    for (var i = 0; i < this.snake.segments.length; i++) {
      var x = this.snake.segments[i][0];
      var y = this.snake.segments[i][1];
      this.board[x][y] = "S";
    };
  };

  Board.prototype.removeSnake = function() {
    for (var i = 0; i < this.snake.segments.length; i++) {
      var x = this.snake.segments[0];
      var y = this.snake.segments[1];
      this.board[x][y] = null;
    };
  };

  Board.prototype.render = function () {
    var results = '';
    for (var i = 0; i < this.board.length; i++) {
      for (var j = 0; j < this.board[i].length; j++) {
        results += (this.board[i][j] ? this.board[i][j] : '.' );
      };
      results += '\n';
    };

    console.log(results);
  };

})(this);
//
// game = new this.SnakeGame.Board()
// game.render();