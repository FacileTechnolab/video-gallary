import { Component, OnInit, Input } from '@angular/core';
import { ButtonBar } from '../../button-bar.enum';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css']
})
export class CardFooterComponent implements OnInit {
  @Input() buttons: any;
  @Input() videoId: Number;
  buttonBar = ButtonBar;
  constructor() { }

  ngOnInit() {
  }
  change(videoId, buttonId) {
     switch(buttonId){
      case this.buttonBar.thumb_up :
        console.log('thumb_up clicked');
        break;
      case this.buttonBar.remove_red_eye :
        console.log('remove_red_eye clicked');
        break;
        case this.buttonBar.message :
        console.log('message clicked');
        break;
        case this.buttonBar.share :
        console.log('share clicked');
        break;  
    }
  }
}
