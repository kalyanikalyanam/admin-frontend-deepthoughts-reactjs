import axios from "axios";
import React from "react";
import Sidebar from "../../components/Sidebar";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SimpleReactValidator from "simple-react-validator";
class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",

      menu: "",
      submenu: "",
      // menus: [],
      // submenus: [],
      theme: "snow",
      mobile_message: "",
      validError: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setsubmenuName = this.setsubmenuName.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.validator = new SimpleReactValidator({
      className: "text-danger",
      validators: {
        passwordvalid: {
          message:
            "The :attribute must be at least 6 and at most 30 with 1 numeric,1 special charac" +
            "ter and 1 alphabet.",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(
                val,
                /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{6,30}$/i
              ) && params.indexOf(val) === -1
            );
          },
        },
        passwordMismatch: {
          message: "confirm password must match with password field.",
          rule: function (val, params, validator) {
            return document.getElementById("password_input").value === val
              ? true
              : false;
          },
        },
        whitespace: {
          message: "The :attribute not allowed first whitespace   characters.",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(val, /[^\s\\]/) &&
              params.indexOf(val) === -1
            );
          },
        },
        specialChar: {
          message: "The :attribute not allowed special   characters.",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(val, /^[ A-Za-z0-9_@./#&+-]*$/i) &&
              params.indexOf(val) === -1
            );
          },
        },
        specialCharText: {
          message: "The :attribute may only contain letters, dot and spaces.",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(val, /^[ A-Za-z_@./#&+-]*$/i) &&
              params.indexOf(val) === -1
            );
          },
        },

        zip: {
          message: "Invalid Pin Code",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(val, /^(\d{5}(\d{4})?)?$/i) &&
              params.indexOf(val) === -1
            );
          },
        },
        website: {
          message: "The Url should be example.com ",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(
                val,
                /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
              ) && params.indexOf(val) === -1
            );
          },
        },
        Fax: {
          message: "Invalid fax number ",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(
                val,
                /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i
              ) && params.indexOf(val) === -1
            );
          },
        },
      },
    });
  }

  componentDidMount() {
    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/admin/menus`)
      .then((res) => {
        const menus = res.data;
        console.log(menus);
        this.setState({ menus });
      });
  }

  handleChange(html) {
    this.setState({ description: html });
  }
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  setsubmenuName(e) {
    console.log(e.target.value);
    this.setState({
      menu: e.target.value,
    });

    let selectedMenuName = e.target.value;
    axios
      .get(
        `https://deepthoughts-nodejs.herokuapp.com/admin/submenuvalues/${selectedMenuName}`
      )
      .then((res) => {
        const submenus = res.data;
        console.log(submenus);
        this.setState({ submenus });
      });
  }

  handleThemeChange(newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.validator.allValid()) {
      const post = {
        title: this.state.title,
        description: this.state.description,
        menu: this.state.menu,
        submenu: this.state.submenu,
      };

      console.log(post);
      axios
        .post(`https://deepthoughts-nodejs.herokuapp.com/Addpost`, post)
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });

      this.props.history.push("/post");
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div>
        <Sidebar></Sidebar>
        <div className="admin-wrapper col-12">
          <div className="admin-content">
            <div className="admin-head">Post - Add New</div>
            <div className="admin-data">
              <div className="container-fluid p-0">
                <form
                  className="form-contact contact_form"
                  onSubmit={this.handleSubmit}
                >
                  <div className="row m-0">
                    <div className="col-lg-12 p-0"></div>
                    <div className="col-lg-12 p-0">
                      <div className="form-group tags-field row m-0">
                        <label className="col-lg-2 p-0">Title</label>
                        <input
                          className="form-control col-lg-10"
                          name="title"
                          onChange={this.onChange}
                          value={this.state.title}
                          type="text"
                          onfocus="this.placeholder = 'Menu Name'"
                          onblur="this.placeholder = ''"
                          placeholder=""
                        />
                        {this.validator.message(
                          "Title",
                          this.state.title,
                          "required|whitespace|min:1|max:20"
                        )}
                        {this.state.mobile_message}
                      </div>
                      <div className="form-group tags-field row m-0 ">
                        <label className="col-lg-2 p-0">Menu Name</label>

                        <select
                          className="form-control col-lg-10"
                          name="menu"
                          value={this.state.menu}
                          onChange={this.setsubmenuName}
                        >
                          <option>Select Menu</option>
                          {this.state.menus &&
                            this.state.menus.map((data, index) => {
                              return (
                                <option value={data.menu} key={index}>
                                  {data.menu}
                                </option>
                              );
                            })}
                        </select>

                        {this.validator.message(
                          "Menu Name",
                          this.state.menu,
                          "required"
                        )}
                      </div>

                      <div className="form-group tags-field row m-0">
                        <label className="col-lg-2 p-0">Sub Menu Name</label>

                        <select
                          className="form-control col-lg-10"
                          name="submenu"
                          value={this.state.submenu}
                          onChange={this.onChange}
                        >
                          <option>Select Sub Menu</option>
                          {this.state.submenus &&
                            this.state.submenus.map((data, index) => {
                              return (
                                <option value={data.submenu} key={index}>
                                  {data.submenu}
                                </option>
                              );
                            })}
                        </select>

                        {this.validator.message(
                          "Sub Menu Name",
                          this.state.submenu,
                          "required"
                        )}
                      </div>
                      <div className="form-group tags-field row m-0">
                        <label className="col-lg-2 p-0">Description</label>
                        {/* <textarea
                          className="form-control col-lg-10"
                          name="description"
                          onChange={this.onChange}
                          value={this.state.description}
                          type="text"
                          onfocus="this.placeholder = 'Menu Name'"
                          onblur="this.placeholder = ''"
                          placeholder=""
                        /> */}
                        <ReactQuill
                          className=" col-lg-10 height"
                          theme={this.state.theme}
                          onChange={this.handleChange}
                          value={this.state.description}
                          modules={AddPost.modules}
                          formats={AddPost.formats}
                          bounds={".app"}
                          placeholder={this.props.placeholder}
                        />

                        {this.validator.message(
                          "Description",
                          this.state.description,
                          "required"
                        )}
                      </div>
                    </div>

                    <div className="col-lg-12 p-0">
                      <div className="form-group tags-field  row m-0">
                        <label className="col-lg-2 p-0" />
                        <div className="col-lg-6 p-0">
                          <button
                            className="button button-contactForm boxed-btn margin"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
AddPost.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

AddPost.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

AddPost.propTypes = {
  placeholder: PropTypes.string,
};
export default AddPost;
