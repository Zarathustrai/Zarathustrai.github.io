import React from 'react';

export default class FetchBeers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: null,
    };
  }

  componentDidMount() {
    const url = "https://test-1bd08-default-rtdb.europe-west1.firebasedatabase.app/beers";
    fetch(url)
      .then(response => response.json())
      .then(beers => this.setState({beers}));
  }

  render() {
    return (
      <div className="cards">
        <>
        {this.state.beers?.map(({name, abv, flavours, description, imagesrc}) => (
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
