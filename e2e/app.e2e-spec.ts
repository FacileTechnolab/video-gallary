import { VideoGallaryMaterialPage } from './app.po';

describe('video-gallary-material App', function() {
  let page: VideoGallaryMaterialPage;

  beforeEach(() => {
    page = new VideoGallaryMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
