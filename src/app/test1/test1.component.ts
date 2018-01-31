import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
  providers : [LoggingService]
})
export class Test1Component implements OnInit {

  name:string;

  constructor(private route : ActivatedRoute, private logger : LoggingService) {
    this.name = route.snapshot.params['personName'];
  }

  log(msg){
    this.logger.logMessage(msg);
  }

  ngOnInit() {
  }

}
