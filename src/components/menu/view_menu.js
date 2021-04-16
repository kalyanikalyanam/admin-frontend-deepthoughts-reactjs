import axios from "axios";
import React from "react";
import Sidebar from "../../components/Sidebar";
class ViewMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "",
      date: Date.now(),
    };
  }
  componentDidMount() {
    const { _id } = this.props.match.params;
    console.log(_id);
    axios.get(`http://localhost:5000/admin/update_menu/${_id}`).then((res) => {
      console.log(res.data);
      const menu = {
        menu: res.data.menu,
        date: res.data.date,
      };
      console.log(menu.menu);
      this.setState({
        menu: menu.menu,
        date: menu.date,
      });
    });
  }
  render() {
    return (
      <div>
        <Sidebar></Sidebar>
        <div className="admin-wrapper col-12">
          <div className="admin-content">
            <div className="admin-head">Menu - View</div>
            <div className="admin-data">
              <div className="table-responsive admin-table demo">
                <table>
                  <tbody>
                    <tr>
                      <td valign="top" width="150px;">
                        <b>Menu Name</b>
                      </td>
                      <td>{this.state.menu}</td>
                    </tr>
                    <tr>
                      <td valign="top">
                        <b>Updated Date</b>
                      </td>
                      <td>{this.state.date}</td>
                    </tr>
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

export default ViewMenu;
