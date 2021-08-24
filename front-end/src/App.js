import "./App.css";
import Register from "./components/forms/Register";
import Login from "./components/forms/Login";
import Header from "./components/Header";
import Client from "./components/Client";
import Instructor from "./components/Instructor";
import CreateClass from "./components/forms/CreateClass";
//
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="AppContainer">
      <Header />

      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/client" component={Client} />
        <Route exact path="/instructor" component={Instructor} />
        <Route path="/instructor/add" component={CreateClass} />
      </Switch>
    </div>
  );
}

export default App;
