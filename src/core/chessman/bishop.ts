import { Chessman } from './chessman';
import { Map } from '../map';

export class Bishop extends Chessman {
    constructor(map: Map, x: number, y: number, faction: string, attr?: any) {
        super(map, x, y, 'bi', faction, attr);
    }
}
