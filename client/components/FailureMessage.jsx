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
    console.log(this.props)
    if (!this.props.injectedState) {
      return (
        <Message negative>
          <Message.Header>Oh no! Failed to Inject Pre-loaded State</Message.Header>
          <Message.List>
            <Message.Item>We had trouble loading the data from the server. Please refresh or try again later</Message.Item>
            <Message.Item>Warning! If any changes are saved, your previous task list will be over written</Message.Item>
          </Message.List>
        </Message>
      )
    } else if (this.state.visible) {
      return (
        <Message
          negative
          onDismiss={this.handleDismiss}
          header='Oh No! Something went Wrong'
          content='Looks like we there was a problem saving the tasks to the server! Please try again!'
        />
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  }
}
const mapStateToProps = state => ({
  injectedState: state.app.injectedState,
});
const mapDispatchToProps = dispatch => bindActionCreators({ toggleFailure }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FailureMessage);