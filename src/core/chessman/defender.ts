import { Chessman } from './chessman';
import { Map } from '../map';

export class Defender extends Chessman {
    constructor(map: Map, x: number, y: number, faction: string, attr?: any) {
        super(map, x, y, 'de', faction, attr);
    }
}
