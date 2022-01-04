import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';
import { SwapiService } from 'src/app/services/swapi.service';


@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {

  vehicles!: Vehicle[];

  constructor(private swapiservice: SwapiService) { }

  ngOnInit(): void {
    this.vehicles = this.swapiservice.vehicles;
  }
}
