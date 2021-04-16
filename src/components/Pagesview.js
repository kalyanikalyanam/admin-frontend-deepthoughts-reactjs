import React from 'react'
import Sidebar from './Sidebar'

function Pagesview() {
    return (
        <div>
          <Sidebar></Sidebar>
            <div className="admin-wrapper col-12">
  <div className="admin-content">
    <div className="admin-head">Pages - View</div>
    <div className="admin-data">
      <div className="table-responsive admin-table demo">
        <table>
          <tbody>
            <tr>
              <td valign="top" width="150px;"><b>Page Title</b></td>
              <td>Cool Water</td>
            </tr>
            <tr>
              <td valign="top"><b>Page Status</b></td>
              <td>Active</td>
            </tr>
            <tr>
              <td><b>Page Content</b></td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Pagesview
