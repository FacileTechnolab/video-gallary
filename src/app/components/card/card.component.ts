import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonBar } from '../../button-bar.enum';
//pipe 
import { TruncatePipe } from '../truncate';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  
})
export class CardComponent implements OnInit {
  @Input() videos: any;
  @Input() isVideos: boolean;
  @Input() videoCard: any;
  @Input() index: any;
  cards: any = [
    { id: 1, image: 'assets/image/image1.jpg', description: 'The story of a terminally ill man who wishes to live life to the full before the inevitable occurs, as told by his best friend.', lastSeen: 1, videoLink: 'videoLink' },
    { id: 2, image: 'assets/image/image2.jpg', description: 'Sultan is a classic underdog tale about a wrestler\'s journey, looking for a comeback by defeating all odds. Will he emerge victorious?', lastSeen: 2, videoLink: 'videoLink' },
    { id: 3, image: 'assets/image/image3.jpg', description: 'When India\'s top batsman goes missing in the Middle East, two mismatched cops must team up for a 36-hour manhunt before the cricket final.', lastSeen: 3, videoLink: 'videoLink' },
    { id: 4, image: 'assets/image/image4.jpg', description: 'Jolly is a clumsy lawyer who is faced with representing the most critical court case of his career.', lastSeen: 4, videoLink: 'videoLink' },
    { id: 5, image: 'assets/image/image5.jpg', description: 'A Pakistani submarine vanishes under mysterious circumstances.', lastSeen: 5, videoLink: 'videoLink' }
  ];
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
    // this.cards = this.videoCard;
    // console.log(this.cards);
  }

  ngOnInit() {
    console.log('card');
    //console.log(this.videoCard);

  }

  getDetail(videoId: number) {
    this.router.navigate(['home/videos/' + videoId]);
  }

}
