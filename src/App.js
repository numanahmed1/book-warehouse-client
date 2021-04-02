import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Orders from "./components/Orders/Orders";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import Deals from "./components/Deals/Deals";
import Login from "./components/Login/Login";
import CheckOut from "./components/CheckOut/CheckOut";
import "firebase/analytics";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";

export const userInfoContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userInfoContext.Provider
      value={[loggedInUser, setLoggedInUser]}
      className="app"
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <PrivateRoute path="/orders">
            <Header />
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/deals">
            <Header />
            <Deals />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <PrivateRoute path="/checkout/:bookId">
            <Header />
            <CheckOut />
          </PrivateRoute>
          <Route path="*">
            <Header />
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </userInfoContext.Provider>
  );
}

export default App;
