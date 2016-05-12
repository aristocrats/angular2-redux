import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2ReduxAppComponent } from '../app/angular2-redux.component';

beforeEachProviders(() => [Angular2ReduxAppComponent]);

describe('App: Angular2Redux', () => {
  it('should create the app',
      inject([Angular2ReduxAppComponent], (app: Angular2ReduxAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-redux works!\'',
      inject([Angular2ReduxAppComponent], (app: Angular2ReduxAppComponent) => {
    expect(app.title).toEqual('angular2-redux works!');
  }));
});
