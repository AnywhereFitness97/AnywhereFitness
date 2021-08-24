import "./App.css";
import React from "react";
import Login from "./components/forms/Login";
<<<<<<< Updated upstream

=======
import Header from "./components/Header";
import Client from "./components/Client";
import Instructor from "./components/Instructor";
import CreateClass from "./components/forms/CreateClass";
import AvailableClassFocus from "./components/AvailableClassFocus";
//
import { Route, Switch } from "react-router-dom";
>>>>>>> Stashed changes

function App() {

<<<<<<< Updated upstream


	return <div className="AppContainer">
		
	</div>;
=======
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/client" component={Client} />
        <Route exact path="/client/:id" component={AvailableClassFocus} />
        <Route exact path="/instructor" component={Instructor} />
        <Route path="/instructor/add" component={CreateClass} />
      </Switch>
    </div>
  );
>>>>>>> Stashed changes
}

export default App;
