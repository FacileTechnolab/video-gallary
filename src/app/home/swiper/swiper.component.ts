import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {
  @Input() videos: any;
  @Input() slidesPerPage : number;
  config: Object = {
    //pagination: '.swiper-pagination', //remove pagination
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 4,
    spaceBetween: 30
  };
  
  
  constructor() { }

  ngOnInit() {
    console.log('swiper');
    console.log(this.videos);
  }
   onIndexChange(index: number) {
     
    console.log('Swiper index: ' + index);
  }
  onReachEnd(event: any) {
    console.log('Swiper at the end!');
  }

}
