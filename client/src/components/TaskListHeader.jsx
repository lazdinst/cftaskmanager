import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
  showNewTaskForm, 
  saveAllTasks,
  handleSubmit, 
  handleTaskTitle, 
  handleTitleChange } from '../store/modules/app';
  
import TaskForm from './TaskForm.jsx';
  
import { RIEInput } from 'riek'
import { Header, Button, Icon, Message } from 'semantic-ui-react';

// TODO: Refactor out of this component
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
  setTimeout(function(){ return  }, 1000);
}

function TaskListHeader({tasks, title, toggleForm, toggleTitleInput, postSuccess, handleTaskTitle, handleTitleChange, handleSubmit, showNewTaskForm, saveAllTasks}) {
  let ShowForm = toggleForm ? <TaskForm  onSubmit={handleSubmit}/> : '';
  let saveSuccess = false;
  let successMessage = <Message positive>All changes have been saved!</Message>;
  //postSuccess ? setTimeout(() => {console.log('After timer')}, 2000) : console.log('No Timer');

  return (
    <div>
      <h2>
        <RIEInput
          value={title || 'TASK_TITLE'}
          change={handleTitleChange}
          propName={`title`}
        />
      </h2>
      <Button 
        icon='save'
        floated='right' 
        size='mini' 
        disabled={!stateChanged} 
        onClick={() => {saveAllTasks(tasks, title)}}
      />
      <Button 
        icon='plus'
        floated='right' 
        size='mini' 
        onClick={() => {showNewTaskForm()}}
      />
      {ShowForm}
      {saveSuccess ? successMessage : ''}
    </div>
  );
}

const mapStateToProps = (state) => ({
  title: state.app.title,
  tasks: state.app.tasks,
  toggleForm: state.app.toggleForm,
  toggleTitleInput: state.app.toggleTitleInput,
  postSuccess: state.app.postSuccess
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  showNewTaskForm,
  saveAllTasks,
  handleSubmit,
  handleTaskTitle,
  handleTitleChange,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskListHeader);