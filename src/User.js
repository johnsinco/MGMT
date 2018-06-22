import React, { Component } from 'react'
import AddressRow from './AddressRow'

class User extends Component {
  constructor(props) {
    super(props)
    var editnow = props.editing || false
    this.state = {...props, ...{editing: editnow}}
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
      <tr>
      <td colSpan="6">
        <form onSubmit={this.save}>
        <div>
          <label htmlFor="firstName">first name</label>
          <input name="firstName" value={this.state.firstName} onChange={this.updated} />
        </div>
        <div>
          <label htmlFor="lastName">last name</label>
          <input name="lastName" value={this.state.lastName} onChange={this.updated} />
        </div>
        <button>Save</button>
        </form>
        </td>
      </tr>
    )
  }
  renderRow() {
    return (
      <tr key={this.props.key}>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td colSpan="3"><AddressRow {...this.props.address} /></td>
        <td><button onClick={this.edit} id="edit">edit</button></td>
        <td><button onClick={this.delete} id="delete">delete</button></td>
      </tr>
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
