import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-left',
  templateUrl: './arrow-left.component.html',
  styleUrls: ['./arrow-left.component.css']
})
export class ArrowLeftComponent implements OnInit {
  @Input() isLatest: boolean;
  constructor() { }

  ngOnInit() {
  }
  getVideos(isLatest) {
    if(isLatest){
    alert('get more latest');
    }
    else{
      alert('get more collection');
    }
  }
 

}
