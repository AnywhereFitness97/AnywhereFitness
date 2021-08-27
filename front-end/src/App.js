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
import UpcomingClasses from "./components/UpcomingClasses";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { setUsers } from "./actions/actions";

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
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/client" component={Client} />
        <Route exact path="/client/focus/:id" component={AvailableClassFocus} />
        <Route exact path="/client/upcoming" component={UpcomingClasses} />
        <Route exact path="/instructor" component={Instructor} />
        <Route exact path="/instructor/add" component={CreateClass} />
        <Route exact path="/instructor/:id" component={UpdateForm} />
      </Switch>
    </div>
  );
}

export default connect(null, { setUsers })(App);
