import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userSelect } from '../actions/index';

class UserList extends React.Component {
  
  createListItems = () => {
    return this.props.users.map((user) => {
      return (
        <li onClick={() => this.props.userSelect(user)} key={user.id}>{user.name}</li>
      )
    })  
  }

  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({userSelect: userSelect}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);