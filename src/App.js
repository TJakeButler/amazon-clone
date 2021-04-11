import Header from "./Header";
import Checkout from "./Checkout";
import Home from "./Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM convention
    <Router>
      <div className="app">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
