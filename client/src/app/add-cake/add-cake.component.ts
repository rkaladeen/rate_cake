import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpService } from '../http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'add-cake',
  templateUrl: './add-cake.component.html',
  styleUrls: ['../app.component.css']
})
export class AddCakeComponent implements OnInit {
  newCake: FormGroup;
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.newCake = new FormGroup({
      'baker': new FormControl(null, [Validators.required]),
      'img_url': new FormControl(null, [Validators.required])
    })
  }

  submitCake(): void {
    let cake = { 
      "baker": this.newCake['bakerName'],
      "img_url": this.newCake['imgUrl'] 
    }
    let cakeObservable = this._httpService.createCake(cake);
    cakeObservable.subscribe(data => {
      console.log(data);
      this.router.navigate(['/']);
    })
  }
}
