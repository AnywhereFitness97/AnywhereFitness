import "./App.css";
import Register from "./components/forms/Register";
import Login from "./components/forms/Login";
import Header from "./components/Header";
import Client from "./components/Client";
import Instructor from "./components/Instructor";
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
        <Route path="/instructor" component={Instructor} />
      </Switch>
    </div>
  );
}

export default App;
