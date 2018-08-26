import React, { Component } from 'react'
import axios from 'axios'

import Suggestions from './Suggestions';
import AddBeer from './AddBeer';

class Search extends Component {
  state = {
    error: false,
    query: '',
    results: [],
    filteredResults: [],
    fields: {}
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo = () => {
    axios.get('http://apichallenge.canpango.com/beers/')
      .then(({ data }) => {
        this.setState({
          results: data
        })
      })
      .catch(() => this.setState({ error: true }))
  }

  handleInputChange = (event) => {
    const query = event.target.value;
    this.setState({
      query,
    });
    const { results } = this.state;
    const filteredResults = results.filter(item => item.name.includes(query));
    this.setState({ filteredResults });
  }

  onSubmit = (fields) => {
    console.log('Search Component got: ', fields);
    this.setState({fields})
  }

  render() {
    return (
      <form>
        <input
          className="search"
          value={this.state.query}
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.filteredResults} />
        <AddBeer onSubmit={fields => this.onSubmit(fields)} data={this.props.data}/>
        {/* <p>
          {JSON.stringify(this.state.fields, null,2)}
        </p> */}
      </form>
    )
  }
}

export default Search