import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';


@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  people!:object[];


  constructor(private SwapiService : SwapiService) {}

  ngOnInit(): void {
  
  this.people=this.SwapiService.getFilms();

}
}
