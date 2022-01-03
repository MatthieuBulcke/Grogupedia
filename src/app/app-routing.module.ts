import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmslistComponent } from './content/categories/films-list/films-list.component';

const routes: Routes = [
    { path: '', component: FilmslistComponent }
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