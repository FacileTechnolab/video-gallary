import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { SharedModule } from '../shared/shared.module';
import { VideoGallaryHeaderComponent } from './video-gallary-header/video-gallary-header.component';
import { CardComponent } from '../components/card/card.component';
//material
import { MaterialModule } from '@angular/material';
import { PopularVideosListComponent } from './popular-videos-list/popular-videos-list.component';
import { LatestVideosListComponent } from './latest-videos-list/latest-videos-list.component';
//layout
import { LayoutModule } from 'ng2-flex-layout';
import { CardFooterComponent } from '../components/card-footer/card-footer.component';
import { SwiperModule, SwiperConfigInterface } from 'angular2-swiper-wrapper';
import { SwiperComponent } from '../components/swiper/swiper.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
//video player
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
//components
import { SingleMediaPlayerComponent } from '../components/single-media-player/single-media-player.component';
import { RelatedVideoComponentComponent } from './related-video-component/related-video-component.component';
import { SearchVideoComponentComponent } from './search-video-component/search-video-component.component';
import { VideoGridComponentComponent } from '../components/video-grid-component/video-grid-component.component';
import { CollectionComponent } from './collection/collection.component';
import { VideosComponent } from './videos/videos.component';
import { NavComponent } from '../components/nav/nav.component';
import { HorizontalBarComponent } from '../components/horizontal-bar/horizontal-bar.component';


const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  keyboardControl: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  slidesPerView: 3,
  spaceBetween: 30
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    LayoutModule,
    SharedModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    SwiperModule.forRoot(SWIPER_CONFIG)
  ],
  declarations: [HomeComponent, VideoGallaryHeaderComponent, CardComponent, PopularVideosListComponent, LatestVideosListComponent, CardFooterComponent, SwiperComponent, VideoDetailComponent, SingleMediaPlayerComponent, RelatedVideoComponentComponent, SearchVideoComponentComponent, VideoGridComponentComponent, CollectionComponent, VideosComponent, NavComponent, HorizontalBarComponent]
})
export class HomeModule { }
