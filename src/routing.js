import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import Contact from "./components/Contact";
import Medialibrary from "./components/Medialibrary";
import Settings from "./components/Settings";
import Profilesetting from "./components/Profilesetting";
import Changepassword from "./components/Changepassword";

//Menu
import Menu from "./components/menu/menu";
import AddMenu from "./components/menu/add_menu";
import EditMenu from "./components/menu/edit_menu";
import ViewMenu from "./components/menu/view_menu";

//Sub Menu
import AddSubMenu from "./components/sub_menu/add_sub_menu";
import SubMenu from "./components/sub_menu/sub_menu";
import EditSubMenu from "./components/sub_menu/edit_sub_menu";
import ViewSubMenu from "./components/sub_menu/view_sub_menu";

//Post
import Post from "./components/post/Post";
import Addpost from "./components/post/add_post";
import EditPost from "./components/post/edit_post";
import ViewPost from "./components/post/view_post";
//Home1
// import EditHome1 from "./components/home1/edit_home1";
import AddHome1 from "./components/home1/add_home1";
import EditHome1 from "./components/home1/edit_home1";
import ViewHome1 from "./components/home1/view_home1";
import Home1 from "./components/home1/home1";
//AddHome2
//home 1.1 images

import AddHome1_1 from "./components/home1_1/add_home1_1";
import EditHome1_1 from "./components/home1_1/edit_home1_1";
import ViewHome1_1 from "./components/home1_1/view_home1_1";
import Home1_1 from "./components/home1_1/home1_1";
//AddHome2
import Home2 from "./components/home2/home2";
import AddHome2 from "./components/home2/add_home2";
import EditHome2 from "./components/home2/edit_home2";
import ViewHome2 from "./components/home2/view_home2";

//AddHome3
import Home3 from "./components/home3/home3";
import AddHome3 from "./components/home3/add_home3";
import EditHome3 from "./components/home3/edit_home3";
import ViewHome3 from "./components/home3/view_home3";

//AddHome4
import Home4 from "./components/home4/home4";
import AddHome4 from "./components/home4/add_home4";
import EditHome4 from "./components/home4/edit_home4";
import ViewHome4 from "./components/home4/view_home4";

//About2
import About2 from "./components/about2/about2";
import AddAbout2 from "./components/about2/add_about2";
import EditAbout2 from "./components/about2/edit_about2";
import ViewAbout2 from "./components/about2/view_about2";

//About3
import About3 from "./components/about3/about3";
import AddAbout3 from "./components/about3/add_about3";
import EditAbout3 from "./components/about3/edit_about3";
import ViewAbout3 from "./components/about3/view_about3";

//Bloog
import Blog from "./components/blog/edit_blog";

import BlogCategory from "./components/blogcategories/blogcategory";
import AddBlogCategory from "./components/blogcategories/add_blogcategory";
import EditBlogCategory from "./components/blogcategories/edit_blogcategory";
import ViewBlogCategory from "./components/blogcategories/view_blogcategory";

//Article
import Blog1 from "./components/blog1/blog1";
import AddBlog1 from "./components/blog1/add_blog1";
import EditBlog1 from "./components/blog1/edit_blog1";
import ViewBlog1 from "./components/blog1/view_blog1";

//Private pages
import PrivatePage from "./components/privatepages/privatepage";
import AddPrivatePage from "./components/privatepages/add_privatepage";
import EditPrivatePage from "./components/privatepages/edit_privatepage";
import ViewPrivatePage from "./components/privatepages/view_privatepage";

