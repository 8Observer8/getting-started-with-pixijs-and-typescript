# How to install packages for a debug version

Install TypeScript globally:

> npm i typescript -g

Install modules: pixi.js and requirejs:

> npm install

Compile the debug version:

> npm run debug

Now you can can set breakpoints, debug with Chrome extension in VSCode and even public your multi file examples on the Playground: [https://next.plnkr.co/edit/2dkQtKRY30nvoYmF?preview](click to run). This example just shows a version of Pixi.js. See how to public your examples in my example.

# How to install packages for a release version

Install Browserify and UglifyJS globally:

> npm i browserify uglifyjs -g

Go to index.html and Program.ts, comment "Debug Version" and uncomment "Release Version"

Compile the release version:

> npm run release

If you have any questions, please, ask me: 8observer8@gmail.com

If my example helped you, please, support me [https://www.paypal.me/8observer8](https://www.paypal.me/8observer8). Maybe $0.5 or $1. I need money very much.