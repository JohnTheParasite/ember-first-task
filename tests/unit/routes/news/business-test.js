import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | news/business', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:news/business');
    assert.ok(route);
  });
});
