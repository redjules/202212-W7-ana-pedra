import { Adviser } from './adviser.js';
import { Squire } from './squire.js';
import { Knight } from './knight.js';
import { King } from './king.js';

const ulDiv: HTMLElement | null = document.querySelector('ul');

const characters = [
    new King('King', 'Joffrey', 'Baratheon', 14, 2),
    new Knight('Knight', 'Jaime', 'Lannister', 34, 'Espada', 9),
    new Knight('Knight', 'Daenerys', 'Targaryen', 16, 'Dragones', 10),
    new Adviser('Adviser', 'Tyrion', 'Lannister', 27, 'Daenerys'),
    new Squire('Squire', 'Bronn', 'Stokeworth', 32, 'Jaime', 5),
];

const displayCard = (
    characterData: King | Squire | Knight | Adviser 
) => {
    const newLi = document.createElement('li');
    newLi.className = 'character col';
    newLi.innerHTML = `
            <div class="card character__card">
                <img
                    src="img/${characterData.name.toLowerCase()}.jpg"
                    alt="${characterData.name} ${characterData.familyName}"
                    class="character__picture card-img-top"
                    id="img${characterData.name}"
                />
                <div class="card-body">
                    <h2 class="character__name card-title h4">${
                        characterData.name
                    } ${characterData.familyName}</h2>
                    <div class="character__info">
                        <ul class="list-unstyled">
                            <li>Edad: ${characterData.age} años</li>
                            <li>
                                Estado:
                                <i class="fas fa-thumbs-down" id="down${
                                    characterData.name
                                }"></i>
                                <i class="fas fa-thumbs-up" id="up${
                                    characterData.name
                                }"></i>
                            </li>
                        </ul>
                    </div>
                    <div class="character__overlay">
                        <ul class="list-unstyled">   
                            ${characterData.extraInfo}               
                        </ul>
                        <div class="character__actions">
                            <button class="character__action btn" id="talk${
                                characterData.name
                            }">habla</button>
                            <button class="character__action btn"  id="die${
                                characterData.name
                            }">muere</button>
                        </div>
                    </div>
                </div>
                <i class="emoji">${characterData.emoji}</i>
            </div>`;
    ulDiv?.appendChild(newLi);

    const talkBtn = document.querySelector(`#talk${characterData.name}`);
    talkBtn?.addEventListener('click', () => {
        characterData.talk(characterData.message);
    });
    const dieBtn = document.querySelector(`#die${characterData.name}`);
    dieBtn?.addEventListener('click', () => {
        characterData.die();
    });
};

characters.forEach((element) => displayCard(element));
