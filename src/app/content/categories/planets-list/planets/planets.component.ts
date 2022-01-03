import { Component, Input, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet.model';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  @Input() planet!: Planet;

  constructor() { }

  ngOnInit(): void {
  }

}
