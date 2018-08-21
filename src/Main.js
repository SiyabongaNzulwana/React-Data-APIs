
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Catergory from "./Catergory";

class Main extends Component {
  constructor(){
    super();
    this.state = {
      catergories: null,
      beers: []
    }
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
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/Beers" component={Search} />
            <Route path="/Catergory" render={props=><Catergory {...props} data={this.state.catergories}/>}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;