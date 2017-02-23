import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-media-player',
  templateUrl: './single-media-player.component.html',
  styleUrls: ['./single-media-player.component.css']
})
export class SingleMediaPlayerComponent implements OnInit {
  @Input() video : any;
  constructor() { }

  ngOnInit() {
  }

}
