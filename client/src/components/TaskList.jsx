import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TaskListEntry from './TaskListEntry.jsx';
import { Container, Card, Button } from 'semantic-ui-react'
import { deleteTask } from '../store/modules/app';

const TaskList = ({tasks, deleteTask}) => {
  tasks.sort(function(a,b) { 
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  let taskEntries = tasks.map((task,i) => (<TaskListEntry task={task} taskNum={i+1} key={i} />));
  return (
    <Container text>
      <Card.Group>
        {taskEntries || []}
      </Card.Group>
    </Container>
  );
}


const mapStateToProps = (state) => ({
  tasks: state.app.tasks,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteTask
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);