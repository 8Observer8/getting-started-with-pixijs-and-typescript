define(["require", "exports", "./Game"], function (require, exports, Game_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Playground: https://next.plnkr.co/edit/2dkQtKRY30nvoYmF?preview
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            var game = new Game_1.Game();
        };
        return Program;
    }());
    // Debug Version
    Program.Main();
});
// Release Version
// window.onload = () => Program.Main();
//# sourceMappingURL=Program.js.map