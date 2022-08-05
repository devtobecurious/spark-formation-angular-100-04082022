import { MoyenDeDeplacement } from "./moyen-deplacement";

export class Salarie {
    allerAuTravail(moyenDeDeplacement: MoyenDeDeplacement) {
        console.log('je vais au travail');

        moyenDeDeplacement.seDeplacer();
        // if (jailaflemme) {
        //     voiture.seDeplacer()
        // } else if(ilpleut et mavoitureenrade) {
        //     train.seDeplacer();
        // }
    }
}