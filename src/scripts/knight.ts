import { Character } from './character.js';
export class Knight extends Character {
    emoji = String.fromCodePoint(0x1f5e1);
    message = 'Primero pego y luego pregunto';
    constructor(
        role: string,
        name: string,
        familyName: string,
        age: number,
        public weapon: string,
        public skillLevel: number
    ) {
        super(role, name, familyName, age);
        this.extraInfo = `<li>Arma: ${this.weapon}</li>
                        <li>Destreza: ${this.skillLevel}</li>`;
    }
}
