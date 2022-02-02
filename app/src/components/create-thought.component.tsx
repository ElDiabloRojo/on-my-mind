import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "emoji-mart/css/emoji-mart.css";
import { BaseEmoji, Picker } from "emoji-mart";

type Props = {};

type State = {
  content: string;
  feeling: string;
  showPicker: boolean;
};

export default class CreateThought extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // Setting up functions
    this.onChangeThoughtContent = this.onChangeThoughtContent.bind(this);
    this.onChangeThoughtFeeling = this.onChangeThoughtFeeling.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      content: "",
      feeling: "👺",
      showPicker: false,
    };
  }

  onChangeThoughtContent(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ content: e.target.value });
  }

  onChangeThoughtFeeling(e: BaseEmoji) {
    console.log("DEBUG: print event type for on change ", typeof e);

    this.setState({ feeling: e.native, showPicker: false });
  }

  onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    console.log("DEBUG: print event type for on submit ", typeof e);

    const thoughtObject = {
      content: this.state.content,
      feeling: this.state.feeling,
    };
    axios
      .post("http://localhost:4000/thoughts/create-thought", thoughtObject)
      .then((res) => console.log(res.data));

    this.setState({ content: "", feeling: "👺" });
  }

  renderFeeling() {
    if (this.state.showPicker) {
      return (
        <Picker
          title="How does it feel?"
          emoji="point_up"
          showPreview={false}
          onSelect={this.onChangeThoughtFeeling}
        />
      );
    }
    return (
      <Button
        variant="danger"
        size="lg"
        type="submit"
        className="mt-4"
        onClick={() => this.setState({ showPicker: true })}
      >
        {this.state.feeling}
      </Button>
    );
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Content">
            <Form.Label>Content</Form.Label>
            <Form.Control
              type="text"
              value={this.state.content}
              onChange={this.onChangeThoughtContent}
            />
          </Form.Group>

          <Form.Group controlId="Feeling">
            <Form.Label>Feeling</Form.Label>
            {this.renderFeeling()}
          </Form.Group>
          <Button variant="danger" size="lg" type="submit" className="mt-4">
            Contemplate
          </Button>
        </Form>
      </div>
    );
  }
}
