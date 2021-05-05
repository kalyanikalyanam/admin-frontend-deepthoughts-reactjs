import axios from "axios";
import React from "react";
import Sidebar from "../../components/Sidebar";
import renderHTML from "react-render-html";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
class ViewPrivatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      loading: false,
    };
  }
  componentDidMount() {
    const { _id } = this.props.match.params;
    console.log(_id);
    axios
      .get(
        `https://deepthoughts-nodejs.herokuapp.com/private/update_privatepage/${_id}`
      )
      .then((res) => {
        console.log(res.data);
        const private1 = {
          _id: res.data._id,
          title: res.data.title,
          description: res.data.description,
        };
        console.log(private1.title);
        this.setState({
          _id: private1._id,
          title: private1.title,
          description: private1.description,
          loading: true,
        });
      });
  }
  render() {
    return (
      <div>
        <Sidebar></Sidebar>
        <div className="admin-wrapper col-12">
          <div className="admin-content">
            <div className="admin-head">Private Page - View</div>
            {this.state.loading ? (
              <div className="admin-data">
                <div className="col-lg-12 p-0 text-right mb-30">
                  <a href="/privatepage">
                    <button className="button button-contactForm boxed-btn">
                      Back
                    </button>
                  </a>
                </div>
                <div className="table-responsive admin-table demo">
                  <table>
                    <tbody>
                      <tr>
                        <td valign="top" width="150px;">
                          <b>Title</b>
                        </td>
                        <td>{this.state.title}</td>
                      </tr>
                      <tr>
                        <td valign="top" width="150px;">
                          <b>Description</b>
                        </td>
                        <td>{renderHTML(this.state.description)}</td>
                      </tr>
                      <tr>
                        <td valign="top" width="150px;">
                          <b>URL</b>
                        </td>
                        <td>
                          <a
                            href={`https://crud-74e71.web.app/Privatepage/${this.state._id}/${this.state.title}`}
                            target="_blank"
                          >{`https://crud-74e71.web.app/Privatepage/${this.state._id}/${this.state.title}`}</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div style={{ marginLeft: "500px", marginTop: "200px" }}>
                {" "}
                <Loader
                  type="Circles"
                  color="#0029ff"
                  height={100}
                  width={100}
                  timeout={3000} //3 secs
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPrivatePage;
