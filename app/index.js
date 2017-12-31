/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

import * as PIXI from 'pixi.js';

console.log("Okay, I guess this shit will work?");

const app = new PIXI.Application({
    width: 256,
    height: 256
});

app.renderer.backgroundColor = 0x061639;

document.body.appendChild(app.view);
