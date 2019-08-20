import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'view-cake',
  templateUrl: './view-cake.component.html',
  styleUrls: ['../app.component.css']
})
export class ViewCakeComponent implements OnInit {
  @Input() cakeToView: any;
  avg: number;
  // isVisble: Boolean = true;
  

  constructor() { }

  ngOnInit() {
    
  }

  getAverage() {
    let total_reviews: number = this.cakeToView.reviews.length;
    let total_stars: number;
    for (let i = 0; i < total_reviews; i++) {
      total_stars += this.cakeToView.reviews[i].ratings
    }
    this.avg = total_stars/total_reviews;
    
  }
  
}
