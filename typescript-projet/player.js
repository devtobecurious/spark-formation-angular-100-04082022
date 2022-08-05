var Player = /** @class */ (function () {
    function Player(surname) {
        this.surname = surname;
    }
    Object.defineProperty(Player.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        set: function (value) {
            this._surname = value;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
var player = new Player('Kowalski');
player.surname = 'Luke';
player.surname = 1;
