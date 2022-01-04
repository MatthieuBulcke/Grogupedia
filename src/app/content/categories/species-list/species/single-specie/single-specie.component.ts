import { Component, OnInit } from '@angular/core';
import { Specie } from 'src/app/models/specie.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-single-specie',
  templateUrl: './single-specie.component.html',
  styleUrls: ['./single-specie.component.scss']
})
export class SingleSpecieComponent implements OnInit {

  specie!: Specie;

  constructor(private swapiservice: SwapiService) { }

  ngOnInit(): void {
    let content = document.URL.split('/');
    this.specie = this.swapiservice.getItemById(content[3], parseInt(content[4])) as Specie;
  }

}
