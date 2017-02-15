import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { HomeComponent } from './home.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';


const videoGallaryRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'videos/:id', component: VideoDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(videoGallaryRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }