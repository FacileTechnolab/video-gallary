import { Component, OnInit } from '@angular/core';
import { LatestBar } from '../../latest-bar.enum';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  relatedVideosList: any = [];
  videoDetail: Object;
  latestBar = LatestBar;
  videosButtonBar: any = [
    { icon: 'thumb_up', name: 'thumb_up', id: this.latestBar.thumb_up },
    { icon: 'remove_red_eye', name: 'watch', id: this.latestBar.remove_red_eye },
    { icon: 'message', name: 'comment', id: this.latestBar.message },
    { icon: 'home', name: 'share', id: this.latestBar.home }];
  id = 1;
  constructor() { }

  ngOnInit() {
    this.getRelatedVideos();
    // this.route.params
    //   .map(params => params['id'])
    //   .subscribe((id) => {
    //     this.contactsService
    //       .getContact(id)
    //       .subscribe(contact => this.contact = contact);
    //   });
  }
  private getRelatedVideos() {
    return this.relatedVideosList = [
      { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '1 hours', type: 'latest' },
      { id: 2, videoImage: 'assets/image/appicon.png', lastseen: '2 hours', type: 'latest' },
      { id: 3, videoImage: 'assets/image/appicon.png', lastseen: '3 hours', type: 'latest' },
      { id: 4, videoImage: 'assets/image/appicon.png', lastseen: '4 hours', type: 'latest' },
      { id: 5, videoImage: 'assets/image/appicon.png', lastseen: '5 hours', type: 'latest' },
      { id: 6, videoImage: 'assets/image/appicon.png', lastseen: '6 hours', type: 'latest' },
      { id: 7, videoImage: 'assets/image/appicon.png', lastseen: '7 hours', type: 'latest' },
      { id: 8, videoImage: 'assets/image/appicon.png', lastseen: '8 hours', type: 'latest' }];
  }
  private getVideoDetail(id: number) {
  }


}
