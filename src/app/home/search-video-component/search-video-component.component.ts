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
    //this.videoService.getVideos().then(videos => this.videos = videos);
    this.videos = [
       { id: 4, image: 'assets/image/image4.jpg', description: 'When India\'s top batsman goes missing in the Middle East, two mismatched cops must team up for a 36-hour manhunt before the cricket final.', lastSeen: 3, videoLink: 'videoLink' },
      { id: 1, image: 'assets/image/image1.jpg', description: 'The story of a terminally ill man who wishes to live life to the full before the inevitable occurs, as told by his best friend.', lastSeen: 1, videoLink: 'videoLink' },
      { id: 5, image: 'assets/image/image5.jpg', description: 'A Pakistani submarine vanishes under mysterious circumstances.', lastSeen: 1, videoLink: 'videoLink' },
      { id: 2, image: 'assets/image/image2.jpg', description: 'Sultan is a classic underdog tale about a wrestler\'s journey, looking for a comeback by defeating all odds. Will he emerge victorious?', lastSeen: 5, videoLink: 'videoLink' },
      { id: 3, image: 'assets/image/image3.jpg', description: 'When India\'s top batsman goes missing in the Middle East, two mismatched cops must team up for a 36-hour manhunt before the cricket final.', lastSeen: 3, videoLink: 'videoLink' },
      { id: 7, image: 'assets/image/image7.jpg', description: 'Jolly is a clumsy lawyer who is faced with representing the most critical court case of his career.', lastSeen: 1, videoLink: 'videoLink' }];
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
