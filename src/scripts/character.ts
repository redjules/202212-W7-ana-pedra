interface Actions {
    isAlive: boolean;
    extraInfo: string;
    talk: (message: string) => void;
    die: () => void;
}
export class Character implements Actions {
    isAlive = true;
    extraInfo = '';
    constructor(
        public role: string,
        public name: string,
        public familyName: string,
        public age: number
    ) {}
    talk(message: string) {
        if (!this.isAlive) return;

        const talkTextDisplay: HTMLElement | null =
            document.querySelector('.display-1');

        const talkDisplay: HTMLImageElement | null =
            document.querySelector('.comunications');

        const talkImgDisplay: HTMLImageElement | null =
            document.querySelector('.comunications img');

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
            const thumsUp: HTMLElement | null = document.querySelector(
                `#up${this.name}`
            );

            const thumsDown: HTMLElement | null = document.querySelector(
                `#down${this.name}`
            );

            const characterImage: HTMLElement | null = document.querySelector(
                `#img${this.name}`
            );

            if (characterImage && thumsUp && thumsDown) {
                thumsDown.style.display = 'initial';
                thumsUp.style.display = 'none';
                characterImage.style.rotate = '180deg';
            }
        }
        this.isAlive = false;
    }
}
