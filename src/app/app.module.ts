import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiCardsComponent } from './components/api-cards/api-cards.component';


import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { IndividualViewComponent } from './components/individual-view/individual-view.component'



@NgModule({
  declarations: [
    AppComponent,
    ApiCardsComponent,
    FilmCardComponent,
    IndividualViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
