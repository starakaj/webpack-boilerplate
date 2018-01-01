/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
import * as PIXI from 'pixi.js';
import TestStore from './store.js';
import { autorun } from 'mobx';

const app = new PIXI.Application({
    width: 256,
    height: 256
});

const store = new TestStore();

document.body.appendChild(app.view);

app.renderer.backgroundColor = 0x061639;
app.renderer.autoResize = true;
app.renderer.view.style.position = 'absolute';
app.renderer.view.style.display = 'block';
resizePixiRenderer();

function resizePixiRenderer() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', (event) => {
    resizePixiRenderer();
});

window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        store.incrementBoxCount();
    }
});

autorun(() => {
    console.log(`The number of boxes is now ${store.boxCount}`);
});