import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  planets!: Planet[];

  constructor(private swapiservice: SwapiService) { }

  ngOnInit(): void {
    this.planets = this.swapiservice.planets;
  }

}
