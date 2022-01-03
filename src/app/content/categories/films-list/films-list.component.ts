import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})



export class FilmslistComponent implements OnInit {

  films!: Film[];

  constructor(private swapiservice: SwapiService) { }

  ngOnInit(): void {
    this.films = this.swapiservice.films;
  }

}
