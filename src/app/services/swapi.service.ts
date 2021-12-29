import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  peoples: any = [];
  planets: any = [];
  films: any = [];
  species: any = [];
  vehicles: any = [];
  starships: any = [];

  constructor(private http: HttpClient) { }

  getItems(url: string): Observable<object> {
    return this.http.get(url, httpOptions);
  }

  getElements(elem: any, url: string) {
    this.getItems(url).subscribe((elements: any) => {
      for (let i = 0; i < elements.results.length; i++) {
        elem.push(elements.results[i]);
      }
      if (elements.next) this.getElements(elem, elements.next);;
    })
  }

  getPeoples() {
    this.getElements(this.peoples, 'https://swapi.dev/api/people/');
  }

  getPlanets() {
    this.getElements(this.planets, 'https://swapi.dev/api/planets/');
  }

  getFilms() {
    this.getElements(this.films, 'https://swapi.dev/api/films/');
  }

  getSpecies() {
    this.getElements(this.species, 'https://swapi.dev/api/species/');
  }

  getVehicles() {
    this.getElements(this.vehicles, 'https://swapi.dev/api/vehicles/');
  }

  getStarShips() {
    this.getElements(this.starships, 'https://swapi.dev/api/starships/');
  }
}