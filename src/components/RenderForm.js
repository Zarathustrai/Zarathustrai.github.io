import React from 'react';
import Form from './Form';

export default class RenderForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      deleteBeer: false
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      deleteBeer: !this.state.deleteBeer
    });
  };

  render() {
    if (this.props.isVisible) {
      return (
        <div>
          <form>
            <fieldset className="delete">
              <legend><b>Delete Beer</b></legend>
              <input  type="button"
                      id="deleteBeer"
                      value={this.state.deleteBeer}
                      name="deleteBeer"
                      placeholder="Tick to delete beer"
                      required
                      onClick={this.handleChange}/>
            </fieldset>
          </form>
          <Form isVisible = {1} deleteBeer = {this.state.deleteBeer}/>
        </div>
      );
    } else {
      return(<Form isVisible = {0} deleteBeer = {this.state.deleteBeer}/>);
    }
  }
}
