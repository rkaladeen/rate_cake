import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app/app.component';

import { AllCakesComponent } from './all-cakes/all-cakes.component';
import { AddCakeComponent } from './add-cake/add-cake.component';




const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
