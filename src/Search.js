import React, { Component } from 'react'
import axios from 'axios'

import Suggestions from './Suggestions'
import AddBeer from './AddBeer';


class Search extends Component {
  state = {
    error: false,
    query: '',
    results: [],
    fields: {}
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
    this.setState({
      query: event.target.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        // this.showDropdown()
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
        // this.hideDropdown()
      }
    })
  }

  onSubmit = (fields) => {
    console.log('Search Component got: ', fields);
    this.setState({fields})
  }

  render() {
    console.log('this.state.query: ', this.state.query)
    return (
      <form>
        <input
          className="search"
          value={this.state.query}
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
        <AddBeer onSubmit={fields => this.onSubmit(fields)}/>
        {/* <p>
          {JSON.stringify(this.state.fields, null,2)}
        </p> */}
      </form>
    )
  }
}

export default Search