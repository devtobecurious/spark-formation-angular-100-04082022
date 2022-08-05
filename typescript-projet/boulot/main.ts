import { Bateau, MoyenDeDeplacement, Train } from "./moyen-deplacement";
import { Salarie } from "./salarie";

const salarie = new Salarie();

let moyenDeDeplacement: MoyenDeDeplacement = new Train();

let ilPleut = true;
if (ilPleut) {
    moyenDeDeplacement = new Bateau();
}

salarie.allerAuTravail(new Train());
salarie.allerAuTravail(new Bateau());