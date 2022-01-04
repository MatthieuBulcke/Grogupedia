import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-single-film',
  templateUrl: './single-film.component.html',
  styleUrls: ['./single-film.component.scss']
})
export class SingleFilmComponent implements OnInit {

  constructor(private swapiservice: SwapiService) { }

  film:any;
  ngOnInit(): void {
    //Rècupère la catégorie et l'id
    let content = document.URL.split('/')
    this.film = this.swapiservice.getItemById(content[3],parseInt(content[4]));
    console.log(this.swapiservice.getItemById(content[3],parseInt(content[4])));
  }

}
