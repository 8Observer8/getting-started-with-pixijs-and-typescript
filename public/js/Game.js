define(["require", "exports", "pixijs", "./Output"], function (require, exports, PIXI, Output_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = /** @class */ (function () {
        function Game() {
            Output_1.Output.Instance.Print("Pixi.js Version: " + PIXI.VERSION);
        }
        return Game;
    }());
    exports.Game = Game;
});
//# sourceMappingURL=Game.js.map