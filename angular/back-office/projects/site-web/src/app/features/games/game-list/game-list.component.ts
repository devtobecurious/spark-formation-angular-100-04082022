import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggerService } from '../../../shared/services/logger.service';
import { People, PeopleService } from '../services/people.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnDestroy {
  items: string[] = ['Entre potes 1', 'Cest la fete', 'Oh ohh cetait dur', 'Aie jai mal'];
  sousTitre = 'Liste des parties';

  gameAEditer: string = '';
  peopleList$ !: Observable<People[]>;

  //#region [ Constructor ]

  constructor(private logger: LoggerService, private peopleService: PeopleService) {
  }


  //#endregion

  ngOnInit(): void {
     this.peopleList$ = this.peopleService.getAll();
  }

  ngOnDestroy(): void {

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
