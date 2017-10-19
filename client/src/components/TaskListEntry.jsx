import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button, Card } from 'semantic-ui-react'

import { deleteTask } from '../store/modules/app';

class TaskListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card fluid>
        <Card.Content>
          Task id: {this.props.task.id}
          Task Number: {this.props.taskNum || 'TASK_NUM'}
          <Button floated='right' size='big' onClick={()=>{this.props.deleteTask(this.props.task.id)}}>
            Delete
          </Button>
          <Card.Header>
            {this.props.task.name || 'TASK_NAME'}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              {this.props.task.createdAt || 'CREATED_AT'}
            </span>
        </Card.Meta>
        </Card.Content>
      </Card>
    );
  }
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
)(TaskListEntry);