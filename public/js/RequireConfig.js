requirejs.config({
    baseUrl: "js",
    paths: {
        "pixijs": "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.0.4/pixi.min"
    },
    shim: {
        "pixijs": {
            exports: "PIXI"
        }
    }
});
requirejs(["Program"], function () { });
//# sourceMappingURL=RequireConfig.js.map