import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }

  logMessage(msg:string){
    console.log(msg);
  }

}
