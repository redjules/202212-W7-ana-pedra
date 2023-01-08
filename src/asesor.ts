import { Character } from './personaje.js';

export class Adviser extends Character {
    sentence = 'No sé por qué, pero creo que voy a morir pronto';
    icon = '&#x1F393';
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public image: string,
        public advisedCharacter: string | undefined
    ) {
        super(name, family, age, role, image);
        this.advisedCharacter = advisedCharacter;
    }
    death() {
        super.death();
    }
}
