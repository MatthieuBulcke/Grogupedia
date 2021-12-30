import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.loadPosts();
  }

  ngOnInit(): void {
  }
  

  /*Variables stockées*/
  cats: string[] = [];
  peoplesNames: string[] = [];
  planetsNames: string[] = [];
  filmsNames: string[] = [];
  speciesNames: string[] = [];
  vehiclesNames: string[] = [];
  starshipsNames: string[] = [];



  loadPosts() {
    this.http.get('https://swapi.dev/api/').subscribe((cats) => {
      this.cats = Object.keys(cats);
      //console.log(this.cats);
      for (let i = 0; i < this.cats.length; i++) {
        let cat = this.cats[i];
        //console.log(`https://swapi.dev/api/${cat}/?page=${i}`);
        this.http.get(`https://swapi.dev/api/${cat}/?page=1`).subscribe((content: any) => {
          //console.log(cat);
          //console.log(Object.values(content)[0])
          let fruitLoops = Math.ceil(content.count / 10);
          //console.log(fruitLoops);
          if (cat === "people") {
            for (let j = 1; j <= fruitLoops; j++) {
              //console.log(`https://swapi.dev/api/${cat}/?page=${k}`)
              this.http.get(`https://swapi.dev/api/${cat}/?page=${j}`).subscribe((peoples: any) => {
                //console.log(peoples);
                for (let k = 0; k < peoples.results.length; k++) {
                  this.peoplesNames.push(peoples.results[k].name);
                  if (this.peoplesNames.length == content.count) {
                    this.peoplesNames = this.peoplesNames.sort();
                  }
                }
              });
            }
          }
          else if (cat === "planets") {
            for (let j = 1; j <= fruitLoops; j++) {
              //console.log(`https://swapi.dev/api/${cat}/?page=${k}`)
              this.http.get(`https://swapi.dev/api/${cat}/?page=${j}`).subscribe((planets: any) => {
                //console.log(planets);
                for (let k = 0; k < planets.results.length; k++) {
                  this.planetsNames.push(planets.results[k].name);
                }
              });
            }
          }
          else if (cat === "films") {
            for (let j = 1; j <= fruitLoops; j++) {
              //console.log(`https://swapi.dev/api/${cat}/?page=${k}`)
              this.http.get(`https://swapi.dev/api/${cat}/?page=${j}`).subscribe((films: any) => {
                //console.log(planets);
                for (let k = 0; k < films.results.length; k++) {
                  this.filmsNames.push(films.results[k].title);
                }
              });
            }
          }
          else if (cat === "species") {
            for (let j = 1; j <= fruitLoops; j++) {
              //console.log(`https://swapi.dev/api/${cat}/?page=${k}`)
              this.http.get(`https://swapi.dev/api/${cat}/?page=${j}`).subscribe((species: any) => {
                //console.log(planets);
                for (let k = 0; k < species.results.length; k++) {
                  this.speciesNames.push(species.results[k].name);
                }
              });
            }
          }
          else if (cat === "vehicles") {
            for (let j = 1; j <= fruitLoops; j++) {
              //console.log(`https://swapi.dev/api/${cat}/?page=${k}`)
              this.http.get(`https://swapi.dev/api/${cat}/?page=${j}`).subscribe((vehicles: any) => {
                //console.log(planets);
                for (let k = 0; k < vehicles.results.length; k++) {
                  this.vehiclesNames.push(vehicles.results[k].name);
                }
              });
            }
          }
          else if (cat === "starships") {
            for (let j = 1; j <= fruitLoops; j++) {
              //console.log(`https://swapi.dev/api/${cat}/?page=${k}`)
              this.http.get(`https://swapi.dev/api/${cat}/?page=${j}`).subscribe((starships: any) => {
                //console.log(planets);
                for (let k = 0; k < starships.results.length; k++) {
                  this.starshipsNames.push(starships.results[k].name);
                }
              });
            }
          }
        });
      }
      // console.log(this.peoplesNames);
      // console.log(this.planetsNames);
      // console.log(this.filmsNames);
      //console.log(this.speciesNames);
      //console.log(this.vehiclesNames);
      //console.log(this.starshipsNames);
    });
  }
}
