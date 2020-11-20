import React, { Component } from 'react';
import AddUser from './AddUser';
import UserList from './UserList';


class App extends Component {
  state = {
    users: [],
  };

  createContact = user => {
    user.numGamesPlayed = 0;
    this.setState(currState => ({
      users: [...currState.users, user],
    }));
  };

  render() {
    return (
      <div className="App>">
        <AddUser users={this.state.users} onAddUser={this.createContact} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;

