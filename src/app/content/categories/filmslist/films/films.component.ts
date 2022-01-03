import { Component, Input, OnInit,} from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})

export class FilmsComponent implements OnInit {

    @Input() film!:object;
    title! : String;
    // @Input()episode_id! : Number;
    // @Input()opening_crawl! :String;
    // @Input() director! :String;
    // @Input() producer!:String;
    // @Input() release_date! :String; 
    // @Input()  species!:string[];
    // @Input() starships! :string[];
    // @Input() vehicles! :string[];
    // @Input() characters!:string[];
    // @Input() planets!:string[];
    // @Input() urlApi! :String;
    // @Input() created! :String;
    // @Input() edited! :String;

  constructor() {}

  ngOnInit(): void {
    this.title = this.films["title"];
  }
}