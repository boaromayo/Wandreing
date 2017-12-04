/// <reference path="libs/phaser.d.ts" />
/// <reference path="splashscene.ts" />

module Wandreing {
	export class Game {
		game: Phaser.Game;

		public static readonly SCREEN_WIDTH = 640;
		public static readonly SCREEN_HEIGHT = 480;
		public static readonly TILESIZE = 32;
		public static readonly PLAYER_WIDTH = 32;
		public static readonly PLAYER_HEIGHT = 48;

		constructor() {
			this.game = new Phaser.Game(Game.SCREEN_WIDTH, Game.SCREEN_HEIGHT, Phaser.AUTO, 'content', {
			preload: this.preload, create: this.create
			});
		}
		preload() {
			// PICTURES
			this.game.load.image("splash-logo", "/assets/boaromayo-splash.png");
			this.game.load.image("title-pic", "/assets/wandreing-title.png");

			// GRAPHICS
			// Tilesets
			this.game.load.tilemap("tilemap", "/assets/wandring-map.csv", null, Phaser.Tilemap.CSV);
			this.game.load.image("tileset", "/assets/wandring-tile.gif");

			// Spritesheets
			this.game.load.spritesheet("player", "/assets/player-sprite.gif", Game.PLAYER_WIDTH, Game.PLAYER_HEIGHT, 3);

			// Sprites
			this.game.load.image("rock", "/assets/item-rock.gif");
			this.game.load.image("stick", "/assets/item-stick.gif");

			// AUDIO
			//this.game.load.audio("Wind", "/assets/gust-wind.ogg");
		}
		create() {
			// Load splash screen immediately
			this.game.state.add("splash", SplashScene, true);
			this.game.state.start("splash");
		}
	}
}