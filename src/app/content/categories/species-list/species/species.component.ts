import { Component, Input, OnInit } from '@angular/core';
import { Specie } from 'src/app/models/specie.model';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  @Input() specie!: Specie;

  constructor() { }

  ngOnInit(): void {
  }

}
