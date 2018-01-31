import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  code = "Code";

  openSnackBar(message:string, action:string){
    this.snackBar.open(message,action);
  }

  ngOnInit() {

    console.log("Intialising home component");
  }

}
