import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';

const routes: Routes = [
  {path:'',component:MovieListComponent},
  {path:'add',component:MovieAddComponent},
  {path:'edit/:id',component:MovieEditComponent},
  {path:'**',redirectTo:""},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
