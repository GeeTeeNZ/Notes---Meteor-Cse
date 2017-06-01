import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import { browserHistory } from 'react-router';

import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration.js';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Tracker.autorun(() => {
  const selectNoteId = Session.get('selectNoteId');

  if (selectNoteId){
    browserHistory.replace(`/dashboard/${selectNoteId}`);
  }
});

Meteor.startup(() => {
  Session.set('selectNoteId', undefined);
  ReactDOM.render(routes, document.getElementById('app'));
});
