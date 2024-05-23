import { Score } from "./Score";
export interface Game {
    gameOver: boolean;
    currentPlayer: number;
    currentTeamScoresPoint: () => void;
    swapTeam: () => void;
    defendingTeamDefends: () => void;
    getScore(): Score;
    isWin(): boolean;
}