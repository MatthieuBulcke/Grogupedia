import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Specie } from 'src/app/models/specie.model';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  @Input() specie!: Specie;

  constructor(private routeur: Router) { }

  ngOnInit(): void {
  }

  onView(): void {
    let url_split = document.URL.split('/');
    let category = url_split[url_split.length - 1];
    console.log(category);
    this.routeur.navigateByUrl(`${category}/${this.specie.id}`);
  }
}
