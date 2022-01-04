import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/app/models/starship.model';
import { SwapiService } from 'src/app/services/swapi.service';


@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  starships!: Starship[];


  constructor(private swapiservice: SwapiService) { }

  ngOnInit(): void {
    this.starships = this.swapiservice.starships;
  }
}
