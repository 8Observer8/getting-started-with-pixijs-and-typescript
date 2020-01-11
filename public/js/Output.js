define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Output = /** @class */ (function () {
        function Output() {
        }
        Object.defineProperty(Output, "Instance", {
            get: function () {
                if (this._instance === undefined || this._instance === null) {
                    this._instance = new Output();
                    this._instance.Initialize();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        Output.prototype.Print = function (text) {
            this._outputElement.innerHTML += text;
            this._outputElement.innerHTML += "<br>";
        };
        Output.prototype.Initialize = function () {
            this._outputElement = document.getElementById("output");
            if (this._outputElement === null) {
                this._outputElement = document.createElement("div");
                this._outputElement.id = "output";
                document.body.appendChild(this._outputElement);
            }
        };
        return Output;
    }());
    exports.Output = Output;
});
//# sourceMappingURL=Output.js.map