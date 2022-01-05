import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private swapiservice: SwapiService, private router:Router) { }
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
  search():void{
    let options = document.getElementsByTagName('option') as HTMLCollectionOf<HTMLElement>;
    let input = document.getElementsByTagName('input');
    console.log(input[0].value);
    for(let i=0;i<options.length;i++){
      if(input[0].value == options[i].getAttribute('value')){
        console.log(options[i].getAttribute('data-cat'));
        let object = this.swapiservice.getItem(options[i].getAttribute('data-cat')!,input[0].value);
        this.router.navigateByUrl(options[i].getAttribute('data-cat')!+"/"+object.id);
      }
    }
  }
}
