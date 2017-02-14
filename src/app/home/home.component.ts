import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'

})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide'
  ];

  onIndexChange(index: number) {
    console.log('Swiper index: ' + index);
  }
  onReachEnd(event: any) {
    console.log('Swiper at the end!');
  }

}
