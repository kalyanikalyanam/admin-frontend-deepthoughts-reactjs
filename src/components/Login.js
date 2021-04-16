import React from "react";

function Login() {
  return (
    <div>
      <div className="h-100 w-100 bg-color">
        <div className="login-box">
          <div className="login-logo">
            <img src="assets/img/logo/logo-out.png" />
          </div>
          <form className="form-contact contact_form">
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="name"
                    type="text"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Username'"
                    placeholder="Username*"
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="name"
                    type="text"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = '******'"
                    placeholder="******"
                  />
                </div>
              </div>
            </div>
            <div className="form-group mt-3 mb-0">
              <a href="/dashboard">
                <div className="w-100 btn  boxed-btn">Login</div>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
