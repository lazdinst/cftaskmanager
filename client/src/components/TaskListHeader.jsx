import React from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';

// Define the main app class
const TaskListHeader = () => {
  return (
    <Header as='h1'>
      Task List Title
      <Button floated='right' size='mini'>
        Save
      </Button>
      <Button floated='right' size='mini'>
        New Task
      </Button>
    </Header>
  );
}

export default TaskListHeader;