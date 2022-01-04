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

  loadItems(id: number, elem: Film[] | People[] | Planet[] | Specie[] | Starship[] | Vehicle[], elem_names: string[], url: string): void {
    let items = this.http.get(url, httpOptions);
    items.subscribe((elements: any) => {
      for (let i = 0; i < elements.results.length; i++) {
        elements.results[i].id = id++;
        elem.push(elements.results[i]);
        elements.results[i].title ? elem_names.push(elements.results[i].title) : elem_names.push(elements.results[i].name);
      }
      if (elements.next) this.loadItems(id, elem, elem_names, elements.next);
    })
  }

  loadAll(): void {
    this.loadItems(1, this.films, this.films_titles, 'https://swapi.dev/api/films/');
    this.loadItems(1, this.people, this.people_names, 'https://swapi.dev/api/people/');
    this.loadItems(1, this.planets, this.planets_names, 'https://swapi.dev/api/planets/');
    this.loadItems(1, this.species, this.species_names, 'https://swapi.dev/api/species/');
    this.loadItems(1, this.starships, this.starships_names, 'https://swapi.dev/api/starships/');
    this.loadItems(1, this.vehicles, this.vehicles_names, 'https://swapi.dev/api/vehicles/');
  }

  getItems(cat: string): Film[] | People[] | Planet[] | Specie[] | Starship[] | Vehicle[] {
    let objs: Film[] | People[] | Planet[] | Specie[] | Starship[] | Vehicle[] = [];
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
    let titles_or_names: string[] = [];
    switch (cat) {
      case 'films':
        titles_or_names = this.films_titles;
        break;
      case 'people':
        titles_or_names = this.people_names;
        break;
      case 'planets':
        titles_or_names = this.planets_names;
        break;
      case 'species':
        titles_or_names = this.species_names;
        break;
      case 'starships':
        titles_or_names = this.starships_names;
        break;
      case 'vehicles':
        titles_or_names = this.vehicles_names;
    }
    return titles_or_names;
  }

  getItem(cat: string, key: string): Film | People | Planet | Specie | Starship | Vehicle | null {
    let obj: Film | People | Planet | Specie | Starship | Vehicle | null = null;
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

  getItemById(cat: string, id: number): Film | People | Planet | Specie | Starship | Vehicle | null {
    let obj: Film | People | Planet | Specie | Starship | Vehicle | null = null;
    switch (cat) {
      case 'films':
        this.films.forEach((element: any) => { if (element.id === id) obj = element });
        break;
      case 'people':
        this.people.forEach((element: any) => { if (element.id === id) obj = element });
        break;
      case 'planets':
        this.planets.forEach((element: any) => { if (element.id === id) obj = element });
        break;
      case 'species':
        this.species.forEach((element: any) => { if (element.id === id) obj = element });
        break;
      case 'starships':
        this.starships.forEach((element: any) => { if (element.id === id) obj = element });
        break;
      case 'vehicles':
        this.vehicles.forEach((element: any) => { if (element.id === id) obj = element });
    }
    return obj;
  }

}