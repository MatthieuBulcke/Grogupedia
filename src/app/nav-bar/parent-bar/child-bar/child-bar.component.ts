import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-bar',
  templateUrl: './child-bar.component.html',
  styleUrls: ['./child-bar.component.scss']
})
export class ChildBarComponent implements OnInit {

  @Input() categorie!: string;
  @Input() name!: string;

  constructor(private routeur: Router) { }

  ngOnInit(): void {
  }

  onView() {
    this.routeur.navigateByUrl(`${this.categorie}/${this.name}`);
  }
}
