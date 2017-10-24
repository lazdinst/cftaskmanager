import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskList from './TaskList.jsx';
import TaskListHeader from './TaskListHeader.jsx';
import { Container, Divider } from 'semantic-ui-react';

function MainContainer() {
  return (
    <Container text style={{ marginTop: '3em' }} >
      <TaskListHeader />
      <Divider />
      <TaskList />
    </Container>
  );
}

export default MainContainer;