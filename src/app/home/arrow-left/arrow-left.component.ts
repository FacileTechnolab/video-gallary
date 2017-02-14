import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-arrow-left',
  templateUrl: './arrow-left.component.html',
  styleUrls: ['./arrow-left.component.css']
})
export class ArrowLeftComponent implements OnInit {
  @Input() isLatest: boolean;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  getData(isLatest) {
    if (isLatest) {
      this.notify.emit('get previous records');
     //alert('get more latest');
    }
    else {
      alert('get more collection');
    }
  }


}
