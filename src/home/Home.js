import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";
import logo from "./../components/Logo"

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
            TODO: make logo appear (it is invisible right now)
            {/*<div className="center-image">*/}
            {/*    <logo/>*/}
            {/*</div>*/}
            <h1>BEER MENTOR</h1>
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
