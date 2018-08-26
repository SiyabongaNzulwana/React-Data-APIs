
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Catergory from "./Catergory";
import BeerDetails from './BeerDetails';

class Main extends Component {
  constructor(){
    super();
    this.state = {
      catergories: [],
      beers: []
    }
  }

  componentDidMount = async() => {
    let initialCataergories = [];
    await fetch('http://apichallenge.canpango.com/categories/')
      .then(response => {
        console.log('response: ', response);
        return response.json();
      }).then(data => {
        console.log('data: ', data);
        initialCataergories = data.map((category) => {
          return category
        });
        this.setState({
          catergories: initialCataergories,
        });
        console.log('catergories after state: ', this.state.catergories);
      });
  }

  render() {
    return (
      <HashRouter>
        <div>
          <h1>Canpango Beer Data</h1>
          <ul className="header">
            <li><NavLink onClick={this.getCatergories} exact to="/">Home</NavLink></li>
            <li><NavLink to="/Beers">BeerList</NavLink></li>
            <li><NavLink to="/Catergory">Catergory</NavLink></li>
            <li><NavLink to="/BeerDetails">BeerDetails</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/Beers" render={props => <Search {...props} data={this.state.catergories}/>}/>
            <Route path="/Catergory" render={props => <Catergory {...props} data={this.state.catergories}/>}/>
            <Route path="/BeerDetails" component={BeerDetails} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;