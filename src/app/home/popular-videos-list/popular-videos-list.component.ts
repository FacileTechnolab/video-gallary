import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-videos-list',
  templateUrl: './popular-videos-list.component.html',
  styleUrls: ['./popular-videos-list.component.css']
})
export class PopularVideosListComponent implements OnInit {
  isLatest : boolean = false;
  videosList: any = [{ id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
  { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
  { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
  { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' }]

  videosCollectionList : any = [{ id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
  { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
  { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
  { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' }]
  constructor() { }

  ngOnInit() {
  }

}
