import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  @Input() vehicle!: Vehicle;

  constructor() { }

  ngOnInit(): void {
  }

}
