import { Game } from "./Game";
import { Score } from "./Score";
import { SinglesPlayer } from "./SinglesPlayer";

export class SinglesGame implements Game {
    player1: SinglesPlayer;
    player2: SinglesPlayer;

    currentPlayer: number;
    gameOver: boolean;

    constructor(player1: SinglesPlayer, player2: SinglesPlayer) {
        this.player1 = player1;
        this.player2 = player2;

        this.currentPlayer = 1;
        this.gameOver = false;
    }

    getCurrentPlayer(): SinglesPlayer {
        if (this.currentPlayer === 1) {
            return this.player1;
        }
        else {
            return this.player2;
        }
    }

    getDefendingPlayer(): SinglesPlayer {
        if (this.currentPlayer === 1) {
            return this.player2;
        }
        else {
            return this.player1;
        }
    }

    currentTeamScoresPoint() {
        this.getCurrentPlayer().scorePoint();

        if (this.isWin()) {
            this.gameOver = true;
        }
    }

    swapTeam() {
        if (this.currentPlayer === 1) {
            this.currentPlayer += 1;
        }
        else {
            this.currentPlayer -= 1;
        }
    }

    defendingTeamDefends() {
        this.swapTeam();
    }

    getScore(): Score {
        return {
            currentTeam: this.getCurrentPlayer().getScore(),
            defendingTeam: this.getDefendingPlayer().getScore(),
            currentPlayer: this.currentPlayer,
            gameOver: this.gameOver,
        }
    }

    isWin(): boolean {
        return (this.getCurrentPlayer().getScore() > 10 &&
            this.getCurrentPlayer().getScore() > this.getDefendingPlayer().getScore() + 2);
    }

}