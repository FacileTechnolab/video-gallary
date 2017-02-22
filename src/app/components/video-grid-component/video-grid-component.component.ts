import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-grid-component',
  templateUrl: './video-grid-component.component.html',
  styleUrls: ['./video-grid-component.component.css']
})
export class VideoGridComponentComponent implements OnInit {
  @Input() videos: any = [];
  @Input() itemPerColumn: number;
  users: any = ['Fabio', 'Leonardo', 'Thomas', 'Gabriele', 'Fabrizio', 'John', 'Luis', 'Kate', 'Max']
  constructor() { }

  ngOnInit() {
  }
 
}
