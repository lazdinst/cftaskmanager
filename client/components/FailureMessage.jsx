import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

class FailureMessage extends Component {
  state = { visible: true }

  handleDismiss = () => {
    this.setState({ visible: false })
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

export default FailureMessage;