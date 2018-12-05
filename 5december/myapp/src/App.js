import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

const Index = () => {
  return (
    <>
      <h1>Index Page</h1>
      <p>Lorem ipsum text ... </p>
    </>
  )
}

// match , history, location

const Product = ({ match }) => {
  return (
    <div>
      <h2>category {match.params.category.toUpperCase()}</h2>
    </div>)
}
const Products = ({ match }) => {
  return (
    <>
      <h1>Product Page</h1>
      <p>Lorem ipsum Products ... </p>
      <nav>
        <ul>
          <li><Link to={`${match.url}/mobiles`}>Mobile phones</Link></li>
          <li><Link to={`${match.url}/laptops`}>Laptops</Link></li>
          <li><Link to={`${match.url}/cameras`}>Cameras</Link></li>
        </ul>
      </nav>
      {/* exact sachiroa tore indexic gamochdeba da productic */}
      <Route path={`${match.url}/:category`} component={Product}/>
      <Route path={`${match.url}`} exact render={() => {
        return (
          <div>
            <h2>Select Product category</h2>
          </div>
        )
      }} />
    </>
  )
}
const Portfolio = () => {
  return (
    <>
      <h1>Portfolio Page</h1>
      <p>Lorem ipsum Portfolio ... </p>
    </>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Index</Link></li>
              <li><Link to="/products">Product</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
          </nav>
          {/* exact sachiroa tore indexic gamochdeba da productic */}
          <Route path="/" component={Index} exact />
          <Route path="/products" component={Products} />
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default App;
