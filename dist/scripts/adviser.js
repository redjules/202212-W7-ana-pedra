import { Character } from './character.js';
export class Adviser extends Character {
    whoAsses;
    emoji = String.fromCodePoint(0x1f393);
    message = 'No sé por qué, pero creo que voy a morir pronto';
    constructor(role, name, familyName, age, whoAsses) {
        super(role, name, familyName, age);
        this.whoAsses = whoAsses;
        this.extraInfo = `<li>Sirve a: ${this.whoAsses}</li>`;
    }
}
