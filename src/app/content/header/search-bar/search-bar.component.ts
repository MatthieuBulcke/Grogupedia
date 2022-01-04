import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private swapiservice: SwapiService) { }
  people_names!: any[];
  film_titles!:any[];
  ngOnInit(): void {
    this.people_names = this.swapiservice.people_names;
    this.film_titles = this.swapiservice.films_titles;
  }

}
