import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { homePage } from './components/homePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Create } from './components/create';
import { Ads } from './components/ads';
import { Update } from './components/update';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Eire Cars</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/ads">Ads</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <Switch>
            <Route path='/' component={homePage} exact />
            <Route path='/create' component={Create} exact />
            <Route path='/ads' component={Ads} exact />
            <Route path='/update' component={Update} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
