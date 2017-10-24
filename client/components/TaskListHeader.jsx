import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
  showNewTaskForm, 
  saveAllTasks,
  handleSubmit, 
  handleTaskTitle, 
  handleTitleChange } from '../store/actions/app';
  
import TaskForm from './TaskForm.jsx';
import SuccessMessage from './SuccessMessage.jsx';
import FailureMessage from './FailureMessage.jsx';

import { RIEInput } from 'riek'
import { Header, Button, Icon, Message, Divider } from 'semantic-ui-react';

// TODO: Refactor out of this component
let select = state => (state.app.tasks)
let stateChanged = false;
let currentValue = select(store.getState());
let handleChange= () => {
  let previousValue = currentValue;
  currentValue = select(store.getState());
  if (previousValue !== currentValue) {
    stateChanged = true;
  }
}
store.subscribe(handleChange);

function TaskListHeader({tasks, title, toggleForm, toggleTitleInput, postSuccess, postFailure, handleTaskTitle, handleTitleChange, handleSubmit, showNewTaskForm, saveAllTasks}) {
  let showForm = toggleForm ? <TaskForm  onSubmit={handleSubmit}/> : '';
  let saveSuccess = false;
  let successMessage = <Message positive>All changes have been saved!</Message>;

  return (
    <div>
      <div>
        <div className='ui transparent input'>
          <h3>
          <RIEInput
            value={title || 'TASK_TITLE'}
            change={handleTitleChange}
            propName={`title`}
          />
          </h3>
        </div>
        <Button
          basic
          icon='save'
          color={'green'}
          floated='right' 
          size='mini' 
          disabled={!stateChanged} 
          onClick={() => {saveAllTasks(tasks, title)}}
        />
        <Button
          basic
          icon={showForm ? 'chevron up' : 'plus'}
          color={'blue'}
          floated='right' 
          size='mini' 
          onClick={() => {showNewTaskForm()}}
        />
      </div>
      {postSuccess ? <SuccessMessage /> : ''}
      {postFailure ? <FailureMessage />  : ''}
      {showForm}
    </div>
  );
}

const mapStateToProps = state => ({
  title: state.app.title,
  tasks: state.app.tasks,
  toggleForm: state.app.toggleForm,
  toggleTitleInput: state.app.toggleTitleInput,
  postSuccess: state.app.postSuccess,
  postFailure: state.app.postFailure
});

const mapDispatchToProps = dispatch => bindActionCreators({
  showNewTaskForm,
  saveAllTasks,
  handleSubmit,
  handleTaskTitle,
  handleTitleChange,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TaskListHeader);