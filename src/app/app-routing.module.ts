import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmslistComponent } from './content/categories/films-list/films-list.component';
import { PeopleListComponent } from './content/categories/people-list/people-list.component';
import { PlanetsListComponent } from './content/categories/planets-list/planets-list.component';
import { SpeciesListComponent } from './content/categories/species-list/species-list.component';
import { StarshipsListComponent } from './content/categories/starships-list/starships-list.component';
import { VehiclesListComponent } from './content/categories/vehicles-list/vehicles-list.component';
import { HomeComponent } from './content/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'films', component: FilmslistComponent },
    { path: 'people', component: PeopleListComponent },
    { path: 'planets', component: PlanetsListComponent },
    { path: 'species', component: SpeciesListComponent },
    { path: 'starships', component: StarshipsListComponent },
    { path: 'vehicles', component: VehiclesListComponent }
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