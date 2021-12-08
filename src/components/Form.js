import React from 'react';

// delete function not implemented yet

const initialState = {
  name: "",
  ABV:  "",
  flav: "",
  desc: "",
  file: ""
};


export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

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
    const url = "http://localhost:3000/beers";
    const isValid = this.validate();

    if (!this.props.deleteBeer) {
      if (isValid) {
        //Add to JSON
        var data = {           //add data
          name: this.state.name,
          abv: this.state.ABV,
          flavours: this.state.flav,
          description: this.state.desc,
          imagesrc: this.state.file
        };

        data = JSON.stringify(data);

        console.log(data);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
           if (xhr.readyState === 4) {
              console.log(xhr.status);
              console.log(xhr.responseText);
           }};
        xhr.send(data);
      }
    } else {
      if (isValid) {
        //Add to JSON
        var data = {           //add data
          name: this.state.name,
          abv: this.state.ABV,
          flavours: this.state.flav,
          description: this.state.desc,
          imagesrc: this.state.file
        };

        data = JSON.stringify(data);

        console.log(data);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
           if (xhr.readyState === 4) {
              console.log(xhr.status);
              console.log(xhr.responseText);
           }};
        xhr.send(data);
      }
    }



    //clear form
    this.setState(initialState);
  }

  render() {
    if (this.props.isVisible) {
      if (this.props.deleteBeer == false) {
        return (
          <form key={this.props.deleteBeer} onSubmit={this.handleSubmit}>
            <fieldset className="BeerForm">
              <legend><b>Add Beer</b></legend>
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
              <input  type="text"
                      id="beerImage"
                      value={this.state.file}
                      name="file"
                      placeholder="Add Beer Image URL"
                      required
                      onChange={this.handleChange}/>
                      <button type="submit">Submit</button>
            </fieldset>
          </form>
        );
      } else {
        return (
          <form key={this.props.deleteBeer}>
            <fieldset className="delete">
              <legend><b>Delete Beer</b></legend>
              <input  type="text"
                      id="beerName"
                      value={this.state.name}
                      name="name"
                      placeholder="Enter Beer Name"
                      required
                      onChange={this.handleChange}/>
            <button>Delete</button>
            </fieldset>
          </form>
        );
      }
    } else {
      return(null);
    }
  }
}
