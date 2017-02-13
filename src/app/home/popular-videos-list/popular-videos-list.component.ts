import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-videos-list',
  templateUrl: './popular-videos-list.component.html',
  styleUrls: ['./popular-videos-list.component.css']
})
export class PopularVideosListComponent implements OnInit {
  isLatest : boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
