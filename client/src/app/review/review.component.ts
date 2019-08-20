import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpService } from '../http.service';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['../app.component.css']
})
export class ReviewComponent implements OnInit {
  
  reviews: FormGroup;

  @Input() cakeToReview : any;
  

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.reviews = new FormGroup({
      'ratings': new FormControl(null, [Validators.required]),
      'comment': new FormControl(null, [Validators.required])
    })
  }

  submitReview() {
    let review =  {
      "_id": this.cakeToReview._id,
      "ratings": this.reviews['ratings'],
      "comment": this.reviews['comment']
    }
    let cakeObservable = this._httpService.reviewCake(review);
    cakeObservable.subscribe(data => {
      console.log(data)
      this.ngOnInit();
      
    })
  }
}
