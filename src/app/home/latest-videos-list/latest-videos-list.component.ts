import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../shared/services/loader.service';
import { SwiperComponent } from '../swiper/swiper.component';

@Component({
  selector: 'app-latest-videos-list',
  templateUrl: './latest-videos-list.component.html',
  styleUrls: ['./latest-videos-list.component.css']
})
export class LatestVideosListComponent implements OnInit {
  isLatest: boolean = true;
  selectedIndex = 1;
  videosList: any = [];
  collectionsList: any = [];

  constructor(private loaderService: LoaderService) { }
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
  onPreviousButtonClicked() {
    this.loaderService.startLoading();
    console.log('previous button clicked');
    this.getPreviousCollections();
    this.loaderService.completeLoading();
  }
  private getLatestVideos() {
    return this.videosList = [
      { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '1 hours', type: 'latest' },
      { id: 2, videoImage: 'assets/image/appicon.png', lastseen: '2 hours', type: 'latest' },
      { id: 3, videoImage: 'assets/image/appicon.png', lastseen: '3 hours', type: 'latest' },
      { id: 4, videoImage: 'assets/image/appicon.png', lastseen: '4 hours', type: 'latest' },
      { id: 5, videoImage: 'assets/image/appicon.png', lastseen: '5 hours', type: 'latest' },
      { id: 6, videoImage: 'assets/image/appicon.png', lastseen: '6 hours', type: 'latest' },
      { id: 7, videoImage: 'assets/image/appicon.png', lastseen: '7 hours', type: 'latest' },
      { id: 8, videoImage: 'assets/image/appicon.png', lastseen: '8 hours', type: 'latest' }];
  }
  private getLatestCollections() {
    return this.collectionsList = [{ id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 2, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 3, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 4, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 5, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 6, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 7, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' }
    ];
  }
  private getPreviousCollections() {
    return this.videosList = [{ id: 11, videoImage: 'assets/image/appicon.png', lastseen: '11 hours' },
    { id: 12, videoImage: 'assets/image/appicon.png', lastseen: '12 hours' },
    { id: 13, videoImage: 'assets/image/appicon.png', lastseen: '13 hours' },
    { id: 14, videoImage: 'assets/image/appicon.png', lastseen: '14 hours' }];
  }
}
