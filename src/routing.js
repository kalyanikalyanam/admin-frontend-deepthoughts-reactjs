import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Post from "./components/Post";
import Contact from "./components/Contact";
import Medialibrary from "./components/Medialibrary";
import Settings from "./components/Settings";
import Profilesetting from "./components/Profilesetting";
import Changepassword from "./components/Changepassword";
import Menu from "./components/menu/menu";
import AddMenu from "./components/menu/add_menu";
import EditMenu from "./components/menu/edit_menu";
import ViewMenu from "./components/menu/view_menu";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/post" component={Post}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/medialibrary" component={Medialibrary}></Route>
        <Route exact path="/settin" component={Settings}></Route>
        <Route exact path="/profile" component={Profilesetting}></Route>
        <Route exact path="/changepassword" component={Changepassword}></Route>
        <Route exact path="/menu" component={Menu}></Route>
        <Route exact path="/add_menu" component={AddMenu}></Route>
        <Route exact path="/edit_menu/:_id" component={EditMenu}></Route>
        <Route exact path="/view_menu/:_id" component={ViewMenu}></Route>
      </Switch>
    </Router>
  );
}

export default Routing;
