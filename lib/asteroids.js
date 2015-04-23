(function() {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(options) {
    this.COLOR = 'white';
    this.RADIUS = 30;
    this.vel = Utils.randomVec(2);
    this.img = new Image();
    this.img.src = 'lib/images/pikachu.png';
    Asteroids.MovingObject.call(this, { pos: options.pos,
                                        vel: this.vel,
                                        color: this.COLOR,
                                        radius: this.RADIUS,
                                        game: options.game });
  };

  Utils.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.draw = function (ctx) {
    ctx.drawImage(this.img, this.pos[0] - 30, this.pos[1] - 30, 60, 60);
  };

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };
})();
