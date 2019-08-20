import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'view-cake',
  templateUrl: './view-cake.component.html',
  styleUrls: ['../app.component.css']
})
export class ViewCakeComponent implements OnInit {
  cake: Object;
  constructor(private _httpService: HttpService) {
    
    let observable = this._httpService.getOne("gbg");
    observable.subscribe(data => {
      this.cake = data;
    })
   }

  ngOnInit() {
    
  }
  

}
