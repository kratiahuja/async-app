import Component from '@ember/component';
import { run } from '@ember/runloop';

export default Component.extend({
  actions: {
    buttonFetch() {
      console.log('buttonFetch');
      return this.get('fetchData')().then((buttonData) => {
        // I guess this needs to be on the run loop?
        this.set('fetchedButtonData', buttonData);
      });
    }
  }
});
