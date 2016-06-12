import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    searchGifs: function(query){
      this.transitionTo({ queryParams: { search: query } });
    }
  },
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model: function(params) {
    return Ember.$.getJSON(`http://api.giphy.com/v1/gifs/search?q=${params.search}&api_key=dc6zaTOxFJmzC`)
    .then(function(data){
      return data;
    });
  }
});
