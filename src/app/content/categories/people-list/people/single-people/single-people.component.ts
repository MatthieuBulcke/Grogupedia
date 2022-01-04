import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { People } from 'src/app/models/people.model';

@Component({
  selector: 'app-single-people',
  templateUrl: './single-people.component.html',
  styleUrls: ['./single-people.component.scss']
})
export class SinglePeopleComponent implements OnInit {

  people!:People;

  constructor(private swapiservice: SwapiService) { }

  ngOnInit(): void {
    //Rècupère la catégorie et l'id
    let content = document.URL.split('/')
    this.people = this.swapiservice.getItemById(content[3], parseInt(content[4])) as People;
  }

}
