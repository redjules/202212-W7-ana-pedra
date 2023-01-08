import { Character } from './character.js';
export class Adviser extends Character {
    emoji = String.fromCodePoint(0x1f393);
    message = 'No sé por qué, pero creo que voy a morir pronto';
    constructor(
        role: string,
        name: string,
        familyName: string,
        age: number,
        public whoAsses: string
    ) {
        super(role, name, familyName, age);
        this.extraInfo = `<li>Sirve a: ${this.whoAsses}</li>`;
    }
}
