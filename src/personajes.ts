import { CharacterTypes } from './personaje.js';
import { King } from './rey.js';
import { Fighter } from './luchador.js';
import { Squire } from './escudero.js';
import { Adviser } from './asesor.js';

export const characters = () => {
    // Instanciamos todos los personajes.
    const character1: CharacterTypes = new King(
        'Joffrey',
        'Baratheon',
        25,
        'rey',
        'assets/img/joffrey.jpg',
        3
    );
    const character2: CharacterTypes = new Fighter(
        'Jaime',
        'Lannister',
        35,
        'luchador',
        'assets/img/jaime.jpg',
        'espada',
        8
    );
    const character3: CharacterTypes = new Fighter(
        'Daenerys',
        'Targaryen',
        34,
        'luchadora',
        'assets/img/daenerys.jpg',
        'dragones',
        9
    );
    const character4: CharacterTypes = new Adviser(
        'Tyrion',
        'Lannister',
        49,
        'asesor de Daenerys',
        'assets/img/tyrion.jpg',
        character3.name
    );
    const character5: CharacterTypes = new Squire(
        'Bronn',
        '',
        27,
        'escudero de Jaime',
        'assets/img/bronn.jpg',
        character2.name,
        8
    );

    const charactersList = [character1, character2, character3];
    charactersList.push(character4, character5);

    return charactersList;
};
