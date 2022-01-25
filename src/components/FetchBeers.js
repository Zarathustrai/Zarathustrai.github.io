import React from 'react';

export default class FetchBeers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: null,
      render: false,
    };
  }

  componentDidMount() {
    this.setState({render: false});
    const url = "https://api.jsonbin.io/b/61ea9776a785682f9719f382/latest";
    fetch(url, {
      headers: {
        "secret-key": "$2b$10$KmJxZbbdQOIyizb54EKujOIIWwd.vFh4E0B3efAua8t9T/tLf5HV6"
      }
    })
      .then(response => response.json())
      .then(beers => {console.log(beers); this.setState({beers});})
      .then(() => this.setState({beers: JSON.parse(JSON.stringify(this.state.beers)).beers}))
      .then(() => this.setState({render: true}));
  }

  render() {
    if (this.state.render) {
      return (
        <div className="cards">
          <>
          {this.state.beers?.map(({name, abv, flavours, description, imagesrc}) => (
            <div key={name} className="card">
              <div className="beer center">
                <img className="center" src={imagesrc} />
              </div>
              <h4 className="font smallmedium">{name + " " + abv}</h4>
              <text className="cardtext">{description}</text>
            </div>
          ))}
          </>
        </div>
      )
    }
    return (
      <div className="medium">Loading Beers</div>
    )
  }
}
