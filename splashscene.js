var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Wandreing;
(function (Wandreing) {
    var SplashScene = /** @class */ (function (_super) {
        __extends(SplashScene, _super);
        function SplashScene() {
            return _super.call(this) || this;
        }
        SplashScene.prototype.create = function () {
            // initialize and display splashscreen
            this.splashscreen = this.add.image(0, 0, "splash-logo");
            // fade out after 2 seconds
            this.game.time.events.add(2000, { "this": .game.add.tween(this.splashscreen).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true) }, this);
            // transition to title scene
            this.game.state.add("title", Wandreing.TitleScene);
            this.game.state.start("title");
        };
        return SplashScene;
    }(Phaser.State));
    Wandreing.SplashScene = SplashScene;
})(Wandreing || (Wandreing = {}));
