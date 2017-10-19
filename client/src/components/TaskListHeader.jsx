import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import store from '../store';
import { showNewTaskForm, saveAllTasks, handleSubmit } from '../store/modules/app';

import TaskForm from './TaskForm.jsx';

import { Header, Button, Icon, Message } from 'semantic-ui-react';

let select = state => (state.app.tasks)
let stateChanged = false;
let currentValue = select(store.getState());
let handleChange= () => {
  let previousValue = currentValue;
  currentValue = select(store.getState());
  console.log(currentValue);
  if (previousValue !== currentValue) {
    stateChanged = true;
  }
}

store.subscribe(handleChange);
const notificationMessage = () => {
  console.log('timeing out')
  setTimeout(function(){ return <Message positive>All changes have been saved!</Message> }, 1000);
}
const TaskListHeader = ({tasks, title, toggleForm, postSuccess, handleSubmit, showNewTaskForm, saveAllTasks}) => {
  let ShowForm = toggleForm ? <TaskForm  onSubmit={handleSubmit}/> : '';
  let successMessage = postSuccess ? notificationMessage() : '';
  return (
    <Header as='h1'>
      {title || 'TASK_TITLE'}
      <Button floated='right' size='mini' disabled={!stateChanged} onClick={() => {saveAllTasks(tasks)}}>
        Save
      </Button>
      <Button floated='right' size='mini' onClick={() => {showNewTaskForm()}}>
        New Task
      </Button>
      {ShowForm}
      {successMessage}
    </Header>
  );
}

const mapStateToProps = (state) => ({
  title: state.app.title,
  tasks: state.app.tasks,
  toggleForm: state.app.toggleForm,
  postSuccess: state.app.postSuccess
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  showNewTaskForm,
  saveAllTasks,
  handleSubmit
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskListHeader);