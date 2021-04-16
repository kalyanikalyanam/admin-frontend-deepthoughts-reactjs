import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div className="admin">
        <div className="slidebar-left">
          <div className="admin-logo">
            <img src="/assets/img/logo/logo.png" />
          </div>
          <div className="menu-content">
            <div className="gw-sidebar">
              <div id="gw-sidebar" className="gw-sidebar">
                <div className="nano-content">
                  <ul className="gw-nav gw-nav-list">
                    <li>
                      <Link to="/dashboard">
                        <i className="fa fa-tachometer" aria-hidden="true" />{" "}
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="/menu">
                        <i className="fa fa-upload" aria-hidden="true" /> Menu
                      </Link>
                    </li>
                    {/* <li className="init-arrow-down">
                      {" "}
                      <a href="#">
                        <span>
                          <i className="fa fa-file" aria-hidden="true" /> Pages
                        </span>
                        <b className="gw-arrow" />
                      </a>
                      <ul className="gw-submenu">
                        <li>
                          {" "}
                          <a href="create-new.html" style={{ color: "white" }}>
                            Create New
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            href="pages-drafts.html"
                            style={{ color: "white" }}
                          >
                            Drafts
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            href="pages-published.html"
                            style={{ color: "white" }}
                          >
                            Published
                          </a>{" "}
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link to="/post">
                        <i className="fa fa-upload" aria-hidden="true" /> Posts
                      </Link>
                    </li>
                    {/* <li class="init-un-active">  */}
                    {/* <li>
                      <Link to="/contact">
                        <i className="fa fa-wpforms" aria-hidden="true" />{" "}
                        Contact Form
                      </Link>
                    </li>
                    <li>
                      <Link to="/medialibrary">
                        <i className="fa fa-file-image-o" aria-hidden="true" />{" "}
                        Media Library
                      </Link>
                    </li>
                    <li className="init-arrow-down init-un-active">
                      <Link to="/settin">
                        <i className="fa fa-cog" aria-hidden="true" />
                        Settings
                        <b className="gw-arrow" />
                      </Link>
                      <ul className="gw-submenu">
                        <li>
                          {" "}
                          <a href="general-settings.html">General</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="social-media.html">Social Media</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/profile">
                        <i className="fa fa-user-o" aria-hidden="true" />
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/changepassword">
                        <i className="fa fa-unlock-alt" aria-hidden="true" />
                        Change Password
                      </Link>
                    </li>
                    <li>
                      <a href="login.html">
                        <i className="fa fa-sign-out" aria-hidden="true" />
                        Logout
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
