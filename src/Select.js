

import React, { Component } from "react";

class Select extends Component {
  constructor() {
    super();
  }
  render() {
    let catergories = this.props.state.catergories;
    let optionItems = catergories.map((catergorie, i) =>
      <option key={i}>{catergorie.name}</option>
    );

    return (
      <div>
        <p>Catergories</p>
        <select>
           {optionItems}
        </select>
      </div>
    )
  }
}

export default Select;