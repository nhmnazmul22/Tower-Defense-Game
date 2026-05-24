"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = __importDefault(require("./Game"));
const game = new Game_1.default();
game.start();
setTimeout(() => {
    game.stop();
}, 1000);
//# sourceMappingURL=index.js.map