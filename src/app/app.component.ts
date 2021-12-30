import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {
    this.loadPosts();
  }
  title = 'grogupedia';

  /*Variables stockées*/
  cats: any = [];
  peoplesNames: any = [];
  planetsNames:any = [];
  filmsNames:any = [];


  loadPosts() {
    this.http.get('https://swapi.dev/api/').subscribe((cats) => {
      this.cats = Object.keys(cats);
      //console.log(this.cats);
      for (let i = 0; i < this.cats.length; i++) {
        let cat = this.cats[i];
        //console.log(`https://swapi.dev/api/${cat}/?page=${i}`);
        this.http.get(`https://swapi.dev/api/${cat}/?page=1`).subscribe((content:any) => {
          //console.log(cat);
          //console.log(Object.values(content)[0])
          let fruitLoops = Math.ceil(content.count/10);
          //console.log(fruitLoops);
          if (cat === "people") {
            for (let j = 1; j <= fruitLoops; j++) {
              //console.log(`https://swapi.dev/api/${cat}/?page=${k}`)
              this.http.get(`https://swapi.dev/api/${cat}/?page=${j}`).subscribe((peoples: any) => {
                //console.log(peoples);
                for(let k=0;k<peoples.results.length;k++){
                  this.peoplesNames.push(peoples.results[k].name);
                }
              });
            }
          }
          else if(cat === "planets"){
            for (let j = 1; j <= fruitLoops; j++) {
              //console.log(`https://swapi.dev/api/${cat}/?page=${k}`)
              this.http.get(`https://swapi.dev/api/${cat}/?page=${j}`).subscribe((planets: any) => {
                //console.log(planets);
                for(let k=0;k<planets.results.length;k++){
                  this.planetsNames.push(planets.results[k].name);
                }
              });
            }
          }
        });
      }
      console.log(this.peoplesNames);
      console.log(this.planetsNames);
    });
  }
}
