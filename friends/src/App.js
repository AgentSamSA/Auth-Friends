import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <div></div>
          <Link to="/protected">Friends List</Link>
          <div></div>
          <Link to="add-friend">Add Friend</Link>
        </nav>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/add-friend" component={AddFriend} />
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
