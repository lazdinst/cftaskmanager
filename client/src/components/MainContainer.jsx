import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, Header } from 'semantic-ui-react';

import TaskList from './TaskList.jsx';
import TaskListHeader from './TaskListHeader.jsx';


import { getAllTasks } from '../store/modules/app';

// Define the main app class
class MainContainer extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllTasks();
  }

  render() {
    return (
      <Container text style={{ marginTop: '3em' }}>
        <TaskListHeader />
        <TaskList />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllTasks
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);