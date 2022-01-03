import { Component, OnInit } from '@angular/core';
import { Specie } from 'src/app/models/specie.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnInit {

  species!:Specie[];

  constructor(private SwapiService : SwapiService) {}

  ngOnInit(): void {
  
  this.species=this.SwapiService.species;
}
}
