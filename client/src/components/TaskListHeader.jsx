import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Header, Button, Icon } from 'semantic-ui-react';

import { showNewTaskForm } from '../store/modules/app';

const TaskListHeader = ({title, showNewTaskForm}) => {
  
  return (
    <Header as='h1'>
      {title}
      <Button floated='right' size='mini'>
        Save
      </Button>
      <Button floated='right' size='mini' onClick={() => {showNewTaskForm()}}>
        New Task
      </Button>
      
    </Header>
  );
}

const mapStateToProps = (state) => ({
  title: state.app.title,
  toggleForm: state.app.toggleForm,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  showNewTaskForm
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskListHeader);