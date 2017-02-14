import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-arrow-right',
  templateUrl: './arrow-right.component.html',
  styleUrls: ['./arrow-right.component.css']
})
export class ArrowRightComponent implements OnInit {
  
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  getData(isLatest) {
    if (isLatest) {
      this.notify.emit('get next records');
     //alert('get more latest');
    }
    else {
      alert('get more collection');
    }
  }
}
