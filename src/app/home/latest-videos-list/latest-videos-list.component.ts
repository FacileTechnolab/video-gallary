import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-videos-list',
  templateUrl: './latest-videos-list.component.html',
  styleUrls: ['./latest-videos-list.component.css']
})
export class LatestVideosListComponent implements OnInit {
  isLatest: boolean = true;
  selectedIndex = 1;

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
  test() {
   
  }
  test1() {
    alert('ch1');
  }
}
