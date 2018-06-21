import React, { Component } from 'react'
import AddressRow from './AddressRow'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {...props, ...{editing: false}}
    this.edit = this.edit.bind(this)
    this.delete = this.delete.bind(this)
    this.renderEdit = this.renderEdit.bind(this)
    this.renderRow = this.renderRow.bind(this)
    this.updated = this.updated.bind(this)
    this.save = this.save.bind(this)
  }
  edit() {
    this.setState({editing: true})
  }
  delete() {
    alert('delete')
  }
  renderEdit() {
    return (
      <div>
        <form onSubmit={this.save}>
        <div>
          <label for="firstName">first name</label>
          <input name="firstName" value={this.state.firstName} onChange={this.updated} />
        </div>
        <div>
          <label for="lastName">last name</label>
          <input name="lastName" value={this.state.lastName} onChange={this.updated} />
        </div>
        <button>Save</button>
        </form>
      </div>
    )
  }
  renderRow() {
    return (
      <li key={this.props.key}>
      <div>
        <span>{this.props.firstName}</span>
        <span>{this.props.lastName}</span>
        <AddressRow {...this.props.address} />
        <button onClick={this.edit} id="edit">edit</button>
        <button onClick={this.delete} id="delete">delete</button>
      </div>
      </li>
    );
  }

  render() {
    return this.state.editing ? this.renderEdit() : this.renderRow()
  }

  save(event) {
    event.preventDefault()
    this.props.onChange(this.state, this.props.index)
    this.setState({editing: false})
  }

  updated(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({[name]: value})
  }

}

export default User
