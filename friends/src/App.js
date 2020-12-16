import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/protected" component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
