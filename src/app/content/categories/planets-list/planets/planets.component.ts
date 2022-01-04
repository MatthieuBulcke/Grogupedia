import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Planet } from 'src/app/models/planet.model';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  @Input() planet!: Planet;

  constructor(private routeur: Router) { }

  ngOnInit(): void {
  }

  onView(): void {
    let url_split = document.URL.split('/');
    let category = url_split[url_split.length - 1];
    console.log(category);
    this.routeur.navigateByUrl(`${category}/${this.planet.id}`);
  }
}
