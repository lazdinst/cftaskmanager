import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTask } from '../store/actions/app';
import { Button, Card, Label, Input } from 'semantic-ui-react'
import { RIEInput } from 'riek'

class TaskListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false }
  }

  handleEditButton() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const editTaskName = <div className='ui transparent input'><h3><RIEInput value={this.props.task.name || 'TASK_TITLE'} change={this.handleEditButton} propName={`title`}/></h3></div>; 
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
          <Button
            basic
            color='green'
            icon='pencil'
            floated='right' 
            size='small'
            onClick={this.handleEditButton.bind(this)}
          />
          <Card.Header>
            {this.state.visible ? editTaskName : ''}
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