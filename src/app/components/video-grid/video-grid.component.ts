import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.css']
})
export class VideoGridComponent implements OnInit {
  @Input() videos: any = [];
  @Input() itemPerColumn: number;

  constructor() { }

  ngOnInit() {
  }
 
}
