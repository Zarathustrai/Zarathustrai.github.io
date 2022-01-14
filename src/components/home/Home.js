import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from '../../history';
import "./Home.css";
import logo from "../data/images/logo_text.png";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
            <div className="center-image">
                <img className="img-smoll" src={logo} alt="" />
            </div>
            <h1>BEER MENTOR</h1>
          <p>Are you over 18?</p>
            <div className="divider-height"/>
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
