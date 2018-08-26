
import React, { Component } from "react";

class Catergory extends Component {
  render() {
    console.log('this.props.data;', this.props.data);
    let catergories = this.props.data;
    let optionItems = catergories.map((catergory, i) =>
      <option key={i}>{catergory.name}</option>);
    return (
      <div>
        <p>Catergories</p>
        <select>
           {optionItems}
        </select>
      </div>
    );
  }
}

export default Catergory;