import Component from '@ember/component';
import { run } from '@ember/runloop';
import RSVP from 'rsvp';


export default Component.extend({
  actions: {
    buttonFetch() {
      return new RSVP.Promise((resolve, reject) => {
        return $.ajax('/authors').then((data) => {
          console.log('getting data');
          console.log(data);
          this.set('fetchedButtonData', data.data[0].attributes);
        });
      });
    }
  }
});
