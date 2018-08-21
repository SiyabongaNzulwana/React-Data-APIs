
import React, { Component } from "react";
import Select from "./Select";

class Catergory extends Component {
  constructor() {
    super();
    this.state = {
      catergories: [],
    };
  }

  componentDidMount() {
    let initialCataergories = [];
    fetch('http://apichallenge.canpango.com/categories/')
      .then(response => {
        return response.json();
      }).then(data => {
        initialCataergories = data.map((category) => {
          return category
        });
        this.setState({
          catergories: initialCataergories,
        });
      });
  }
  render() {
    return (
      <Select state={this.state} />
    );
  }
}

export default Catergory;