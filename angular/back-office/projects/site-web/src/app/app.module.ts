import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './features/games/game-list/game-list.component';
import { GamesModule } from './features/games/games.module';
import { HeaderComponent } from './shared/ui/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GamesModule
  ],
  providers: [
    // LoggerService
  ],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
