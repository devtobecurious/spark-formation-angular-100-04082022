import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  items: string[] = ['Entre potes 1', 'Cest la fete', 'Oh ohh cetait dur', 'Aie jai mal'];
  sousTitre = 'Liste des parties';

  //#region [ Constructor ]
  constructor() { }
  //#endregion

  ngOnInit(): void {
  }

  ajoutLigne(): void {
    this.items.push('Nouvelle ligne');
  }

  editer(item: string): void {
    console.log('pour edition', item);
  }

  supprimerLigne(): void {
    this.items.pop();
  }
}
