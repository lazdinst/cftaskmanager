import React from 'react';

// Redux Store and Actions
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Local Components
import TaskList from './TaskList.jsx';
import TaskListHeader from './TaskListHeader.jsx';

// Import Semantic Components
import { Container, Divider } from 'semantic-ui-react';

export class MainContainer extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container text style={{ marginTop: '3em' }} >
        <TaskListHeader />
        <Divider />
        <TaskList />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect( mapStateToProps)(MainContainer);