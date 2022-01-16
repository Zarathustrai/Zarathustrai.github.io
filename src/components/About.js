import React from 'react';
import NavBar from './NavBar';
import FetchBeers from './FetchBeers';
import RenderForm from './RenderForm';

export default class About extends React.Component {

  render() {
    if (this.props.isVisible) {
      return (
        <div>
          <div className="content">
            <div className="centerContent">
              <h1>Beer Database</h1>
              <FetchBeers/>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
