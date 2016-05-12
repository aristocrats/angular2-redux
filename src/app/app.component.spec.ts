import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { App } from '../app/app.component';

beforeEachProviders(() => [App]);

describe('App: Angular2Redux', () => {
  it('should create the app',
      inject([App], (app: App) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-redux works!\'',
      inject([App], (app: App) => {
    expect(app.title).toEqual('angular2-redux works!');
  }));
});
