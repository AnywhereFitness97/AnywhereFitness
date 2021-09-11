import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import Register from "./components/forms/Register";
import Login from "./components/forms/Login";
import Header from "./components/Header";
import Client from "./components/Client";
import Instructor from "./components/Instructor";
import CreateClass from "./components/forms/CreateClass";
import AvailableClassFocus from "./components/AvailableClassFocus";
import UpdateForm from "./components/forms/UpdateForm";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { setUsers } from "./actions/actions";
import QRCodeMaker from "./components/QRCodeMaker";
import PastClasses from "./components/PastClasses";
import Checkout from "./components/Checkout";
import StripeContainer from "./components/StripeContainer";
import Home from "./components/Home";
// changes

function App(props) {
	const { setUsers } = props;
	useEffect(() => {
		axios
			.get("https://anywherefitnessapis.herokuapp.com/api/v1/user/userinfo")
			.then((res) => {
				console.log(res);
				setUsers(res.data.Members_Info);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [setUsers]);
	return (
		<div className="AppContainer">
			<Header />

			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/" component={Home} />
				<Route path="/register" component={Register} />
				<Route exact path="/client" component={Client} />
				<Route exact path="/client/focus/:id" component={AvailableClassFocus} />
				<Route exact path="/client/pay" component={Checkout} />
				<Route exact path="/client/pay/process" component={StripeContainer} />
				<Route exact path="/client/pastclasses" component={PastClasses} />
				<Route exact path="/clientQrcode/:id" component={QRCodeMaker} />
				<Route exact path="/instructor" component={Instructor} />
				<Route exact path="/instructor/add" component={CreateClass} />
				<Route exact path="/instructor/:id" component={UpdateForm} />
			</Switch>
		</div>
	);
}

export default connect(null, { setUsers })(App);
