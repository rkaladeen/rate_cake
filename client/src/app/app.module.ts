import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { AddCakeComponent } from './add-cake/add-cake.component';
import { ViewCakeComponent } from './view-cake/view-cake.component';
import { AllCakesComponent } from './all-cakes/all-cakes.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCakeComponent,
    ViewCakeComponent,
    AllCakesComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,  
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
