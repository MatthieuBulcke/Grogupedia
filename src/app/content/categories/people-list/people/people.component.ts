import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { People } from 'src/app/models/people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  @Input() people!: People;

  constructor(private routeur: Router) { }

  ngOnInit(): void {
  }

  onView(): void {
    let url_split = document.URL.split('/');
    let category = url_split[url_split.length - 1];
    this.routeur.navigateByUrl(`${category}/${this.people.id}`);
  }
}
