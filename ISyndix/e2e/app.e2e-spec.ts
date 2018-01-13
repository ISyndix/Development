import { ISyndixPage } from './app.po';

describe('isyndix App', function() {
  let page: ISyndixPage;

  beforeEach(() => {
    page = new ISyndixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
