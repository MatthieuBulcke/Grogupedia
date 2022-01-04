import { Component, Input, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/models/film.model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})

export class FilmsComponent implements OnInit {

  @Input() film!: Film;

  constructor(private routeur: Router) { }

  ngOnInit(): void {
  }

  onView(): void {
    let url_split = document.URL.split('/');
    let category = url_split[url_split.length - 1];
    this.routeur.navigateByUrl(`${category}/${this.film.id}`);
  }
}