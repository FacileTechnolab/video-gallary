import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-videos-list',
  templateUrl: './popular-videos-list.component.html',
  styleUrls: ['./popular-videos-list.component.css']
})
export class PopularVideosListComponent implements OnInit {
  selectedIndex = 2;
  isLatest: boolean = false;
  videosList: any = [];
  collectionsList: any = [];
  showSpinner: boolean = false;
  constructor() { }

  ngOnInit() {
    this.showSpinner = true;
    this.getLatestCollections();
  }
  getData() {
    if (this.selectedIndex == 1) {
      this.showSpinner = true;
      this.getLatestVideos();
    }
    else {
      this.showSpinner = true;
      this.getLatestCollections();

    }
  }
  private getLatestVideos() {
    setTimeout(() => {
      this.videosList = [
        { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '1 hours', type: 'latest' },
        { id: 2, videoImage: 'assets/image/appicon.png', lastseen: '2 hours', type: 'latest' },
        { id: 3, videoImage: 'assets/image/appicon.png', lastseen: '3 hours', type: 'latest' },
        { id: 4, videoImage: 'assets/image/appicon.png', lastseen: '4 hours', type: 'latest' },
        { id: 5, videoImage: 'assets/image/appicon.png', lastseen: '5 hours', type: 'latest' },
        { id: 6, videoImage: 'assets/image/appicon.png', lastseen: '6 hours', type: 'latest' },
        { id: 7, videoImage: 'assets/image/appicon.png', lastseen: '7 hours', type: 'latest' },
        { id: 8, videoImage: 'assets/image/appicon.png', lastseen: '8 hours', type: 'latest' }];
      this.hideSpinner();
    }, 5000);
  }
  private getLatestCollections() {
    setTimeout(() => {
      this.collectionsList = [{ id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
      { id: 2, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
      { id: 3, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
      { id: 4, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
      { id: 5, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
      { id: 6, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
      { id: 7, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' }
      ];
      this.hideSpinner();
    }, 5000);
  }
  private hideSpinner() {
    this.showSpinner = false;
  }
}
