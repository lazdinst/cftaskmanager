import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, Input } from 'semantic-ui-react'

import { handleTitleChange } from '../store/modules/app';

function EditTaskTitle({ title, handleTitleChange }) {
  return (
    <input 
      onChange={(e) => { handleTitleChange(e.target.value); }} 
    />
  );
};

const mapStateToProps = (state) => ({
  title: state.app.title,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  handleTitleChange
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTaskTitle);