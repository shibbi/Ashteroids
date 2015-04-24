(function() {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(options) {
    this.COLOR = 'pink';
    this.RADIUS = 30;
    this.vel = [0, 0];
    this.img = new Image();
    this.img.src = 'lib/images/ash.png';
    Asteroids.MovingObject.call(this, { pos: options.pos,
                                        vel: this.vel,
                                        color: this.COLOR,
                                        radius: this.RADIUS,
                                        game: options.game });
  };

  Utils.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.draw = function (ctx) {
    ctx.drawImage(this.img, this.pos[0] - 30, this.pos[1] - 27, 60, 54);
  };

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPos();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function(impulse) {
    var newVel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];
    if (Math.abs(newVel[0]) <= 4) {
      this.vel[0] = newVel[0];
    }
    if (Math.abs(newVel[1]) <= 4) {
      this.vel[1] = newVel[1];
    }
  };

  Ship.prototype.fireBullet = function() {
    if (this.game.bullets.length < 5) {
      var vel = [this.vel[0] * 2, this.vel[1] * 2];
      if (vel[0] === 0 && vel[1] === 0) {
        vel[1] = -2;
      }
      var pos = [this.pos[0], this.pos[1]];
      var bullet = new Asteroids.Bullet({ pos: pos,
                                          vel: vel,
                                          game: this.game });
      var pokeball = new Audio('lib/sounds/pokeball.mp3');
      pokeball.play();
      this.game.bullets.push(bullet);
    }
  };

})();
