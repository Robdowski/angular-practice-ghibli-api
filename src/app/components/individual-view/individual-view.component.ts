import { Component, OnInit } from '@angular/core';

import { Film } from '../../models/film/Film'

import { GetDataService } from '../../services/get-data.service'

import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-individual-view',
  templateUrl: './individual-view.component.html',
  styleUrls: ['./individual-view.component.css']
})
export class IndividualViewComponent implements OnInit {
  film: Film

  constructor(
    private getDataService: GetDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.getDataService.getFilmById(id).subscribe(film => {
      this.film = film
    })
  }

}
