import { MoviesAppPage } from './app.po';

describe('movies-app App', function() {
  let page: MoviesAppPage;

  beforeEach(() => {
    page = new MoviesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
