import { Injectable } from '@angular/core';
import { Video } from './video';
import { VIDEOS } from './mock-videos';
import { COLLECTIONS } from './mock-videos';

@Injectable()
export class VideoService {

  getVideos(): Promise<Video[]> {
    return Promise.resolve(VIDEOS);
  }

  getCollections(): Promise<Video[]> {
    return Promise.resolve(COLLECTIONS);
  }
}
