import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";
import "./../App.css"
import logo from "./../components/Logo"
import imgsrc from "./../logo_text.png"

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
            <div className="center-image">
                <img src={imgsrc} alt={""} />
            </div>
          <p>Are you over 18?</p>
          <form>
            <Button className='btn-yes' onClick={() => history.push('/RenderPage')}>Yes</Button>
            <div className="divider"/>
            <Button className='btn-no' onClick={() => history.push('/RenderPage')}>No</Button>
          </form>
        </div>
      </div>
    );
  }
}
