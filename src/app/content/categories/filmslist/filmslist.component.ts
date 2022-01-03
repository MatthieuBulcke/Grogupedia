import { Component, OnInit, Input } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { FilmsComponent } from '../films/films.component';


@Component({
  selector: 'app-filmslist',
  templateUrl: './filmslist.component.html',
  styleUrls: ['./filmslist.component.scss']
})



export class FilmslistComponent implements OnInit {

  films!:object[];


  constructor(private SwapiService : SwapiService) {}

  ngOnInit(): void {
  
  this.films=this.SwapiService.getFilms();

  }

}
