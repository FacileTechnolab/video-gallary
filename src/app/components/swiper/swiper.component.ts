import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {
  @Input() videos: any;
  @Input() slidesPerPage: number;
  
  videoCards: any = [];

  ngOnInit() {
    this.videoCards = this.videos;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['videos']) {
      console.log('video changes');
      this.videoCards = this.videos;
    }
  }
  constructor() {

  }
  onIndexChange(index: number) {
    console.log('Swiper index: ' + index);
  }
  onReachEnd(event: any) {
    console.log('Swiper at the end!');
  }

}
