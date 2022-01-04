import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Planet } from 'src/app/models/planet.model';

@Component({
  selector: 'app-single-planet',
  templateUrl: './single-planet.component.html',
  styleUrls: ['./single-planet.component.scss']
})
export class SinglePlanetComponent implements OnInit {

  planet!:Planet;

  constructor(private swapiservice: SwapiService) { }

  ngOnInit(): void {
    //Rècupère la catégorie et l'id
    let content = document.URL.split('/')
    this.planet = this.swapiservice.getItemById(content[3], parseInt(content[4])) as Planet;
  }

}
