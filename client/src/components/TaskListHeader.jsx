import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TaskForm from './TaskForm.jsx';

import { Header, Button, Icon } from 'semantic-ui-react';

import { showNewTaskForm, saveAllTasks, handleSubmit } from '../store/modules/app';

const TaskListHeader = ({tasks, title, toggleForm, handleSubmit, showNewTaskForm, saveAllTasks}) => {
  let ShowForm = toggleForm ? <TaskForm  onSubmit={handleSubmit}/> : '';
  return (
    <Header as='h1'>
      {title || 'TASK_TITLE'}
      <Button floated='right' size='mini' onClick={() => {saveAllTasks(tasks)}}>
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
  tasks: state.app.tasks,
  toggleForm: state.app.toggleForm
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