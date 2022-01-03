import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { SwapiService } from 'src/app/services/swapi.service';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  peoples!:People[];

  constructor(private SwapiService : SwapiService) {}

  ngOnInit(): void {
  
  this.peoples=this.SwapiService.people;

}
}
