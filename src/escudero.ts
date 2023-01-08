import { Character } from './personaje.js';

export class Squire extends Character {
    sentence = 'Soy un loser';
    icon = '&#x1F6E1';
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public image: string,
        public advisedCharacter: string | undefined,
        public greasy: number
    ) {
        super(name, family, age, role, image);
        this.advisedCharacter = advisedCharacter;
        this.greasy = greasy;
    }
    death() {
        super.death();
    }
}
