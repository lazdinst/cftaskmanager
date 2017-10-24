import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Message } from 'semantic-ui-react'

import { toggleSuccess } from '../store/actions/app';

class SuccessMessage extends React.Component {
  constructor(props){
    super(props);
    this.state = { visible: true }
  }

  handleDismiss = () => {
    this.setState({ visible: false });
    this.props.toggleSuccess();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: false });
      this.props.toggleSuccess();
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
const mapStateToProps = state => ({
  tasks: state.app.tasks,
});

const mapDispatchToProps = dispatch => bindActionCreators({toggleSuccess}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SuccessMessage);