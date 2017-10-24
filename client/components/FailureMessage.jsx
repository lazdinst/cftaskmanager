import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Message } from 'semantic-ui-react'

import { toggleFailure } from '../store/actions/app';

class FailureMessage extends React.Component {
  constructor(props){
    super(props);
    this.state = { visible: true }
  }

  handleDismiss = () => {
    this.setState({ visible: false })
    this.props.toggleFailure();
  }

  render() {
    if (this.state.visible) {
      return (
        <Message
          negative
          onDismiss={this.handleDismiss}
          header='Oh No! Something went Wrong'
          content='Looks like we there was a problem saving the tasks to the server! Please try again!'
        />
      )
    }

    return (
      <div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ toggleFailure }, dispatch);

export default connect(mapDispatchToProps)(FailureMessage);