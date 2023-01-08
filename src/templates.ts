import { CharacterTypes } from './personaje.js';

const loadCharacterTraits = (character: CharacterTypes) => {
    let characterTraits = '';
    if (character.years) {
        characterTraits += `<li>Años de reinado: ${character.years}</li>`;
    }
    if (character.weapon) {
        characterTraits += `<li>Arma: ${character.weapon}</li>`;
    }
    if (character.skill) {
        characterTraits += `<li>Destreza: ${character.skill}</li>`;
    }
    if (character.greasy) {
        characterTraits += `<li>Peloteo: ${character.greasy}</li>`;
    }
    if (character.advisedCharacter && character.family) {
        characterTraits += `<li>Asesora a: ${character.advisedCharacter}</li>`;
    }
    if (character.advisedCharacter && character.greasy) {
        characterTraits += `<li>Sirve a: ${character.advisedCharacter}</li>`;
    }
    return characterTraits;
};
export const createContent = (characters: Array<CharacterTypes>) => {
    let contentTemplate = `<div class="app container"><ul class="characters-list row list-unstyled">`;
    characters.forEach((item) => {
        contentTemplate += `<li class="character col" data-name=${item.name}>
                    <div class="card character__card">
                        <img
                            src=${item.image}
                            alt="${item.name} ${item.family}"
                            class="character__picture card-img-top"
                        />
                        <div class="card-body">
                            <h2 class="character__name card-title h4">
                                ${item.name} ${item.family}
                            </h2>
                            <div class="character__info">
                                <ul class="list-unstyled">
                                    <li>Edad: ${item.age} años</li>
                                    <li>
                                        Estado:<i class="fas fa-thumbs-up"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="character__overlay">
                                <ul class="list-unstyled">
                                ${loadCharacterTraits(
                                    item
                                )}                                  
                                </ul>
                                <div class="character__actions">
                                    <button class="character__action btn" id="btn-communication">
                                        habla
                                    </button>
                                    <button class="character__action btn" id="btn-die">
                                        muere
                                    </button>
                                </div>
                            </div>
                        </div>
                        <i class="emoji">${item.icon}</i>
                    </div>
                </li>`;
    });
    contentTemplate += `</ul></div><div class="comunications">`;
    contentTemplate += `
            <p class="comunications__text display-1">
            </p>
            <img
                class="comunications__picture"
                src=""
                alt=""
            /></div>`;

    return contentTemplate;
};
