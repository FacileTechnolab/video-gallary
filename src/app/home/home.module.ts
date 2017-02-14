import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { SharedModule } from '../shared/shared.module';
import { VideoGallaryHeaderComponent } from './video-gallary-header/video-gallary-header.component';
import { CardComponent } from './card/card.component';
//material
import { MaterialModule } from '@angular/material';
import { ArrowLeftComponent } from './arrow-left/arrow-left.component';
import { ArrowRightComponent } from './arrow-right/arrow-right.component';
import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';
import { PopularVideosListComponent } from './popular-videos-list/popular-videos-list.component';
import { LatestVideosListComponent } from './latest-videos-list/latest-videos-list.component';
//layout
import { LayoutModule } from 'ng2-flex-layout';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { SwiperModule, SwiperConfigInterface } from 'angular2-swiper-wrapper';
import { SwiperComponent } from './swiper/swiper.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    LayoutModule,
    SharedModule,
    SwiperModule
  ],
  declarations: [HomeComponent, VideoGallaryHeaderComponent, CardComponent, ArrowLeftComponent, ArrowRightComponent, HorizontalBarComponent, PopularVideosListComponent, LatestVideosListComponent, CardFooterComponent, SwiperComponent]
})
export class HomeModule { }
