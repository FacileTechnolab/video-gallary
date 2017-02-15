import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from '../swiper/swiper.component';
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
  constructor() { }
  
  ngOnInit() {
    this.getLatestVideos();
  }
  getData() {
    if (this.selectedIndex == 1) {
      this.getLatestVideos();
    }
    else {
      this.getLatestCollections();

    }
  }
  private getLatestVideos() {
    return this.videosList = [{ id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' }];
  }
  private getLatestCollections() {
    return this.collectionsList = [{ id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' }];
  }
}
