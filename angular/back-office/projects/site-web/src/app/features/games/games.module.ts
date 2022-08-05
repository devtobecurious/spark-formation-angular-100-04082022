import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { TableauGamesComponent } from './tableau-games/tableau-games.component';



@NgModule({
  declarations: [
    GameListComponent,
    TableauGamesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameListComponent
  ]
})
export class GamesModule { }
