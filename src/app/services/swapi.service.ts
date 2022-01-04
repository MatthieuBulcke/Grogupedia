import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Film } from '../models/film.model';
import { People } from '../models/people.model';
import { Planet } from '../models/planet.model';
import { Specie } from '../models/specie.model';
import { Starship } from '../models/starship.model';
import { Vehicle } from '../models/vehicle.model';

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
  films: Film[] = [];
  films_titles: string[] = [];
  people: People[] = [];
  people_names: string[] = [];
  planets: Planet[] = [];
  planets_names: string[] = [];
  species: Specie[] = [];
  species_names: string[] = [];
  starships: Starship[] = [];
  starships_names: string[] = [];
  vehicles: Vehicle[] = [];
  vehicles_names: string[] = [];

  constructor(private http: HttpClient) { }

  loadItems(elem: Film[] | People[] | Planet[] | Specie[] | Starship[] | Vehicle[], elem_names: string[], url: string): void {
    let items = this.http.get(url, httpOptions);
    items.subscribe((elements: any) => {
      for (let i = 0; i < elements.results.length; i++) {
        let url_split = elements.results[i].url.split('/');
        elements.results[i].id = parseInt(url_split[url_split.length - 2]);
        elem.push(elements.results[i]);
        elements.results[i].title ? elem_names.push(elements.results[i].title) : elem_names.push(elements.results[i].name);
      }
      if (elements.next) this.loadItems(elem, elem_names, elements.next);
    })
  }

  loadAll(): void {
    this.loadItems(this.films, this.films_titles, 'https://swapi.dev/api/films/');
    this.loadItems(this.people, this.people_names, 'https://swapi.dev/api/people/');
    this.loadItems(this.planets, this.planets_names, 'https://swapi.dev/api/planets/');
    this.loadItems(this.species, this.species_names, 'https://swapi.dev/api/species/');
    this.loadItems(this.starships, this.starships_names, 'https://swapi.dev/api/starships/');
    this.loadItems(this.vehicles, this.vehicles_names, 'https://swapi.dev/api/vehicles/');
  }

  getItems(cat: string): Film[] | People[] | Planet[] | Specie[] | Starship[] | Vehicle[] {
    let objs!: Film[] | People[] | Planet[] | Specie[] | Starship[] | Vehicle[];
    switch (cat) {
      case 'films':
        objs = this.films;
        break;
      case 'people':
        objs = this.people;
        break;
      case 'planets':
        objs = this.planets;
        break;
      case 'species':
        objs = this.species;
        break;
      case 'starships':
        objs = this.starships;
        break;
      case 'vehicles':
        objs = this.vehicles;
    }
    return objs;
  }

  getNames(cat: string): string[] {
    let names!: string[];
    switch (cat) {
      case 'films':
        names = this.films_titles;
        break;
      case 'people':
        names = this.people_names;
        break;
      case 'planets':
        names = this.planets_names;
        break;
      case 'species':
        names = this.species_names;
        break;
      case 'starships':
        names = this.starships_names;
        break;
      case 'vehicles':
        names = this.vehicles_names;
    }
    return names;
  }

  getItem(cat: string, key: string): Film | People | Planet | Specie | Starship | Vehicle {
    let obj!: Film | People | Planet | Specie | Starship | Vehicle;
    switch (cat) {
      case 'films':
        this.films.forEach((element: Film) => { if (element.title === key) obj = element });
        break;
      case 'people':
        this.people.forEach((element: People) => { if (element.name === key) obj = element });
        break;
      case 'planets':
        this.planets.forEach((element: Planet) => { if (element.name === key) obj = element });
        break;
      case 'species':
        this.species.forEach((element: Specie) => { if (element.name === key) obj = element });
        break;
      case 'starships':
        this.starships.forEach((element: Starship) => { if (element.name === key) obj = element });
        break;
      case 'vehicles':
        this.vehicles.forEach((element: Vehicle) => { if (element.name === key) obj = element });
    }
    return obj;
  }

  getItemById(cat: string, id: number): Film | People | Planet | Specie | Starship | Vehicle | null {
    let obj!: Film | People | Planet | Specie | Starship | Vehicle;
    switch (cat) {
      case 'films':
        this.films.forEach((element: Film): void => { if (element.id === id) obj = element });
        break;
      case 'people':
        this.people.forEach((element: People): void => { if (element.id === id) obj = element });
        break;
      case 'planets':
        this.planets.forEach((element: Planet): void => { if (element.id === id) obj = element });
        break;
      case 'species':
        this.species.forEach((element: Specie): void => { if (element.id === id) obj = element });
        break;
      case 'starships':
        this.starships.forEach((element: Starship): void => { if (element.id === id) obj = element });
        break;
      case 'vehicles':
        this.vehicles.forEach((element: Vehicle): void => { if (element.id === id) obj = element });
    }
    return obj;
  }

}