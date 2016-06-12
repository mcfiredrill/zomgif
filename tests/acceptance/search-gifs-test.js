import { test } from 'qunit';
import moduleForAcceptance from 'zomg/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | search gifs');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    fillIn("input.search-gifs", "garfield");
    triggerEvent("input.search-gifs", "keydown", { keyCode: 13 });
    let gif = find("img");
    assert.equal(gif.length, 25);
  });
});
