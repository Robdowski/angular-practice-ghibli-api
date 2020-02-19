import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Film } from '../../models/film/Film'

import { Router } from '@angular/router'



@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input() film: Film
  @Output() id = new EventEmitter<string>()

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  onDivClick(id): void { 
    this.id.emit(id)
    this.router.navigate([`films/${id}`])
  }
  



}
