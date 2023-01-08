import { Character } from './character.js';
export class King extends Character {
    emoji = String.fromCodePoint(0x1f451);
    message = 'Vais a morir todos';
    constructor(
        role: string,
        name: string,
        familyName: string,
        age: number,
        public regnalYears: number
    ) {
        super(role, name, familyName, age);
        this.extraInfo = `<li>Años de reinado: ${this.regnalYears}</li>`;
    }
}
