import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container } from 'semantic-ui-react'

const TaskForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Container text>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Task Name"
          />
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear
          </button>
        </div>
      </form>
    </Container>
  );
};

export default reduxForm({
  form: 'crowdfund',
})(TaskForm);