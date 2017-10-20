import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

class SuccessMessage extends Component {
  state = { visible: true }

  handleDismiss = () => {
    this.setState({ visible: false })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: false })
    }, 3000)
  }

  render() {
    if (this.state.visible) {
      return (
        <Message
          positive
          onDismiss={this.handleDismiss}
          header='All changes have been Saved!'
        />
      )
    }

    return (
      <div>
      </div>
    )
  }
}

export default SuccessMessage;