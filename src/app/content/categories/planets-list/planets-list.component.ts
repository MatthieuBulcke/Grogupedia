import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  planets!:object[];

  constructor(private SwapiService : SwapiService) {}

  ngOnInit(): void {
  
  this.planets=this.SwapiService.getPlanets();

}

}
