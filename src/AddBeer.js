import React, { Component } from 'react';
import axios from 'axios';
import Catergory from './Catergory';

class AddBeer extends Component {
  // constructor() {
  //   super();
  // }
  state = {
    name: '',
    ibu: '',
    calories: '',
    abv: '',
    style: '',
    brewery_location: '',
    created_on: '',
    category: ''
  }

  // {
  //   "name":"Cya",
  //   "ibu":99 ,
  //   "calories":300 ,
  //   "abv":"5.00" ,
  //    "style":"Dry Xhosa Cider" ,
  //    "brewery_location":"Gauteng SA" ,
  //    "created_on":"2018-05-22T15:07:38.199247Z" ,
  //    "category":"http://apichallenge.canpango.com/category/8/"
  // }


  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    let options = this.state;
    console.log('options: ', options);
    this.props.onSubmit(this.state);
    axios.post('http://apichallenge.canpango.com/beers/', {
      // "name": this.state.name,
      // "ibu": this.state.ibu ,
      // "calories": this.state.calories,
      // "abv": this.state.abv ,
      //  "style": this.state.style ,
      //  "brewery_location": this.state.brewery_location ,
      //  "created_on": this.state.created_on ,
      //  "category": this.state.category
    })
      .then((response) => {
        console.log('hello response: ', response);
      })
      .catch((error) => {
        console.log('hello error: ', error);
      });

    this.setState({
      name: '',
      ibu: '',
      calories: '',
      abv: '',
      style: '',
      brewery_location: '',
      created_on: '',
      category: ''
    })
  }

  componentDidMount = () => {
    let categoryUrl = 'http://apichallenge.canpango.com/category/'
    let categoryNumber = Math.floor(Math.random() * 11) + '/';
    let fullCategoryUrl = categoryUrl + categoryNumber;
    this.setState({ category: fullCategoryUrl });

    let today = new Date();
    let now = today.toJSON();
    this.setState({created_on: now});

  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {/* <Catergory data={this.props.data} /> */}
        <br />
        <label>beer name: <input
          className="input"
          name="name"
          placeholder="Enter beer name"
          value={this.state.name}
          onChange={event => this.onChange(event)}/>
        </label>
        <br />
        <label>beer ibu: <input
          className="input"
          name="ibu"
          placeholder="Enter ibu"
          value={this.state.ibu}
          onChange={event => this.onChange(event)}/>
        </label>
        <br />
        <label>beer calories: <input
          className="input"
          name="calories"
          placeholder="Enter calories"
          value={this.state.calories}
          onChange={event => this.onChange(event)}/>
        </label>
        <br />
        <label>beer abv: <input
          className="input"
          name="abv"
          placeholder="Enter abv"
          value={this.state.abv}
          onChange={event => this.onChange(event)}/>
        </label>
        <br />
        <label>beer style: <input
          className="input"
          name="style"
          placeholder="Enter style"
          value={this.state.style}
          onChange={event => this.onChange(event)}/>
        </label>
        <br />
        <label>brewery_location: <input
          className="input"
          name="brewery_location"
          placeholder="Enter brewery location"
          value={this.state.brewery_location}
          onChange={event => this.onChange(event)}/>
        </label>
        <br />
        <label>beer created_on: <input
          className="input"
          name="created_on"
          placeholder="Enter created_on"
          value={this.state.created_on}
          onChange={event => this.onChange(event)}/>
        </label>
        <br />
        <label>beer category: <input
          className="input"
          name="category"
          placeholder="Enter category"
          value={this.state.category}
          onChange={event => this.onChange(event)}/>
        </label>
        <br />
        <button className="submit" onClick={e => this.onSubmit(e)}>Add Beer</button>
      </form>
    );
  }
}
export default AddBeer;


// state = {
//   options: []
// }
// ...
// componentDidMount() {
// // fetch data
// this.setState({ options: data });
// }
// ...
// render() {
// return (<Dropdown options={this.state.options} />)
// }﻿