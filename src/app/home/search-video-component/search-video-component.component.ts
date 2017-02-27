import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../videos/video';
import { VideoService } from '../videos/video.service';

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
  constructor(private route: ActivatedRoute, private videoService: VideoService) { }

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
    this.videoService.getVideos().then(videos => this.videos = videos);
  }

  private serchCollections(searchString: string) {
    this.videoService.getVideos().then(collections => this.videos = collections);
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
