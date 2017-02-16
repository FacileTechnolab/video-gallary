import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { HomeComponent } from './home.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { SearchVideoComponentComponent } from './search-video-component/search-video-component.component';
import { CollectionComponent } from './collection/collection.component';
import { VideosComponent } from './videos/videos.component';

const videoGallaryRoutes: Routes = [
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: '', redirectTo: 'videos', pathMatch: 'full' },
            { path: 'videos', component: VideosComponent },
            { path: 'videos/:id', component: VideoDetailComponent },
            { path: 'videos/search/:searchString', component: SearchVideoComponentComponent }
        ]
    },
    { path: 'collections', component: CollectionComponent } //need to change path
];

@NgModule({
    imports: [RouterModule.forChild(videoGallaryRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }