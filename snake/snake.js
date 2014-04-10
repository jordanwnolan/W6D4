(function(root) {

  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Snake = SnakeGame.Snake = function () {
    this.dir = "N";
    this.segments = [[10,10],[10,11]];
  }

  Snake.prototype.getCoord = function () {
    if (this.dir === "N") {
      return [0,-1];
    } else if (this.dir === "E") {
      return [1,0];
    } else if (this.dir === "S") {
      return [0,1];
    } else {
      return [-1,0];
    }
  };

  Snake.prototype.move = function () {
    var newSegment = this.segments[0];
    var newDir = this.getCoord()
    for (var i = 0; i < newSegment.length; i++) {
      newSegment[i] += newDir[i];
    }
    this.segments.unshift(newSegment);
    this.segments.pop();
  }

  Snake.prototype.turn = function (dir) {
    this.dir = dir;
  }


})(this);