import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import RenderPage from "./components/RenderPage";
import Home from "./components/home/Home";
import history from './history';

export default class Routes extends Component {
	render() {
		return (
			<Router history={history}>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/RenderPage" component={RenderPage} />
				</Switch>
			</Router>
		)
	}
}
