import { AtagSummit2017Page } from './app.po';

describe('atag-summit2017 App', () => {
  let page: AtagSummit2017Page;

  beforeEach(() => {
    page = new AtagSummit2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
