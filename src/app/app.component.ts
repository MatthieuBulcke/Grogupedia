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

  cats:any = [];
  loadPosts() {
    this.http.get('https://swapi.dev/api/').subscribe((cats) => {
      this.cats = Object.keys(cats);
      console.log(this.cats);
    });
  }
}
