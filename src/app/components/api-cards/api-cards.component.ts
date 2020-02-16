import { Component, OnInit } from '@angular/core';

import { Film } from '../../models/film/Film'

import { GetDataService } from '../../services/get-data.service'


@Component({
  selector: 'app-api-cards',
  templateUrl: './api-cards.component.html',
  styleUrls: ['./api-cards.component.css']
})
export class ApiCardsComponent implements OnInit {

  films: Film[]

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.getDataService.getFilms().subscribe(films => {
      this.films = films
      console.log(films)
    })
  }

}
