import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { ContactPage } from './components/ContactPage';
import { IndexPage } from './components/IndexPage';
import { ProfilePage } from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import Data from './db/data.json';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
          <Route
            path="/"
            exact
            render={() => (<IndexPage title={Data.index.title} desc={Data.index.desc} />)} />
          <Route
            path="/contact"
            render={() => (<ContactPage title={Data.contact.title} desc={Data.contact.desc} />)} />
          <Route path="/login" component={LoginPage} />
          <ProtectedRoute path="/profile" component={ProfilePage} />
        </div>
      </Router>

    );
  }
}

export default App;
