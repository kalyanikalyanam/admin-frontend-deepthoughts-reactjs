import React from 'react'
import Sidebar from './Sidebar'

function Pagesedit() {
    return (
        <div>
          <Sidebar></Sidebar>
            <div className="admin-wrapper col-12">
  <div className="admin-content">
    <div className="admin-head">Pages - Edit</div>
    <div className="admin-data">
      <div className="container-fluid p-0">
        <form className="form-contact contact_form">
          <div className="row m-0">
            <div className="col-lg-12 p-0">
              <div className="form-group tags-field row m-0">
                <label className="col-lg-2 p-0">Page Title</label>
                <input className="form-control col-lg-10" name="name" type="text" onfocus="this.placeholder = 'Page Title'" onblur="this.placeholder = ''" placeholder="Page Title" />
              </div>
            </div>
            <div className="col-lg-12 p-0">
              <div className="form-group tags-field  row m-0">
                <label className="col-lg-2 p-0">Page Content</label>
                <textarea className="form-control col-lg-10" name="message" cols={30} rows={9} onfocus="this.placeholder = ''" onblur="this.placeholder = 'Post Content'" placeholder="Post Content" required defaultValue={""} />
              </div>
            </div>
            <div className="col-lg-12 p-0">
              <div className="form-group tags-field  row m-0">
                <label className="col-lg-2 p-0" />
                <div className="col-lg-6 p-0">
                  <button className="button button-contactForm boxed-btn">Save</button>
                </div></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Pagesedit
