import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var firebase :any;

@Injectable()
export class ContactService {

  constructor(private http:HttpClient) { }

  getContacts(){
    return this.http.get<[any]>('https://jsonplaceholder.typicode.com/users');
  }

  // Fetches latest weather info from yahoo.com
  getWeather(){
    return this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
           .subscribe(response => {
                console.log("Weather ");
                console.log(response);
           },
          error => {
              console.error("Some Error has occured in fetching data");
          });
  }

  getNinjasFromFirebase(){
    return this.http.get('https://hello-world-dfa52.firebaseio.com/.json');
  }

  pushNinjasToFirebaseDatabase(name,belt){
      firebase.database().ref('/').push({name:name,belt:belt});
  }
}
