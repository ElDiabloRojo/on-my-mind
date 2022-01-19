import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateThought from './components/create-thought.component'
import EditThought from './components/edit-thought.component'
import ThoughtList from './components/thought-list.component'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-thought'} className="nav-link">
                  What's on your mind?
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-thought'} className="nav-link">
                    Create Thought
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/thought-list'} className="nav-link">
                    Thought List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateThought {...props} />}
                  />
                  <Route
                    exact
                    path="/create-thought"
                    component={(props) => <CreateThought {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-thought/:id"
                    component={(props) => <EditThought {...props} />}
                  />
                  <Route
                    exact
                    path="/thought-list"
                    component={(props) => <ThoughtList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
