import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';


@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {

  vehicles!:object[];


  constructor(private SwapiService : SwapiService) {}

  ngOnInit(): void {
  
  this.vehicles=this.SwapiService.getVehicles();

}
}
