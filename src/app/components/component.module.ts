import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, } from '@angular/router';
//material 
import { MaterialModule } from '@angular/material';
//video player
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
//layout
import { LayoutModule } from 'ng2-flex-layout';
import { FlexLayoutModule } from "@angular/flex-layout";
//swiper
import { SwiperModule, SwiperConfigInterface } from 'angular2-swiper-wrapper';
import { SwiperComponent } from './swiper/swiper.component';
//components
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';
import { SingleMediaPlayerComponent } from './single-media-player/single-media-player.component';
import { VideoGridComponent } from './video-grid/video-grid.component';
//pipes
import { TruncatePipe } from './truncate';
//moment.js
import {MomentModule} from 'angular2-moment';


const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  keyboardControl: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  slidesPerView: 4,
  spaceBetween: 30
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    LayoutModule,
    FlexLayoutModule,
    MomentModule,
    SwiperModule.forRoot(SWIPER_CONFIG)
  ],
  declarations: [NavComponent, CardComponent, CardFooterComponent, HorizontalBarComponent, SingleMediaPlayerComponent, SwiperComponent, VideoGridComponent, TruncatePipe],
  exports: [CommonModule, FormsModule, MaterialModule, LayoutModule, FlexLayoutModule, NavComponent, CardComponent, CardFooterComponent, HorizontalBarComponent, SingleMediaPlayerComponent, SwiperComponent, VideoGridComponent]
})

export class ComponentModule { }
