import { Character } from './character.js';
export class Squire extends Character {
    whoServe;
    kissAssLevel;
    emoji = String.fromCodePoint(0x1f6e1);
    message = 'Soy un loser';
    constructor(role, name, familyName, age, whoServe, kissAssLevel) {
        super(role, name, familyName, age);
        this.whoServe = whoServe;
        this.kissAssLevel = kissAssLevel;
        this.extraInfo = `<li>Sirve a: ${this.whoServe}</li>
                        <li>Peloteo: ${this.kissAssLevel}</li>`;
    }
}
