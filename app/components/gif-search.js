import Ember from 'ember';

export default Ember.Component.extend({
  search: "",
  actions: {
    searchGifs: function(){
      this.sendAction('searchGifs', this.search);
    }
  }
});
