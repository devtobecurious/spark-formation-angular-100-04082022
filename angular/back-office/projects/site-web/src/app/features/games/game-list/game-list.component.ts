import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../../shared/services/logger.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  items: string[] = ['Entre potes 1', 'Cest la fete', 'Oh ohh cetait dur', 'Aie jai mal'];
  sousTitre = 'Liste des parties';

  gameAEditer: string = '';

  //#region [ Constructor ]

  constructor(private logger: LoggerService) {
  }
  //#endregion

  ngOnInit(): void {
  }

  ajoutLigne(): void {
    this.items.push('Nouvelle ligne');
  }

  editer(item: string): void {
    this.logger.log('pour edition', item);
    this.gameAEditer = item;
  }

  supprimerLigne(): void {
    this.items.pop();
  }

  annulerEdit(): void {
    this.gameAEditer = '';
  }

  get gamePresent(): boolean {
    return this.gameAEditer !== '';
  }
}
