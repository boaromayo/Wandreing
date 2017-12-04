module Wandreing {
	export class PlayScene extends Phaser.State {
		game: Phaser.Game;
		player: Wandreing.Player;

		constructor() {
			super();
		}
		create() {
			// Initialize player and add to game's play scene
			this.player = new Player(this.game, 0, 0);
			this.game.add.existing(this.player);
		}
	}
}