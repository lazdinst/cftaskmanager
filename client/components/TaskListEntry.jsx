import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTask } from '../store/actions/app';
import { Button, Card, Label } from 'semantic-ui-react'

class TaskListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Button
            basic
            color='red'
            icon='trash outline'
            floated='right' 
            size='small'
            onClick={()=>{this.props.deleteTask(this.props.task.id)}}
          />
          <Card.Header>
            {this.props.task.name || 'TASK_NAME'}
          </Card.Header>
          <Card.Meta>
            <span>
              Task id: {this.props.task.id}
              Task Number: {this.props.taskNum || 'TASK_NUM'}
            </span>
            <span className='date'>
              {this.props.task.createdAt || 'CREATED_AT'}
            </span>
        </Card.Meta>
        </Card.Content>
      </Card>
    );
  }
} 

const mapStateToProps = state => ({
  tasks: state.app.tasks,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteTask
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TaskListEntry);