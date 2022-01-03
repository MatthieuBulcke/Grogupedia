import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';

let parentSideBar = document.getElementById("parentBar");
let childSideBar = document.getElementById("childBar");

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private service:SwapiService) { }
  peoplesNames:any;
  planetsNames:any;
  filmsNames:any;
  speciesNames:any;
  vehiclesNames:any;
  starshipsNames:any;
  ngOnInit(): void {
    this.peoplesNames = this.service.getPeoplesNames();
    this.planetsNames = this.service.getPlanetsNames();
    this.filmsNames = this.service.getMoviesTitles();
    this.speciesNames = this.service.getSpeciesNames();
    this.vehiclesNames = this.service.getVehiclesNames();
    this.starshipsNames = this.service.getStarshipsNames();
  }

}

// parentSideBar addEventListener("mouseover", function( event ) {
//   // on met l'accent sur la cible de mouseover
//   event.target.style.display = "flex";


//   // on réinitialise la couleur après quelques instants
//   setTimeout(function() {
//     event.target.style.color = "";
//   }, 500);
// }, false);

window.addEventListener("click", display)

function display(){
  let childSideBar = document.getElementsByClassName("childBar");
 for(let i=0; i<childSideBar.length; i++){
   childSideBar[i].classList.toggle("display")
 }
 console.log(childSideBar)
}


