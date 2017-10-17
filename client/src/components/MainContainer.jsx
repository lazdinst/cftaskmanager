import React from 'react';

import { Container, Header } from 'semantic-ui-react';

import TaskList from './TaskList.jsx';
import TaskListHeader from './TaskListHeader.jsx';

// Define the main app class
const MainContainer = (props) => {
  return (
    <Container text style={{ marginTop: '3em' }}>
      <TaskListHeader />
      <TaskList />
    </Container>
  );
}

export default MainContainer;