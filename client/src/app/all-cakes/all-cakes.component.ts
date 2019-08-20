import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpService } from '../http.service';


@Component({
  selector: 'all-cakes',
  templateUrl: './all-cakes.component.html',
  styleUrls: ['../app.component.css']
})
export class AllCakesComponent implements OnInit {
  cakes: any;
  reviews: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      console.log(data);
      this.cakes = data;
    })
  }

  submitReview(cake_id: String) {
    console.log("Review Submitted");
  }

  viewCake(cake_id: String) {
    console.log("View Cake Clicked")
  }
}
