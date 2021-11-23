import React from 'react';
import Beers from '../data/data.json';

// not implemented yet. Troubles with changing json files.

const initialState = {
  name: "",
  ABV:  "",
  flav: "",
  desc: "",
  file: ""
};

export default class Form extends React.Component {
  state = initialState;

  validate = () => {
    return 1;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const url = "/data/data.json";
    const isValid = this.validate();
    if (isValid) {
      //Add to JSON
      const data = {           //add data
        name: this.state.name,
        abv: this.state.ABV,
        flavours: this.state.flav,
        description: this.state.desc,
        imagesrc: this.state.file
      };


      //clear form
      this.setState(initialState);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className="BeerForm">
          <legend><b>Add Beer!</b></legend>
          <input  type="text"
                  id="beerName"
                  value={this.state.name}
                  name="name"
                  placeholder="Enter Beer Name"
                  required
                  onChange={this.handleChange}/>
          <input  type="text"
                  id="beerABV"
                  value={this.state.ABV}
                  name="ABV"
                  placeholder="Enter Beer ABV"
                  required
                  onChange={this.handleChange}/>
          <input  type="text"
                  id="beerFlav"
                  value={this.state.flav}
                  name="flav"
                  placeholder="Enter Beer Flavours"
                  required
                  onChange={this.handleChange}/>
          <textarea
                  id="beerDesc"
                  value={this.state.desc}
                  name="desc"
                  placeholder="Enter Beer Description"
                  required
                  onChange={this.handleChange}/>
          <input  type="file"
                  id="beerImage"
                  value={this.state.file}
                  name="file"
                  placeholder="Add Beer Image"
                  required
                  onChange={this.handleChange}/>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
