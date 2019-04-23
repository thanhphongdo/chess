import { Chessman } from './chessman';
import { Map } from '../map';

export class Tank extends Chessman {
    constructor(map: Map, x: number, y: number, faction: string, attr?: any) {
        super(map, x, y, 'tk', faction, attr);
    }
}