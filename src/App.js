import React from "react";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
import Account from "./Pages/Account/Account";
import Login from "./Pages/Login/Login";
function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={Login} />
    //     <Route path="/account" component={Account} />
    //   </Switch>
    // </Router>
    <Account />
  );
}

export default App;
