export class Player {
    private _surname: string;

    constructor(surname: string) {
        this.surname = surname;
    }

    get surname(): string {
        return this._surname;
    }

    set surname(value: string) {
        this._surname = value;
    }
}

const player: Player = new Player('Kowalski');
player.surname = 'Luke';

// player.surname = 1;

