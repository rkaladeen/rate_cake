import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Rate myCakes';
  cake: any;
  viewCake(cake: any) {
    this.cake = cake;
    console.log(cake);
  }
}
