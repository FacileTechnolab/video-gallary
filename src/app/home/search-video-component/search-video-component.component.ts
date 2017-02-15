import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-video-component',
  templateUrl: './search-video-component.component.html',
  styleUrls: ['./search-video-component.component.css']
})
export class SearchVideoComponentComponent implements OnInit {
  selectedIndex = 0;
  searchString: string = '';
  videosList: any = [];
  collectionsList: any = [];
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

  private serchCollections(searchString: string) {
    return this.collectionsList = [{ id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 2, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 3, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 4, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 5, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 6, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 7, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' }
    ];
  }
  loadMoreVideos() {
      this.videosList.push(this.videosList[0]);
      this.videosList.push(this.videosList[1]);
  }
  loadMoreColections(){
    this.collectionsList.push(this.collectionsList[0]);
    this.collectionsList.push(this.collectionsList[1]);
  }
}
