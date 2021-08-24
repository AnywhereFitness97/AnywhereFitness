import "./App.css";
import Register from "./components/forms/Register";
import Login from "./components/forms/Login";
import Header from "./components/Header";
// 
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="AppContainer">
      <Header />

      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
