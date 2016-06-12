import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gif-search', 'Integration | Component | gif search', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.on('stubSearchGifs', function(query){
    assert.equal(query, "garfield");
  });

  this.render(hbs`{{gif-search searchGifs='stubSearchGifs'}}`);
  this.$('input').val('garfield');
  this.$('input').change();
  this.$('button').click();

});
