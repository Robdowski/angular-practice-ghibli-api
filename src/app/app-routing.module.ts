import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiCardsComponent } from './components/api-cards/api-cards.component';
import { IndividualViewComponent } from './components/individual-view/individual-view.component'

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'films', component: ApiCardsComponent},
  {path: 'films/:id', component: IndividualViewComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
