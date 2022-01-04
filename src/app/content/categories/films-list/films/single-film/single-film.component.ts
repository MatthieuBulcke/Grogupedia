import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-single-film',
  templateUrl: './single-film.component.html',
  styleUrls: ['./single-film.component.scss']
})
export class SingleFilmComponent implements OnInit {

  film!: Film;

  constructor(private swapiservice: SwapiService) { }
  
  ngOnInit(): void {
    //Rècupère la catégorie et l'id
    let content = document.URL.split('/')
    this.film = this.swapiservice.getItemById(content[3], parseInt(content[4])) as Film;
  }

}