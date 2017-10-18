import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SimpleForm from './SimpleForm.jsx';

import { Header, Button, Icon } from 'semantic-ui-react';

import { showNewTaskForm, handleSubmit } from '../store/modules/app';

const TaskListHeader = ({title, toggleForm, handleSubmit, showNewTaskForm}) => {
  let ShowForm = toggleForm ? <SimpleForm  onSubmit={handleSubmit}/> : '';
  return (
    <Header as='h1'>
      {title}
      <button onClick={handleSubmit}>AddTodo</button>
      <Button floated='right' size='mini'>
        Save
      </Button>
      <Button floated='right' size='mini' onClick={() => {showNewTaskForm()}}>
        New Task
      </Button>
      {ShowForm}
    </Header>
  );
}

const mapStateToProps = (state) => ({
  title: state.app.title,
  toggleForm: state.app.toggleForm,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  showNewTaskForm,
  handleSubmit
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskListHeader);