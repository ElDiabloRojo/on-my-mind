import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class EditThought extends Component {

  constructor(props) {
    super(props)

    this.onChangeThoughtContent = this.onChangeThoughtContent.bind(this);
    this.onChangeThoughtFeeling = this.onChangeThoughtFeeling.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      content: '',
      feeling: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/thought/edit-thought/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          content: res.data.content,
          feeling: res.data.feeling
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeThoughtName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeThoughtEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeThoughtRollno(e) {
    this.setState({ rollno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const thoughtObject = {
      content: this.state.content,
      feeling: this.state.feeling
    };

    axios.put('http://localhost:4000/thought/update-thought/' + this.props.match.params.id, thoughtObject)
      .then((res) => {
        console.log(res.data)
        console.log('Thought successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Thought List 
    this.props.history.push('/thought-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Content</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeThoughtName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Feeling</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeThoughtEmail} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Thought
        </Button>
      </Form>
    </div>);
  }
}