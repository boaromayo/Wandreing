/// <reference path "titlescene.ts" />

module Wandreing {
	export class SplashScene extends Phaser.State {
	
		game: Phaser.Game;
		splashscreen: Phaser.Sprite;

		constructor() {
			super();
		}
		create() {
			// initialize and display splashscreen
			this.splashscreen = this.add.image(0,0,"splash-logo");
		
			// fade out after 2 seconds
			this.game.time.events.add(2000, { this.game.add.tween(this.splashscreen).to({alpha: 0;}, 1000, 	Phaser.Easing.Linear.None, true); }, this);

			// transition to title scene
			this.game.state.add("title", TitleScene);
			this.game.state.start("title");
		}
	}
}