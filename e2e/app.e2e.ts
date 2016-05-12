import { Angular2ReduxPage } from './app.po';

describe('angular2-redux App', function() {
  let page: Angular2ReduxPage;

  beforeEach(() => {
    page = new Angular2ReduxPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-redux works!');
  });
});
