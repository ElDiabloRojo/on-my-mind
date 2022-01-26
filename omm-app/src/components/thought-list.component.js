import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ThoughtTableRow from './ThoughtTableRow';


export default class ThoughtList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      thoughts: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/thoughts/')
      .then(res => {
        this.setState({
          thoughts: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.thoughts.map((res, i) => {
      return <ThoughtTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Content</th>
            <th>Feeling</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}