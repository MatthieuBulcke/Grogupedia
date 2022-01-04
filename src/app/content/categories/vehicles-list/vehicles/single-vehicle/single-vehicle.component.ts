import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-single-vehicle',
  templateUrl: './single-vehicle.component.html',
  styleUrls: ['./single-vehicle.component.scss']
})
export class SingleVehicleComponent implements OnInit {

  vehicle!: Vehicle;

  constructor(private swapiservice: SwapiService) { }

  ngOnInit(): void {
    let content = document.URL.split('/');
    this.vehicle = this.swapiservice.getItemById(content[3], parseInt(content[4])) as Vehicle;
  }

}
