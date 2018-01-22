import { test } from 'qunit';
import moduleForAcceptance from 'async-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | foo route');

test('visiting /foo-route', function(assert) {
  server.createList('author', 3);
  visit('/foo');
  click('button.fooButton');
  andThen(function() {
    assert.equal(currentURL(), '/foo');
    const fn = find('p.firstName').text()
    assert.equal(fn, 'Krati');
  });
});
