import { Component, OnInit } from '@angular/core';
import { LatestBar } from '../../latest-bar.enum';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collections: any = [];
  latestBar = LatestBar;
  buttons: any = [
    { icon: 'thumb_up', name: 'thumb_up', id: this.latestBar.thumb_up },
    { icon: 'message', name: 'comment', id: this.latestBar.message },
    { icon: 'home', name: 'share', id: this.latestBar.home }];

  constructor() { }


  ngOnInit() {
    this.getCollectionList();
  }

  private getCollectionList() {
    return this.collections = [{ id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 2, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 3, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 4, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 5, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 6, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
    { id: 7, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' }
    ];
  }

  loadMoreCollections() {
    this.collections.push(this.collections[0]);
    this.collections.push(this.collections[1]);
  }

}
