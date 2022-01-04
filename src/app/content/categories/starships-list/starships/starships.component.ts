import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Starship } from 'src/app/models/starship.model';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  @Input() starship!: Starship;

  constructor(private routeur: Router) { }

  ngOnInit(): void {
  }

  onView(): void {
    let url_split = document.URL.split('/');
    let category = url_split[url_split.length - 1];
    this.routeur.navigateByUrl(`${category}/${this.starship.id}`);
  }
}
