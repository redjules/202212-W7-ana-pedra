// Montar los datos de cada personaje usando clases

// Definimos los tipos de valores que tendrá el objeto
export interface CharacterTypes {
    name: string;
    family: string;
    age: number;
    role: string;
    isAlive: boolean;
    image: string;
    icon?: string;
    sentence?: string;
    years?: number;
    weapon?: string;
    skill?: number;
    advisedCharacter?: string;
    greasy?: number;

    death: () => void;
}

// Definimos la clase que tendrán en común todos los personajes
export class Character implements CharacterTypes {
    isAlive = true;
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public image: string
    ) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.role = role;
        this.image = image;
    }

    death() {
        this.isAlive = false;
    }
}
