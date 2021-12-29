import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient){
    this.loadPosts();
  }
  title = 'grogupedia';

  /*Variables stockées*/
  cats:any = [];
  people:any = [];


  loadPosts() {
    this.http.get('https://swapi.dev/api/').subscribe((cats) => {
      this.cats = Object.keys(cats);
      console.log(this.cats);
      for(let i = 0;i<this.cats.length;i++){
        let cat = this.cats[i];
        console.log(`https://swapi.dev/api/${cat}/`);
        this.http.get(`https://swapi.dev/api/${cat}/`).subscribe((content) =>{
          console.log(content);
        switch(i){
          case 1:{
            console.log(content)
            break;
          }
          case 2:{
            
          }
        }
        });
      }
    });
  }
}
