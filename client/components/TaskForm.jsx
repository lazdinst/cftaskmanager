import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Input, Button, Card, Divider } from 'semantic-ui-react'

function TaskForm({ handleSubmit, pristine, reset, submitting }) {
  return (
    <div style={{marginTop: '1.5rem'}}>
      <Container text>
        <Card.Group>
          <Card fluid>
            <Card.Content>
              <Button 
                basic
                icon='erase'
                floated='right'
                color='red'
                disabled={pristine || submitting} 
                onClick={reset}
              />
              <Button
                basic
                icon='checkmark'
                floated='right'
                color='green'
                type="submit"
                disabled={pristine || submitting}
                onClick={handleSubmit}
              />
              <Card.Header>
                <form onSubmit={handleSubmit}>
                  <Field
                    name='name'
                    component={Input}
                    className='ui transparent fluid input'
                    type='text'
                    placeholder='Task Name'
                  />
                </form>
              </Card.Header>
              <Card.Meta>
            </Card.Meta>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </div>
  );
};

function renderField() {
  return (
    <Input
      transparent
    />
  );
}

export default reduxForm({ form: 'crowdfund' })(TaskForm); 