import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const NoteListItem = (props) => {
  return (
    <div>
      <h5>{ props.note.title || 'Untitled Note'}</h5>
      <p>{ moment(props.note.updatedAt).format('DD/M/YY') }</p>
    </div>
  );
};

NoteListItem.propTypes = {
  note: PropTypes.object.isRequired
};

export default NoteListItem;