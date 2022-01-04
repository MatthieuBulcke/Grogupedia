import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle.model';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  @Input() vehicle!: Vehicle;

  constructor(private routeur: Router) { }

  ngOnInit(): void {
  }

  onView(): void {
    let url_split = document.URL.split('/');
    let category = url_split[url_split.length - 1];
    this.routeur.navigateByUrl(`${category}/${this.vehicle.id}`);
  }
}
