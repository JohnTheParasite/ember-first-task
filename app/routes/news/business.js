import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class NewsBusinessRoute extends Route {
  @service router;

  model() {
    //console.log(this.router);
    return 1;
  }
}
