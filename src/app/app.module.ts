import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'; import { NavComponent } from './nav-bar/nav/nav.component';
import { HeaderComponent } from './content/header/header.component';
import { SearchBarComponent } from './content/header/search-bar/search-bar.component';
import { ContentComponent } from './content/content.component';
import { FilmsComponent } from './content/categories/filmslist/films/films.component';
import { PeopleComponent } from './content/categories/people-list/people/people.component';
import { PlanetsComponent } from './content/categories/planets-list/planets/planets.component';
import { SpeciesComponent } from './content/categories/species-list/species/species.component';
import { StarshipsComponent } from './content/categories/starships-list/starships/starships.component';
import { VehiclesComponent } from './content/categories/vehicles-list/vehicles/vehicles.component';
import { FilmslistComponent } from './content/categories/filmslist/filmslist.component';
import { PeopleListComponent } from './content/categories/people-list/people-list.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { SpeciesListComponent } from './species-list/species-list.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { VehiclesListComponent } from './content/categories/vehicles-list/vehicles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavComponent,
    HeaderComponent,
    SearchBarComponent,
    ContentComponent,
    FilmsComponent,
    PeopleComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    FilmslistComponent,
    PeopleListComponent,
    PlanetsListComponent,
    SpeciesListComponent,
    StarshipsListComponent,
    VehiclesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
