import { Component, OnInit } from '@angular/core';
import { ButtonBar } from '../../button-bar.enum';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../videos/video';
import { VideoService } from '../videos/video.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  relatedVideos: any = [];
  videoDetail: Object;
  buttonBar = ButtonBar;
  videosButtonBar: any = [
    { icon: 'thumb_up', name: 'thumb_up', id: this.buttonBar.thumb_up },
    { icon: 'remove_red_eye', name: 'watch', id: this.buttonBar.remove_red_eye },
    { icon: 'message', name: 'comment', id: this.buttonBar.message },
    { icon: 'share', name: 'share', id: this.buttonBar.share }];
  id = 1;

  constructor(private route: ActivatedRoute, private videoService: VideoService) {
  }


  ngOnInit() {
    console.log('id::' + this.route.snapshot.params['id']);
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
    this.videoService.getCollections().then(collections => this.relatedVideos = collections);
  }

  private getVideoDetail(id: number) {
  }


}
