/// <reference path="libs/phaser.d.ts" />
/// <reference path="splashscene.ts" />
var Wandreing;
(function (Wandreing) {
    var Game = /** @class */ (function () {
        function Game() {
            this.game = new Phaser.Game(Game.SCREEN_WIDTH, Game.SCREEN_HEIGHT, Phaser.AUTO, 'content', {
                preload: this.preload, create: this.create
            });
        }
        Game.prototype.preload = function () {
            // PICTURES
            this.game.load.image("splash-logo", "/assets/boaromayo-splash.png");
            this.game.load.image("title-pic", "/assets/wandreing-title.png");
            // GRAPHICS
            // Tilesets
            this.game.load.tilemap("tilemap", "/assets/wandring-map.csv", null, Phaser.Tilemap.CSV);
            this.game.load.image("tileset", "/assets/wandring-tile.gif");
            // Spritesheets
            this.game.load.spritesheet("", "/assets/player-sprite.gif", Game.PLAYER_WIDTH, Game.PLAYER_HEIGHT, 4);
            // Sprites
            this.game.load.image("rock", "/assets/item-rock.gif");
            this.game.load.image("stick", "/assets/item-stick.gif");
            // AUDIO
            //this.game.load.audio("Wind", "/assets/gust-wind.ogg");
        };
        Game.prototype.create = function () {
            // Load splash screen immediately
            this.game.state.add("splash", Wandreing.SplashScene, true);
            this.game.state.start("splash");
        };
        Game.SCREEN_WIDTH = 640;
        Game.SCREEN_HEIGHT = 480;
        Game.TILESIZE = 32;
        Game.PLAYER_WIDTH = 32;
        Game.PLAYER_HEIGHT = 48;
        return Game;
    }());
    Wandreing.Game = Game;
})(Wandreing || (Wandreing = {}));
