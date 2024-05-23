export class SinglesPlayer {
    name: string;
    score: number;

    constructor(name: string) {
        this.name = name;
        this.score = 0;
    }

    scorePoint() {
        this.score += 1;
    }

    getScore(): number {
        return this.score;
    }
}