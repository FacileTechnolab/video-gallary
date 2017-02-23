import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../shared/services/loader.service';
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

  constructor(private loaderService: LoaderService) { }
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
      this.videos = [
        { id: 1, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
        { id: 2, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
        { id: 3, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
        { id: 4, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 6, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
        { id: 5, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
        { id: 6, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' }
      ];
      this.hideSpinner();
    }, 5000);
  }
  private getLatestCollections() {
    setTimeout(() => {
      this.collections = [
        { id: 1, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
        { id: 2, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
        { id: 3, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
        { id: 4, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 4, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' }
      ];
      this.hideSpinner();
    }, 5000);
  }

  private hideSpinner() {
    this.showSpinner = false;
  }

}
