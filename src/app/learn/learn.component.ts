import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  message = "Hello There buddy";

  @Input() person;
  @Output() yellEvent = new EventEmitter();

  greetMe(msg){
    alert(msg + " Dnyanesh!");
  }

  yell(e){
    this.yellEvent.emit({
      name : "Dnyanesh Barkade",
      address : "Pune"
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
