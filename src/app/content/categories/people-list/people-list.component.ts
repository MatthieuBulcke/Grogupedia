import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  people!:object[];

  constructor(private SwapiService : SwapiService) {}

  ngOnInit(): void {
  
  this.people=this.SwapiService.people;

}
}
