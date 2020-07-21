import { moduleFor, test } from 'ember-qunit';

moduleFor('route:data-line-fdsgfghh5456-dictionary-l', 'Unit | Route | data-line-fdsgfghh5456-dictionary-l', {
  // Specify the other units that are required for this test.
  needs: [
    'service:cols-config-menu',
    'service:form-load-time-tracker',
    'service:objectlistview-events',
    'service:app-state',
    'service:adv-limit',
  ],
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
