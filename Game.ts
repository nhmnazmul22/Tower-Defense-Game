class Game {
    private animationFrameId: number | null = null;
    private lastTimestamp: number = 0;

    public start(): void {
        if (this.animationFrameId !== null) return;

        console.log("Start the Game ⏸️")
        this.animationFrameId = requestAnimationFrame(this.loop);
    }

    public stop(): void {
        if (!this.animationFrameId) {
            console.log('No active game loop to stop')
            return;
        }
        cancelAnimationFrame(this.animationFrameId)
        this.animationFrameId = null;
        this.lastTimestamp = 0;
        console.log("Game stopped ▶️")
    }

    private loop = (timestamp: number) => {
        // Update
        if (!this.lastTimestamp) this.lastTimestamp = timestamp;
        const dt = timestamp - this.lastTimestamp;
        this.lastTimestamp = timestamp;

        // Render
        this.update(dt);
        this.draw();


        this.animationFrameId = requestAnimationFrame(this.loop);

    }

    private update(dt: number) {

    }

    private draw() {

    }
}

module.exports = Game;