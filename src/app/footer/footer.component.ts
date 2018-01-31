import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from "@angular/material";



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(){}

  style1 = "my-app-footer1";

  toggleTheme(e){
    this.style1 = this.style1 == "my-app-footer1" ? "my-app-footer2" : "my-app-footer1";
  }

  ngOnInit() {
  }

}
