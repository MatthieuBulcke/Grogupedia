import { Component, Input, OnInit } from '@angular/core';
import { Starship } from 'src/app/models/starship.model';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  @Input() starship!: Starship;

  constructor() { }

  ngOnInit(): void {
  }

}
