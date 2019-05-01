import React from 'react';
import { connect } from 'react-redux';

class UserDetail extends React.Component {
  render() {
    if (!this.props.user) {
      return (
        <h4>Select a user .....</h4>
      )
    }
    return (
      <div>
        {this.props.user.name}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail);