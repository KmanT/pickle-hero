export class Team {
    label: string;
    player1: string;
    player2: string;

    left: string;
    right: string;
    score: number = 0;

    constructor(label: string, player1: string, player2: string) {
        this.label = label;
        this.player1 = player1;
        this.player2 = player2;
        this.left = this.player1;
        this.right = this.player2;
    }

    swapPositions () {
        const newLeft = this.right;
        this.right = this.left;
        this.left = newLeft;
    }

    scorePoint () {
        this.score += 1;
    }

    getScore (): number {
        return this.score;
    }


}