import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpService } from '../http.service';



@Component({
  selector: 'all-cakes',
  templateUrl: './all-cakes.component.html',
  styleUrls: ['../app.component.css']
})
export class AllCakesComponent implements OnInit {
  cakes: any;
  @Output() cakeViewEvent = new EventEmitter();

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      console.log(data);
      this.cakes = data;
    })
  }

  viewCake(cake: any) {
    console.log("View Cake Clicked")
    // console.log(cake)
    this.cakeViewEvent.emit(cake);
  }
}
