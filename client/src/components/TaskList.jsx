import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TaskListEntry from './TaskListEntry.jsx';
import { Container, Card } from 'semantic-ui-react'

const TaskList = ({tasks}) => {
  let taskEntries = tasks.map((task,i) => { return <TaskListEntry task={task} key={i} />; });
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

export default connect(
  mapStateToProps
)(TaskList);