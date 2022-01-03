import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-bar',
  templateUrl: './child-bar.component.html',
  styleUrls: ['./child-bar.component.scss']
})
export class ChildBarComponent implements OnInit {

  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
