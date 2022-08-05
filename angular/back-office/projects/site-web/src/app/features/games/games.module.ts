import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { TableauGamesComponent } from './tableau-games/tableau-games.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GameListComponent,
    TableauGamesComponent,
    GameEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GameListComponent
  ]
})
export class GamesModule { }
