import { Team } from "./Team";
import { Score } from "./Score";
import { Game } from "./Game";
export class DoublesGame implements Game {
    team1: Team;
    team2: Team;

    currentTeam: Team;
    defendingTeam: Team;
    currentPlayer: number;
    gameOver: boolean;

    constructor(team1: Team, team2: Team) {
        this.team1 = team1;
        this.team2 = team2;

        this.currentTeam = this.team1;
        this.defendingTeam = this.team2;
        this.currentPlayer = 2;
        this.gameOver = false;
    }

    currentTeamScoresPoint() {
        this.currentTeam.scorePoint();
        if (this.isWin()) {
            this.gameOver = true;
            return;
        }

        this.currentTeam.swapPositions();
    }

    swapTeam() {
        const swap = this.currentTeam;
        this.currentTeam = this.defendingTeam;
        this.defendingTeam = swap;
    }

    defendingTeamDefends() {
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        }
        else {
            this.swapTeam();
            this.currentPlayer = 1;
        }
    }

    getScore(): Score {
        return {
            currentTeam: this.currentTeam.getScore(),
            defendingTeam: this.defendingTeam.getScore(),
            currentPlayer: this.currentPlayer,
            gameOver: this.gameOver
        }
    }

    isWin(): boolean {
        return (this.currentTeam.getScore() > 10 &&
            this.currentTeam.getScore() > this.defendingTeam.getScore() + 2);
    }

}