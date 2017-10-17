import React from 'react';
import TaskListEntry from './TaskListEntry.jsx';
import { Container, Card } from 'semantic-ui-react'

const TaskList = (props) => {
  return (
    <Container text>
      <Card.Group>
        <TaskListEntry />
      </Card.Group>
    </Container>
  );
}

export default TaskList;