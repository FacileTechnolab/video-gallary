import { Component, OnInit } from '@angular/core';
import { Video } from '../videos/video';
import { VideoService } from '../videos/video.service';

@Component({
  selector: 'app-popular-videos-list',
  templateUrl: './popular-videos-list.component.html',
  styleUrls: ['./popular-videos-list.component.css']
})
export class PopularVideosListComponent implements OnInit {
  selectedIndex = 2;
  isLatest: boolean = false;
  videos: Video[];
  collections: Video[];
  showSpinner: boolean = false;
  constructor(private videoService: VideoService) { }

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
