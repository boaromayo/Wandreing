module Wandreing {
	export enum PlayerState { IDLE, WALK }

	export class Player extends Phaser.Sprite {
		game: Phaser.Game;

		// List all keyboard inputs
		W: Phaser.Key;
		A: Phaser.Key;
		S: Phaser.Key;
		D: Phaser.Key;
		cursors: Phaser.CursorKeys;

		ENTER: Phaser.Key;
		ESCAPE: Phaser.Key;
		SPACE: Phaser.Key;

		// List player instances
		x: number;
		y: number;
		speed: number;

		constructor(game:Phaser.Game, x:number, y:number) {
			this.game = game;

			this.speed = 0;

			// Set up key inputs.
			this.cursors = this.game.input.keyboard.createCursorKeys();

			this.W = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
			this.A = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
			this.S = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
			this.D = this.game.input.keyboard.addKey(Phaser.Keyboard.D);

			this.ENTER = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
			this.ESCAPE = this.game.input.keyboard.addKey(Phaser.Keyboard.ESCAPE);
			this.SPACE = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

			this.W.onDown.add(Player.prototype.moveUp, this);
			this.A.onDown.add(Player.prototype.moveLeft, this);
			this.S.onDown.add(Player.prototype.moveDown, this);
			this.D.onDown.add(Player.prototype.moveRight, this);

			super(game, x, y, "player", 0);
		}
		moveUp() {
			if (checkMove()) {
				
			}
		}
		moveLeft() {
			if (checkMove()) {

			}
		}
		moveRight() {
			if (checkMove()) {

			}
		}
		moveDown() {
			if (checkMove()) {

			}
		}
		checkMove() : boolean {
			if (this.PlayerState != PlayerState.IDLE) {
				return (this.x + 1 == TileState.CROSSABLE ||
					this.x - 1 == TileState.CROSSABLE ||
					this.y + 1 == TileState.CROSSABLE ||
					this.y - 1 == TileState.CROSSABLE); 
			}
		}
		update() {
			// Update inputs
			this.game.input.update();

			// Check keyboard inputs for any changes
			if (this.cursors.down.isDown) {
				moveDown();
			} else if (this.cursors.left.isDown) {
				moveLeft();
			} else if (this.cursors.right.isDown) {
				moveRight();
			} else if (this.cursors.up.isDown) {
				moveUp();
			}
		}

	}
}