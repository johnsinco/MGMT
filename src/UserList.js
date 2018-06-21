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
    }
    render() {
      return (
        <ul>
          {this.state.users.map((user, idx) => this.eachUser(user, idx))}
        </ul>
      )
    }

    eachUser(user, idx) {
      return (
        <User {...user} onChange={this.updateUser} key={idx} index={idx} />
      )
    }
    updateUser(user, idx) {
      console.log(`updateing user======${user} ${idx}`)
      console.log(idx)
      console.log(user)
      this.setState(prev => ({
        users: prev.users.map((u,i) => (u.index !== idx) ? u : user)
      }))
      console.log("state is.......")
      console.log(this.state)
    }
}

export default UserList
