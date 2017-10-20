import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container } from 'semantic-ui-react'

function TaskForm({ handleSubmit, pristine, reset, submitting }) {
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