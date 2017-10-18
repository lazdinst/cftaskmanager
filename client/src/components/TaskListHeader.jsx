import React from 'react';
import { connect } from 'react-redux';

import { Header, Button, Icon } from 'semantic-ui-react';

const TaskListHeader = ({title}) => {
  return (
    <Header as='h1'>
      {title}
      <Button floated='right' size='mini'>
        Save
      </Button>
      <Button floated='right' size='mini'>
        New Task
      </Button>
    </Header>
  );
}

const mapStateToProps = (state) => ({
  title: state.app.title
});

export default connect(
  mapStateToProps
)(TaskListHeader);