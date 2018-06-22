import React, { Component } from 'react';
import User from './User'

class UserList extends Component {
    constructor(props) {
      super(props)
      var addr = {street: '111 1st', city: 'Ames', state: 'IA', postcode: '77777'}
      this.state = { users: [
        {firstName: 'Jane', lastName: 'Doe', address: addr},
        {firstName: 'Dave', lastName: 'Smith', address: addr}
      ]}
      this.eachUser = this.eachUser.bind(this)
      this.updateUser = this.updateUser.bind(this)
      this.addUser = this.addUser.bind(this)
    }
    render() {
      return (
        <div className="container">
        <table className="userlist">
        <thead><tr><th>First Name</th><th>Last Name</th><th>Address</th></tr></thead>
        <tbody>
          {this.state.users.map((user, idx) => this.eachUser(user, idx))}
        </tbody>
        </table>
        <button onClick={this.addUser}>add user</button>
        </div>
      )
    }

    eachUser(user, idx) {
      return (
        <User {...user} onChange={this.updateUser} key={idx} index={idx} />
      )
    }
    updateUser(user, idx) {
      this.setState(prev => ({
        users: prev.users.map((u,i) => (i !== idx) ? u : user)
      }))
    }
    addUser() {
      var newUser = {
        firstName: '', lastName: '', editing: true,
        address: {}, index: this.state.users.length+1
      }
      this.setState(prev => ({
        users: [
          ...prev.users,
          newUser
        ]
      }))
    }
}

export default UserList
