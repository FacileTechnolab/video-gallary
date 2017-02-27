import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../shared/services/loader.service';
import { VideoService } from '../videos/video.service';
import { Video } from '../videos/video';

@Component({
  selector: 'app-latest-videos-list',
  templateUrl: './latest-videos-list.component.html',
  styleUrls: ['./latest-videos-list.component.css']
})
export class LatestVideosListComponent implements OnInit {
  isLatest: boolean = true;
  selectedIndex = 1;
  videos: Video[];
  collections: Video[];
  showSpinner: boolean = false;

  constructor(private loaderService: LoaderService, private videoService: VideoService) { }
  ngOnInit() {
    this.showSpinner = true;
    this.getLatestVideos();
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
      //this.videos = this.videoService.getVideos();
      this.videoService.getVideos().then(videos => this.videos = videos);
      this.hideSpinner();
    }, 5000);
  }
  private getLatestCollections() {
    setTimeout(() => {
      this.videoService.getCollections().then(collections => this.collections = collections);
      this.hideSpinner();
    }, 5000);
  }

  private hideSpinner() {
    this.showSpinner = false;
  }

}
