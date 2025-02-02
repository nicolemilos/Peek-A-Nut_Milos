const global = {};

global.canvas = document.querySelector("#canvas");
global.ctx = canvas.getContext("2d");
global.prevTotalRunningTime = 0;
global.deltaTime = 0;
global.allGameObjects = [];
global.nuts = [];
global.fakenuts = [];
global.block = [];
global.squirrel;
global.startedGame = false;
global.hearts= 3;
global.nutsScore = 0;


export { global }