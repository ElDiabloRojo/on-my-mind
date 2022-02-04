import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

export default class ThoughtTableRow extends Component {
  constructor(props) {
    super(props)
    this.deleteThought = this.deleteThought.bind(this)
  }

  deleteThought() {
    axios
      .delete(
        'http://localhost:4000/thoughts/delete-thought/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('Thought successfully deleted!')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.content}</td>
        <td>{this.props.obj.feeling}</td>
        <td>
          <Link
            className="edit-link" path={"product/:id"}
            to={'/edit-thought/' + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteThought} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}
