import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/app/models/starship.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-single-starship',
  templateUrl: './single-starship.component.html',
  styleUrls: ['./single-starship.component.scss']
})
export class SingleStarshipComponent implements OnInit {

  starship!: Starship;

  constructor(private swapiservice: SwapiService) { }

  ngOnInit(): void {
    let content = document.URL.split('/');
    this.starship = this.swapiservice.getItemById(content[3], parseInt(content[4])) as Starship;
  }

}
