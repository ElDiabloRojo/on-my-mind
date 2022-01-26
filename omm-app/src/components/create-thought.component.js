import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateThought extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeThoughtContent = this.onChangeThoughtContent.bind(this);
    this.onChangeThoughtFeeling = this.onChangeThoughtFeeling.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      content: '',
      feeling: ''
    }
  }

  onChangeThoughtContent(e) {
    this.setState({ content: e.target.value })
  }

  onChangeThoughtFeeling(e) {
    this.setState({ feeling: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const thoughtObject = {
      content: this.state.content,
      feeling: this.state.feeling
    };
    axios.post('http://localhost:4000/thoughts/create-thought', thoughtObject)
      .then(res => console.log(res.data));

    this.setState({ content: '', feeling: '', rollno: '' })
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Content">
          <Form.Label>Content</Form.Label>
          <Form.Control type="text" value={this.state.content} onChange={this.onChangeThoughtContent} />
        </Form.Group>

        <Form.Group controlId="Feeling">
          <Form.Label>Feeling</Form.Label>
          <Form.Control type="feeling" value={this.state.feeling} onChange={this.onChangeThoughtFeeling} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Contemplate
        </Button>
      </Form>
    </div>);
  }
}