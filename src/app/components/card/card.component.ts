import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LatestBar } from '../../latest-bar.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() videos: any;
  @Input() isVideos : boolean;
  @Input() videoCard : any;
  latestBar = LatestBar;
  
  videosButtonBar: any = [
    { icon: 'thumb_up', name: 'thumb_up', id: this.latestBar.thumb_up },
    { icon: 'remove_red_eye', name: 'watch', id: this.latestBar.remove_red_eye },
    { icon: 'message', name: 'comment', id: this.latestBar.message },
    { icon: 'share', name: 'share', id: this.latestBar.share }];


 collectionsButtonBar: any = [
    { icon: 'videocam', name: 'videocam', id: this.latestBar.videocam },
    { icon: 'thumb_up', name: 'watch', id: this.latestBar.thumb_up },
    { icon: 'message', name: 'comment', id: this.latestBar.message },
    { icon: 'share', name: 'share', id: this.latestBar.share }];

   
   
  constructor(private router : Router) {
  }

  ngOnInit() {
    console.log('card');
      //console.log(this.videoCard);
  }
  change(button, id) {
    console.log(button);
    switch(button){
      case this.latestBar.thumb_up :
        console.log('thumb_up clicked');
        break;
      case this.latestBar.remove_red_eye :
        console.log('remove_red_eye clicked');
        break;
        case this.latestBar.message :
        console.log('message clicked');
        break;
        case this.latestBar.home :
        console.log('home clicked');
        break;  
    }
  }
  getDetail(videoId:number){
    this.router.navigate(['home/videos/'+videoId]);
  }

}
