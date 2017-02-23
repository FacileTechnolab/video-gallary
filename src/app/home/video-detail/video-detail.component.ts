import { Component, OnInit } from '@angular/core';
import { ButtonBar } from '../../button-bar.enum';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../videos/video';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  relatedVideos: Video[];
  videoDetail: Object;
  buttonBar = ButtonBar;
  videosButtonBar: any = [
    { icon: 'thumb_up', name: 'thumb_up', id: this.buttonBar.thumb_up },
    { icon: 'remove_red_eye', name: 'watch', id: this.buttonBar.remove_red_eye },
    { icon: 'message', name: 'comment', id: this.buttonBar.message },
    { icon: 'share', name: 'share', id: this.buttonBar.share }];
  id = 1;

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    console.log(this.route.params['id']);
    //this.getVideoDetail();
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
    return this.relatedVideos = [
      { id: 1, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
      { id: 2, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
      { id: 3, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
      { id: 4, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 6, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' },
      { id: 5, image: 'http://indirakids.ac.in/wp-content/uploads/video-gallery.png', description: 'desc', lastSeen: 2, type: 'latest', videoLink: 'http://static.videogular.com/assets/videos/videogular.mp4', videoType: 'video/mp4' }
    ];
  }

  private getVideoDetail(id: number) {
  }


}
