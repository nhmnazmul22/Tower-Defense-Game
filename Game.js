"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    constructor() {
        this.animationFrameId = null;
        this.lastTimestamp = 0;
        this.loop = (timestamp) => {
            // Update
            if (!this.lastTimestamp)
                this.lastTimestamp = timestamp;
            const dt = timestamp - this.lastTimestamp;
            this.lastTimestamp = timestamp;
            // Render
            this.update(dt);
            this.draw();
            this.animationFrameId = requestAnimationFrame(this.loop);
        };
    }
    start() {
        if (this.animationFrameId !== null)
            return;
        console.log("Start the Game ⏸️");
        this.animationFrameId = requestAnimationFrame(this.loop);
    }
    stop() {
        if (!this.animationFrameId) {
            console.log('No active game loop to stop');
            return;
        }
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
        this.lastTimestamp = 0;
        console.log("Game stopped ▶️");
    }
    update(dt) {
    }
    draw() {
    }
}
exports.default = Game;
//# sourceMappingURL=Game.js.map