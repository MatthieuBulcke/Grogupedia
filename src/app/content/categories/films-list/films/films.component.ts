import { Component, Input, OnInit, } from '@angular/core';
import { Film } from 'src/app/models/film.model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})

export class FilmsComponent implements OnInit {

  @Input() film!: Film;

  constructor() { }

  ngOnInit(): void {
  }
}