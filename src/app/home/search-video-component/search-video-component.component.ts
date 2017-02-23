import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../videos/video';

@Component({
  selector: 'app-search-video-component',
  templateUrl: './search-video-component.component.html',
  styleUrls: ['./search-video-component.component.css']
})
export class SearchVideoComponentComponent implements OnInit {
  selectedIndex = 0;
  searchString: string = '';
  videos: Video[];
  collections: Video[];
  cards: any = ["slide1", "slide2"];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchString = this.route.snapshot.params['searchString']
    //alert(this.searchString);
    this.searchVidoes(this.searchString);
  }

  tabChange() {
    if (this.selectedIndex == 0) {
      this.searchVidoes(this.searchString);
    }
    else {
      this.serchCollections(this.searchString);
    }
  }
  private searchVidoes(searchString: string) {
    return this.videos = [
      { id: 1, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
      { id: 2, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
      { id: 3, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
      { id: 4, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 6, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
      { id: 5, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
      { id: 6, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' }
    ];
  }

  private serchCollections(searchString: string) {
    return this.collections = [
      { id: 1, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
      { id: 2, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
      { id: 3, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
      { id: 4, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 4, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' }
    ];
  }
  loadMoreVideos() {
    this.videos.push(this.videos[0]);
    this.videos.push(this.videos[1]);
  }
  loadMoreColections() {
    this.collections.push(this.collections[0]);
    this.collections.push(this.collections[1]);
  }
}
