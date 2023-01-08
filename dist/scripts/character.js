export class Character {
    role;
    name;
    familyName;
    age;
    isAlive = true;
    extraInfo = '';
    constructor(role, name, familyName, age) {
        this.role = role;
        this.name = name;
        this.familyName = familyName;
        this.age = age;
    }
    talk(message) {
        if (!this.isAlive)
            return;
        const talkTextDisplay = document.querySelector('.display-1');
        const talkDisplay = document.querySelector('.comunications');
        const talkImgDisplay = document.querySelector('.comunications img');
        if (talkImgDisplay && talkDisplay && talkTextDisplay) {
            talkTextDisplay.innerHTML = message;
            talkImgDisplay.src = `img/${this.name.toLowerCase()}.jpg`;
            talkImgDisplay.alt = `${this.name} ${this.familyName}`;
            talkDisplay.classList.add('on');
            setTimeout(() => {
                talkDisplay?.classList.remove('on');
            }, 2500);
        }
    }
    die() {
        if (this.isAlive) {
            const thumsUp = document.querySelector(`#up${this.name}`);
            const thumsDown = document.querySelector(`#down${this.name}`);
            const characterImage = document.querySelector(`#img${this.name}`);
            if (characterImage && thumsUp && thumsDown) {
                thumsDown.style.display = 'initial';
                thumsUp.style.display = 'none';
                characterImage.style.rotate = '180deg';
            }
        }
        this.isAlive = false;
    }
}
