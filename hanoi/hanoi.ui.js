(function(root){

  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var Towers = Hanoi.Towers = function(game, towers) {
    // this.id = id;
    this.$towers = towers;
    this.$fromTower = null;
    this.game = game; //nested array
  };

  Towers.towerIndex = function($clickedTower) {
    if ($clickedTower.hasClass('left')) {
      return '0';
    } else if ($clickedTower.hasClass('middle')) {
      return '1';
    } else {
      return '2';
    };
  };

  Towers.prototype.installFromHandlers = function() {
    this.$towers.find('.selected').removeClass('selected');
    this.$fromTower = null;
    this.$towers.find('.tower').on('click', this.handleFromTowersClick.bind(this));
  };

  Towers.prototype.handleFromTowersClick = function () {
    this.$fromTower = $(event.currentTarget);
    this.$fromTower.toggleClass('selected')
    this.$towers.find('.tower').off('click');
    this.installToHandlers();
  };

  Towers.prototype.installToHandlers = function () {
    this.$towers.find('.tower').on('click', this.handleToTowersClick.bind(this));
  };

  Towers.prototype.handleToTowersClick = function () {
    var $moveDisc = this.$fromTower.find('.disc').first();
    var $discSize = $moveDisc.attr('class');
    var $toTower = $(event.currentTarget);
    var $disc = $toTower.find('div').not('.disc').last();
    var fromTowerIdx = parseInt(Towers.towerIndex(this.$fromTower));
    var toTowerIdx = parseInt(Towers.towerIndex($toTower));

    if (Game.move(fromTowerIdx, toTowerIdx)) {
      $moveDisc.toggleClass($discSize);
      $disc.toggleClass($discSize);
      if (Game.isWon()) {
        alert('You Win!');
      }
    } else {
      alert('Invalid Move, choose again');
    }

    this.$towers.find('.tower').off('click');
    this.installFromHandlers();
  };

})(this);




$(function () {
  towers = new Hanoi.Towers(Game, $(".container"))
  towers.installFromHandlers();
});