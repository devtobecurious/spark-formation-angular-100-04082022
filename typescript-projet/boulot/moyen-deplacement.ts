export interface MoyenDeDeplacement {
    seDeplacer(): void;
}

export class Voiture implements MoyenDeDeplacement {
    seDeplacer() {
        console.log('je vais en voiture');
    }
}

export class Train implements MoyenDeDeplacement {
    seDeplacer() {
        console.log('je vais en train');
    }
}

export class Bateau implements MoyenDeDeplacement {
    seDeplacer() {
        console.log('je vais en bateau');
    }
}  
