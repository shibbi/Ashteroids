(function() {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function(options) {
    this.COLOR = 'lightblue';
    this.RADIUS = 10;
    this.img = new Image();
    this.img.src = 'lib/images/masterball.png';
    Asteroids.MovingObject.call(this, { pos: options.pos,
                                        vel: options.vel,
                                        color: this.COLOR,
                                        radius: this.RADIUS,
                                        game: options.game });

  };

  Utils.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.draw = function (ctx) {
    ctx.drawImage(this.img, this.pos[0] - 10, this.pos[1] - 10, 20, 20);
  };

  Bullet.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(this);
      this.game.remove(otherObject);
      var pika = new Audio('lib/sounds/pika.mp3');
      pika.play();
    }
  };
})();
