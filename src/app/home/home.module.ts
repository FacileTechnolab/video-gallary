import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { HomeRoutingModule } from './home.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, VideosListComponent]
})
export class HomeModule { }
