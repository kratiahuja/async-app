import Controller from '@ember/controller';
import { schedule } from '@ember/runloop';
import RSVP from 'rsvp';

export default Controller.extend({
  actions: {
    fetchedData() {
      console.log('action called');
      return new RSVP.Promise((resolve, reject) => {
        return $.ajax('/authors').then((data) => {
          console.log('getting data');
          console.log(data);
          resolve(data.data[0].attributes);
        });
      });
    }
  }

});
