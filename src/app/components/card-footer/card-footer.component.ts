import { Component, OnInit, Input } from '@angular/core';
import { LatestBar } from '../../latest-bar.enum';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css']
})
export class CardFooterComponent implements OnInit {
  @Input() buttons: any;
  @Input() videoId: Number;
  latestBar = LatestBar;
  constructor() { }

  ngOnInit() {
  }
  change(videoId, buttonId) {
     switch(buttonId){
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
}
