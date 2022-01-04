import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmslistComponent } from './content/categories/films-list/films-list.component';
import { SingleFilmComponent } from './content/categories/films-list/films/single-film/single-film.component';
import { PeopleListComponent } from './content/categories/people-list/people-list.component';
import { SinglePeopleComponent } from './content/categories/people-list/people/single-people/single-people.component';
import { PlanetsListComponent } from './content/categories/planets-list/planets-list.component';
import { SinglePlanetComponent } from './content/categories/planets-list/planets/single-planet/single-planet.component';
import { SpeciesListComponent } from './content/categories/species-list/species-list.component';
import { SingleSpecieComponent } from './content/categories/species-list/species/single-specie/single-specie.component';
import { StarshipsListComponent } from './content/categories/starships-list/starships-list.component';
import { SingleStarshipComponent } from './content/categories/starships-list/starships/single-starship/single-starship.component';
import { VehiclesListComponent } from './content/categories/vehicles-list/vehicles-list.component';
import { SingleVehicleComponent } from './content/categories/vehicles-list/vehicles/single-vehicle/single-vehicle.component';
import { HomeComponent } from './content/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'films', component: FilmslistComponent },
    { path: 'films/:title', component: SingleFilmComponent },
    { path: 'people', component: PeopleListComponent },
    { path: 'people/:name', component: SinglePeopleComponent },
    { path: 'planets', component: PlanetsListComponent },
    { path: 'planets/:name', component: SinglePlanetComponent },
    { path: 'species', component: SpeciesListComponent },
    { path: 'species/:name', component: SingleSpecieComponent },
    { path: 'starships', component: StarshipsListComponent },
    { path: 'starships/:name', component: SingleStarshipComponent },
    { path: 'vehicles', component: VehiclesListComponent },
    { path: 'vehicles/:name', component: SingleVehicleComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }