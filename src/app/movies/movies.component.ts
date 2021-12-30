import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {
  
      title! : String;
      episode_id! : Number;
      opening_crawl! :String;
      director! :String;
      producer!:String;
      release_date! :String; 
      species!:string[];
      starships! :string[];
      vehicles! :string[];
      characters!:string[];
      planets!:string[];
      urlApi! :String;
      created! :String;
      edited! :String;

  constructor(

  ) {}

  ngOnInit(): void {
    
    this.title = "A New Hope";
    this.episode_id = 4;
    this.opening_crawl="It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....";
    this.director ="George Lucas";
    this.producer="Gary Kurtz, Rick McCallum";
    this.release_date ="1977-05-25";
    this.starships =["https://swapi.dev/api/starships/2/", 
    "https://swapi.dev/api/starships/3/", 
    "https://swapi.dev/api/starships/5/", 
    "https://swapi.dev/api/starships/9/", 
    "https://swapi.dev/api/starships/10/", 
    "https://swapi.dev/api/starships/11/", 
    "https://swapi.dev/api/starships/12/", 
    "https://swapi.dev/api/starships/13/"];
    this.vehicles =["https://swapi.dev/api/vehicles/4/", 
    "https://swapi.dev/api/vehicles/6/", 
    "https://swapi.dev/api/vehicles/7/", 
    "https://swapi.dev/api/vehicles/8/"];
    this.characters=[ "https://swapi.dev/api/people/1/", 
    "https://swapi.dev/api/people/2/", 
    "https://swapi.dev/api/people/3/", 
    "https://swapi.dev/api/people/4/", 
    "https://swapi.dev/api/people/5/", 
    "https://swapi.dev/api/people/6/", 
    "https://swapi.dev/api/people/7/", 
    "https://swapi.dev/api/people/8/", 
    "https://swapi.dev/api/people/9/", 
    "https://swapi.dev/api/people/10/", 
    "https://swapi.dev/api/people/12/", 
    "https://swapi.dev/api/people/13/", 
    "https://swapi.dev/api/people/14/", 
    "https://swapi.dev/api/people/15/", 
    "https://swapi.dev/api/people/16/", 
    "https://swapi.dev/api/people/18/", 
    "https://swapi.dev/api/people/19/", 
    "https://swapi.dev/api/people/81/"];
    this.planets=["https://swapi.dev/api/planets/1/", 
    "https://swapi.dev/api/planets/2/", 
    "https://swapi.dev/api/planets/3/"];
    this.urlApi ="https://swapi.dev/api/films/1/";
    this.created ="2014-12-10T14:23:31.880000Z";
    this.edited ="2014-12-12T11:24:39.858000Z";
  
  }
}
