import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  name!:string;
  birth_year!:string;
  eye_color!:string;
  gender!:string;
  hair_color!:string;
  height!:string;
  mass!:string;
  skin_color!:string;
  homeworld!:string;
  films!:string[];
  species!:string[];
  starships!:string[];
  vehicles!:string[];
  urlApi!:string;
  created!:string;
  edited!:string;

  constructor() { }

  ngOnInit(): void {

    this.name="Luke Skywalker";
    this.height= "172";
    this.mass= "77";
    this.hair_color= "blond";
    this.skin_color= "fair";
    this.eye_color="blue";
    this.birth_year= "19BBY";
    this.gender= "male";
    this.homeworld= "https://swapi.dev/api/planets/1/";
    this.films= [
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/6/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/7/"
    ];
    this.species= [
      "https://swapi.dev/api/species/1/"
    ];
    this.vehicles= [
      "https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/30/"
    ];
    this.starships= [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/"
    ];
    this.created= "2014-12-09T13:50:51.644000Z";
    this.edited= "2014-12-20T21:17:56.891000Z";
    this.urlApi= "https://swapi.dev/api/people/1/";



  }

}
