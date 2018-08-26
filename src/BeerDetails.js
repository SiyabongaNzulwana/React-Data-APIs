import React, { Component } from 'react';
import Beer from './Beer';

class BeerDetails extends Component {
  state = {
    beerDetails: []
  }

  componentDidMount = async()=> {
    let beers = [];
    await fetch('http://apichallenge.canpango.com/beers/')
      .then(response => {
        console.log('response: ', response);
        return response.json();
      }).then(data => {
        console.log('data: ', data);
        beers = data.map((beer) => {
          return beer
        });
        this.setState({
          beerDetails: beers,
        });
        console.log('beerDetails after state: ', this.state.beerDetails);
      });
  }

  deleteBeer = (index, e) => {
    const beers = this.state.beerDetails;
    beers.splice(index, 1);
    this.setState({beerDetails: beers})
    console.log('deleted');
  }

  showBeerDetails = async() => {
    let details = [];
    await fetch('http://apichallenge.canpango.com/beers/')
      .then(response => {
        return response.json();
      }).then(data => {
        details = data.map((beer) => {
          console.log('My data: ',beer.name, beer.ibu, beer.calories, beer.abv, beer.style, beer.brewery_location);
          //return beer
        });
      });
  }
  render() {
    return(
      <div>
        <ul>
          {this.state.beerDetails.map((beer, index)=>{
            return <Beer showBeerDetails={this.showBeerDetails} key={beer.name}removeBeer={this.deleteBeer.bind(this, index)}>{beer.name}</Beer>
          })}
        </ul>
      </div>
    )
  }
}
export default BeerDetails;