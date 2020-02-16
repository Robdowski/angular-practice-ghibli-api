import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiCardsComponent } from './components/api-cards/api-cards.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: ApiCardsComponent}
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
