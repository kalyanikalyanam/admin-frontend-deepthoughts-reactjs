import React from "react";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
    };
    this.deleteItem = this.deleteItem.bind(this);
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/admin/menus`).then((res) => {
      const menus = res.data;
      this.setState({ menus });
    });
  }
  deleteItem(_id) {
    swal({
      title: "Are you sure?",
      text: "Do your really want to remove?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        console.log(_id);
        axios
          .delete(`http://localhost:5000/admin/delete_menu/${_id}`)
          .then((res) => {
            console.log(res);
            console.log(res.data);
          });
      } else {
      }
    });
  }
  render() {
    return (
      <div>
        <Sidebar></Sidebar>
        <div className="admin-wrapper col-12">
          <div className="admin-content">
            <div className="admin-head">Menu</div>
            <div className="admin-data">
              <div className="col-lg-12 p-0 text-right mb-30">
                <a href="add_menu">
                  <button className="button button-contactForm boxed-btn">
                    + Add New
                  </button>
                </a>
              </div>
              <div className="table-responsive admin-table">
                <table>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Menu Name</th>

                      <th>Updated Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.menus &&
                      this.state.menus.map((menu, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>

                          <td>{menu.menu}</td>
                          <td>{menu.date}</td>
                          <td>
                            <Link to={`/view_menu/${menu._id}`}>
                              <span className="btn">View</span>
                            </Link>

                            <Link to={`/edit_menu/${menu._id}`}>
                              <span className="btn">Edit</span>
                            </Link>
                            <span
                              className="btn"
                              onClick={this.deleteItem.bind(this, menu._id)}
                            >
                              Delete
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
