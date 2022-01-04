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
  planet_names!:any[];
  species_names!:any[];
  starships_names!:any[];
  vehicles_names!:any[];
  ngOnInit(): void {
    this.people_names = this.swapiservice.people_names;
    this.film_titles = this.swapiservice.films_titles;
    this.planet_names = this.swapiservice.planets_names;
    this.species_names = this.swapiservice.species_names;
    this.starships_names = this.swapiservice.starships_names;
    this.vehicles_names = this.swapiservice.vehicles_names;
  }

}
