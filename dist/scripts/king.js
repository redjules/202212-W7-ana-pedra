import { Character } from './character.js';
export class King extends Character {
    regnalYears;
    emoji = String.fromCodePoint(0x1f451);
    message = 'Vais a morir todos';
    constructor(role, name, familyName, age, regnalYears) {
        super(role, name, familyName, age);
        this.regnalYears = regnalYears;
        this.extraInfo = `<li>Años de reinado: ${this.regnalYears}</li>`;
    }
}
