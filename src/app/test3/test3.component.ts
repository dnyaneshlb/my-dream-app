import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css'],
  providers : [ContactService]
})
export class Test3Component implements OnInit {

  constructor(private contactService : ContactService) { }

  contacts  = undefined;

  ninjas = undefined;

  addNinja(name,belt){
      this.contactService.pushNinjasToFirebaseDatabase(name,belt);
  }

  ngOnInit() {
      this.contactService.getContacts()
      .subscribe(response => {
          console.log(response);
          this.contacts = response;
      });

      console.log(this.contactService.getWeather());

      this.contactService.getNinjasFromFirebase().subscribe(response =>{
          this.ninjas = response;
      },
      error =>{
        console.error("Some error in retrieving data from firebase server.");
      }
    );
  }

}
