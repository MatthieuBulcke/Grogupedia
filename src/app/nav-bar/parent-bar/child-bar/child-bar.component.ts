import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-child-bar',
  templateUrl: './child-bar.component.html',
  styleUrls: ['./child-bar.component.scss']
})
export class ChildBarComponent implements OnInit {

  @Input() categorie!: string;
  @Input() name!: string;

  constructor(private swapiservice: SwapiService, private routeur: Router) { }

  ngOnInit(): void {
  }

  onView() {
    this.routeur.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.routeur.navigateByUrl(`${this.categorie}/${this.swapiservice.getItem(this.categorie, this.name)?.id}`));
  }
}
