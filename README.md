# How to install packages for a debug version

Install TypeScript globally:

> npm i typescript -g

Install modules: pixi.js and requirejs:

> npm install

Go to the "node_modules" folder and rename "pixi.js" to "pixijs".

Go to the "pixijs" folder. Open the "pixi.js.d.ts" file. Go to the end of the file. Rename **declare module "pixi.js"** to **declare module "pixijs"**

Compile the debug version:

> npm run debug

Now you can can set breakpoints, debug with Chrome extension in VSCode and even public your multi file examples on the Playground: [click to run](https://next.plnkr.co/edit/2dkQtKRY30nvoYmF?preview). This example just shows a version of Pixi.js. See how to public your examples in my example.

# How to install packages for a release version

Install Browserify and UglifyJS globally:

> npm i browserify uglify-js -g

Go to index.html and Program.ts, comment "Debug Version" and uncomment "Release Version"

Compile the release version:

> npm run release
