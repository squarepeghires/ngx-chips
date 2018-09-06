// Polyfills
// These modules are what's in angular 2 bundle polyfills so don't include them
// import 'es6-shim';
// import 'es6-promise';
// import 'reflect-metadata';

// CoreJS has all the polyfills you need

import 'core-js';
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');

// HTML5 Drag & Drop
import {polyfill} from 'mobile-drag-drop';
import {scrollBehaviourDragImageTranslateOverride} from 'mobile-drag-drop/scroll-behaviour';
polyfill({
    dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride,
    holdToDrag: 200
});

window.addEventListener( 'touchmove', function() {});
