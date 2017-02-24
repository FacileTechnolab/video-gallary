import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { SharedModule } from '../shared/shared.module';
import { ComponentModule } from '../components/component.module';
import { VideoGallaryHeaderComponent } from './video-gallary-header/video-gallary-header.component';
import { PopularVideosListComponent } from './popular-videos-list/popular-videos-list.component';
import { LatestVideosListComponent } from './latest-videos-list/latest-videos-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { RelatedVideoComponentComponent } from './related-video-component/related-video-component.component';
import { SearchVideoComponentComponent } from './search-video-component/search-video-component.component';
import { CollectionComponent } from './collection/collection.component';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  imports: [
    SharedModule,
    SharedModule,
    ComponentModule,
    HomeRoutingModule
  ],

  declarations: [HomeComponent, VideoGallaryHeaderComponent, PopularVideosListComponent, LatestVideosListComponent, VideoDetailComponent, RelatedVideoComponentComponent, SearchVideoComponentComponent, CollectionComponent, VideosComponent]
})
export class HomeModule { }
