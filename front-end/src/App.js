import "./App.css";
import Register from "./components/forms/Register";
import Login from "./components/forms/Login";
import Header from "./components/Header";
import Client from "./components/Client";
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
      </Switch>
    </div>
  );
}

export default App;
