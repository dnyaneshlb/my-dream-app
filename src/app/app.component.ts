import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular app';

  data = '';

  person = {
    name : "Dnyanesh",
    company : "Test Company"
  }

  yell(e){
    alert("Yelling on app root component");
    console.log(e);
    this.data = e;
  }
}