import SidebarSample from "./components/sidebarsample";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/medialibrary" component={Medialibrary}></Route>
        <Route exact path="/settin" component={Settings}></Route>
        <Route exact path="/profile" component={Profilesetting}></Route>
        <Route exact path="/changepassword" component={Changepassword}></Route>
        {/* Menu */}
        <Route exact path="/menu" component={Menu}></Route>
        <Route exact path="/add_menu" component={AddMenu}></Route>
        <Route exact path="/edit_menu/:_id" component={EditMenu}></Route>
        <Route exact path="/view_menu/:_id" component={ViewMenu}></Route>
        {/* Sub Menu */}
        {/* <Route exact path="/menu" component={Menu}></Route> */}
        <Route exact path="/add_sub_menu" component={AddSubMenu}></Route>
        <Route exact path="/sub_menu" component={SubMenu}></Route>
        <Route exact path="/edit_sub_menu/:_id" component={EditSubMenu}></Route>
        <Route exact path="/view_sub_menu/:_id" component={ViewSubMenu}></Route>
        {/* Post */}
        <Route exact path="/post" component={Post}></Route>
        <Route exact path="/add_post" component={Addpost}></Route>
        <Route exact path="/edit_post/:_id" component={EditPost}></Route>
        <Route exact path="/view_post/:_id" component={ViewPost}></Route>
        {/* AddHome1 */}
        <Route exact path="/home_section_1" component={Home1}></Route>
        <Route exact path="/add_home1" component={AddHome1}></Route>
        {/* <Route exact path="/edit_home1/:_id" component={EditHome1}></Route> */}
        <Route
          exact
          path="/home1/608b912efcc7860015dce5b1"
          component={EditHome1}
        ></Route>
        <Route exact path="/view_home1/:_id" component={ViewHome1}></Route>
        {/* //Home2 */}
        <Route exact path="/home_section_2" component={Home2}></Route>
        <Route exact path="/add_home2" component={AddHome2}></Route>
        <Route exact path="/edit_home2/:_id" component={EditHome2}></Route>
        <Route exact path="/view_home2/:_id" component={ViewHome2}></Route>
        {/* <Route exact path="/view_home2/:_id" component={ViewHome2}></Route> */}
        {/* //Home3 */}
        <Route exact path="/home_section_3" component={Home3}></Route>
        <Route exact path="/add_home3" component={AddHome3}></Route>
        <Route exact path="/edit_home3/:_id" component={EditHome3}></Route>
        <Route exact path="/view_home3/:_id" component={ViewHome3}></Route>
        {/* Home1-1 */}
        <Route exact path="/home_section_1_1" component={Home1_1}></Route>
        <Route exact path="/add_home1_1" component={AddHome1_1}></Route>
        <Route exact path="/edit_home1_1/:_id" component={EditHome1_1}></Route>
        <Route exact path="/view_home1_1/:_id" component={ViewHome1_1}></Route>
        {/* //Home4 */}
        <Route exact path="/home_section_4" component={Home4}></Route>
        <Route exact path="/add_home4" component={AddHome4}></Route>
        <Route exact path="/edit_home4/:_id" component={EditHome4}></Route>
        <Route exact path="/view_home4/:_id" component={ViewHome4}></Route>
        {/* //About2 */}
        <Route exact path="/about_section_2" component={About2}></Route>
        <Route exact path="/add_about2" component={AddAbout2}></Route>
        <Route exact path="/edit_about2/:_id" component={EditAbout2}></Route>
        <Route exact path="/view_about2/:_id" component={ViewAbout2}></Route>
        {/* //About3 */}
        <Route exact path="/about_section_3" component={About3}></Route>
        <Route exact path="/add_about3" component={AddAbout3}></Route>
        <Route exact path="/edit_about3/:_id" component={EditAbout3}></Route>
        <Route exact path="/view_about3/:_id" component={ViewAbout3}></Route>
        {/* Blog */}
        <Route exact path="/blog" component={Blog}></Route>
        <Route exact path="/blogcategory" component={BlogCategory}></Route>
        <Route
          exact
          path="/add_blogcategory"
          component={AddBlogCategory}
        ></Route>
        <Route
          exact
          path="/edit_blogcategory/:_id"
          component={EditBlogCategory}
        ></Route>
        <Route
          exact
          path="/view_blogcategory/:_id"
          component={ViewBlogCategory}
        ></Route>
        {/* Article */}
        <Route exact path="/article" component={Blog1}></Route>
        <Route exact path="/add_article" component={AddBlog1}></Route>
        <Route exact path="/edit_article/:_id" component={EditBlog1}></Route>
        <Route exact path="/view_article/:_id" component={ViewBlog1}></Route>
        {/* Private pages */}
        <Route exact path="/privatepage" component={PrivatePage}></Route>
        <Route exact path="/add_privatepage" component={AddPrivatePage}></Route>
        <Route
          exact
          path="/edit_privatepage/:_id"
          component={EditPrivatePage}
        ></Route>
        <Route
          exact
          path="/view_privatepage/:_id"
          component={ViewPrivatePage}
        ></Route>
        <Route exact path="/SidebarSample" component={SidebarSample}></Route>
      </Switch>
    </Router>
  );
}

export default Routing;
