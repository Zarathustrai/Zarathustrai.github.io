import React from 'react';
import Beers from '../data/data.json';

export default class FetchBeers extends React.Component {
  state = {
    beerData: Beers
  }

  render() {
    return (
      <div className="cards">
        <>
        {this.state.beerData?.map(({name, abv, flavours, description, imagesrc}) => (
          <div key={name} className="card">
            <div className="beer">
              <img src={imagesrc} />
            </div>
            <h2>{name + " " + abv}</h2>
            <p>{description}</p>
          </div>
        ))}
        </>
      </div>
    )
  }
}
