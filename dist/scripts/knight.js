import { Character } from './character.js';
export class Knight extends Character {
    weapon;
    skillLevel;
    emoji = String.fromCodePoint(0x1f5e1);
    message = 'Primero pego y luego pregunto';
    constructor(role, name, familyName, age, weapon, skillLevel) {
        super(role, name, familyName, age);
        this.weapon = weapon;
        this.skillLevel = skillLevel;
        this.extraInfo = `<li>Arma: ${this.weapon}</li>
                        <li>Destreza: ${this.skillLevel}</li>`;
    }
}
