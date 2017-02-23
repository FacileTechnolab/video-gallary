import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonBar } from '../../button-bar.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() videos: any;
  @Input() isVideos: boolean;
  @Input() videoCard: any;
  buttonBar = ButtonBar;

  videosButtonBar: any = [
    { icon: 'thumb_up', name: 'thumb_up', id: this.buttonBar.thumb_up },
    { icon: 'remove_red_eye', name: 'watch', id: this.buttonBar.remove_red_eye },
    { icon: 'message', name: 'comment', id: this.buttonBar.message },
    { icon: 'share', name: 'share', id: this.buttonBar.share }];


  collectionsButtonBar: any = [
    { icon: 'videocam', name: 'videocam', id: this.buttonBar.videocam },
    { icon: 'thumb_up', name: 'watch', id: this.buttonBar.thumb_up },
    { icon: 'message', name: 'comment', id: this.buttonBar.message },
    { icon: 'share', name: 'share', id: this.buttonBar.share }];



  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log('card');
    //console.log(this.videoCard);
  }
 
  getDetail(videoId: number) {
    this.router.navigate(['home/videos/' + videoId]);
  }

}
