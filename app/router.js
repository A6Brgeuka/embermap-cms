import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard');
  this.route('posts', function() {
    this.route('post', { path: '/:post_id' });
  });
  this.route('media', function() {
    this.route('album', { path: '/albums/:album_slug' });
  });
  this.route('comments');
});

export default Router;
