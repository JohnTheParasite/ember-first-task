import EmberRouter from '@ember/routing/router';
import config from 'ember-first-task/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('news', function () {
    this.route('business');
    this.route('culture');
    this.route('design');
  });
  this.route('blogs', function () {
    this.route('social');
    this.route('startups');
  });
  this.route('forums', function () {
    this.route('ideas');
    this.route('technologies');
    this.route('startups');
  });
  this.route('not-found', { path: '/*path' });
});
