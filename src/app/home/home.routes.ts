import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { VideosListComponent } from './videos-list/videos-list.component';


const videoGallaryRoutes: Routes = [
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(videoGallaryRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }