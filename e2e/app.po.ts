export class Angular2ReduxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-redux-app h1')).getText();
  }
}
