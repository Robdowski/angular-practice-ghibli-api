import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Film } from '../models/film/Film'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class GetDataService {

  baseUrl:string = 'https://ghibliapi.herokuapp.com'
  filmsEndpoint:string = '/films'

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film []>{
    return this.http.get<Film []>(`${this.baseUrl}${this.filmsEndpoint}`)
  }

}
