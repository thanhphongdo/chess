import { Chessman } from '../chessman';

export interface HistoryItemInterface {
    time: number,
    step: number,
    chessman: Chessman,
    x: number,
    y: number,
    faction: string;
}