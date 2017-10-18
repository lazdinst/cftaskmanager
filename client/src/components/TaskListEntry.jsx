import React from 'react';
import { Button, Card } from 'semantic-ui-react'

const TaskListEntry = (props) => {
  return (
    <Card fluid>
      <Card.Content>
        <Button floated='right' icon='trash outline' size='big' />
        <Card.Header>
          {props.task.name}
        </Card.Header>
      </Card.Content>
    </Card>
  );
}

export default TaskListEntry;