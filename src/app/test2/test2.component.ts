import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }

  ninjas = [{name : "Batman", belt : "red"}, {name : "Superman", belt : "blue"},
            {name : "Hitman", belt : "green"},{name : "Padman", belt : "purple"},
            {name : "Shaktiman", belt : "yellow"},{name : "Antman", belt : "black"}];
  
  ngOnInit() {
  }

}
