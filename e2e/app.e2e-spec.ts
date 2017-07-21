import { TourOfHerouesPage } from './app.po';

describe('tour-of-heroues App', () => {
  let page: TourOfHerouesPage;

  beforeEach(() => {
    page = new TourOfHerouesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
