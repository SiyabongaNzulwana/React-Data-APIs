import React, { Component } from 'react';
import axios from 'axios';

class AddBeer extends Component {
  state = {
    name: '',
    ibu: '',
    abv: '',
    style: '',
    brewery_location: '',
    calories: ''
  };


  onChange = (event) => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    let options = this.state;
    console.log('options yep: ', options);
    this.props.onSubmit(this.state);

    axios.post('http://apichallenge.canpango.com/beers/', {
      options,
    })
      .then((response) => {
        console.log('hello response: ',response);
      })
      .catch((error) => {
        console.log('hello error: ',error);
      });

    this.setState({
      name: '',
      ibu: '',
      abv: '',
      style: '',
      brewery_location: '',
      calories: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="input"
          name="name"
          placeholder="Enter beer name"
          value={this.state.name}
          onChange={event => this.onChange(event)}
        />
        <br />
        <input
          className="input"
          name="ibu"
          placeholder="Enter ibu"
          value={this.state.ibu}
          onChange={event => this.onChange(event)}
        />
        <br />
        <input
          className="input"
          name="abv"
          placeholder="Enter abv"
          value={this.state.abv}
          onChange={event => this.onChange(event)}
        />
        <br />
        <input
          className="input"
          name="style"
          placeholder="Enter style"
          value={this.state.style}
          onChange={event => this.onChange(event)}
        />
        <br />
        <input
          className="input"
          name="brewery_location"
          placeholder="Enter brewery location"
          value={this.state.brewery_location}
          onChange={event => this.onChange(event)}
        />
        <br />
        <input
          className="input"
          name="calories"
          placeholder="Enter calories"
          value={this.state.calories}
          onChange={event => this.onChange(event)}
        />
        <br />
        <button className="submit" onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
export default AddBeer;
