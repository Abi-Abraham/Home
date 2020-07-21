import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.scss";
import SideNav from "./component/SideNav";
import User from "./component/User";
import { Route, Switch } from "react-router-dom";
import Listing from "./pages/listing/Listing";
import Details from "./pages/details/Details";

function App() {
  return (
    <div>
      <SideNav />
      <User />
      <Switch>
        <Provider store={store}>
          <Route path="/" exact>
            <Listing />
          </Route>
          <Route path="/details/:id" exact>
            <Details />
          </Route>
        </Provider>
      </Switch>
    </div>
  );
}

export default App;
