import { Component, Input, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-parent-bar',
  templateUrl: './parent-bar.component.html',
  styleUrls: ['./parent-bar.component.scss']
})
export class ParentBarComponent implements OnInit {

  @Input() categorie!: string;
  names!: string[];

  constructor(private swapiservice: SwapiService) { }

  ngOnInit(): void {
    this.names = this.swapiservice.getNames(this.categorie);
  }

}
