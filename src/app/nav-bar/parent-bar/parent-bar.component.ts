import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-parent-bar',
  templateUrl: './parent-bar.component.html',
  styleUrls: ['./parent-bar.component.scss']
})
export class ParentBarComponent implements OnInit {

  @Input() categorie!: string;
  names!: string[];

  constructor(private swapiservice: SwapiService, private routeur: Router) { }

  ngOnInit(): void {
    this.names = this.swapiservice.getNames(this.categorie);
  }

  onDisplayCategoryPage(): void {
    this.routeur.navigateByUrl(this.categorie);
  }

  onDisplayChildBar(): void {
    let childs = document.getElementsByClassName(`${this.categorie}-child-bar`);
    for (let i = 0; i < childs.length; i++) {
      if (childs[i].classList.contains('hide')) {
        childs[i].classList.remove('hide');
      } else {
        childs[i].classList.add('hide');
      }
    }
  }
}
