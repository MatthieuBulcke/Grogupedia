import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  categories: string[] = ['films', 'people', 'planets', 'species', 'starships', 'vehicles'];
  films: object[] = [];
  films_titles: string[] = [];
  people: object[] = [];
  people_names: string[] = [];
  planets: object[] = [];
  planets_names: string[] = [];
  species: object[] = [];
  species_names: string[] = [];
  starships: object[] = [];
  starships_names: string[] = [];
  vehicles: object[] = [];
  vehicles_names: string[] = [];

  constructor(private http: HttpClient) { }

  loadItems(elem: object[], elem_names: string[], url: string): void {
    let items = this.http.get(url, httpOptions);
    items.subscribe((elements: any) => {
      for (let i = 0; i < elements.results.length; i++) {
        elem.push(elements.results[i]);
        elements.results[i].title ? elem_names.push(elements.results[i].title) : elem_names.push(elements.results[i].name);
      }
      if (elements.next) this.loadItems(elem, elem_names, elements.next);
    })
  }

  getObject(cat: string, key: string): object {
    let obj: object = {};
    switch (cat) {
      case 'films':
        this.films.forEach((element: any) => { if (element.title === key) obj = element });
        break;
      case 'people':
        this.people.forEach((element: any) => { if (element.name === key) obj = element });
        break;
      case 'planets':
        this.planets.forEach((element: any) => { if (element.name === key) obj = element });
        break;
      case 'species':
        this.species.forEach((element: any) => { if (element.name === key) obj = element });
        break;
      case 'starships':
        this.starships.forEach((element: any) => { if (element.name === key) obj = element });
        break;
      case 'vehicles':
        this.vehicles.forEach((element: any) => { if (element.name === key) obj = element });
    }
    return obj;
  }

  getFilms(): object[] {
    if (this.films.length === 0) {
      this.loadItems(this.films, this.films_titles, 'https://swapi.dev/api/films/');
    }
    return this.films;
  }

  getFilmsTitles(): string[] {
    this.getFilms();
    return this.films_titles;
  }

  getPeoples(): object[] {
    if (this.people.length === 0) {
      this.loadItems(this.people, this.people_names, 'https://swapi.dev/api/people/');
    }
    return this.people;
  }

  getPeoplesNames(): string[] {
    this.getPeoples();
    return this.people_names;
  }

  getPlanets(): object[] {
    if (this.planets.length === 0) {
      this.loadItems(this.planets, this.planets_names, 'https://swapi.dev/api/planets/');
    }
    return this.planets;
  }

  getPlanetsNames(): string[] {
    this.getPlanets();
    return this.planets_names;
  }

  getSpecies(): object[] {
    if (this.species.length === 0) {
      this.loadItems(this.species, this.species_names, 'https://swapi.dev/api/species/');
    }
    return this.species;
  }

  getSpeciesNames(): string[] {
    this.getSpecies();
    return this.species_names;
  }

  getStarships(): object[] {
    if (this.starships.length === 0) {
      this.loadItems(this.starships, this.starships_names, 'https://swapi.dev/api/starships/');
    }
    return this.starships;
  }

  getStarshipsNames(): string[] {
    this.getStarships();
    return this.starships_names;
  }

  getVehicles(): object[] {
    if (this.vehicles.length === 0) {
      this.loadItems(this.vehicles, this.vehicles_names, 'https://swapi.dev/api/vehicles/');
    }
    return this.vehicles;
  }

  getVehiclesNames(): string[] {
    this.getVehicles();
    return this.vehicles_names;
  }
}