import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../videos/video';

@Component({
  selector: 'app-related-video-component',
  templateUrl: './related-video-component.component.html',
  styleUrls: ['./related-video-component.component.css']
})
export class RelatedVideoComponentComponent implements OnInit {
  @Input() relatedVideos :  Video[];
  constructor() { }

  ngOnInit() {
  }

}
