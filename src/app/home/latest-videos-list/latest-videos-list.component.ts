import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-videos-list',
  templateUrl: './latest-videos-list.component.html',
  styleUrls: ['./latest-videos-list.component.css']
})
export class LatestVideosListComponent implements OnInit {
  isLatest: boolean = true;

  tabs : any =  [{label:"Latest",disabled:true},
                {label:"Videos",isVideos:true},
                {label:"Collections",isVideos:false}]
                
  videosList: any = [{ id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
  { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
  { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
  { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' }]

  constructor() { }

  ngOnInit() {
  }
 test(i){
   alert('ch'+i);
 }
  test1(){
   alert('ch1');
 }
}
