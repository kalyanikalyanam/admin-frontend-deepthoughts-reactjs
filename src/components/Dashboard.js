import React from 'react'
import Sidebar from './Sidebar'



function Dashboard() {
    return (
        <div>
          <Sidebar></Sidebar>
     
        <div className="admin-wrapper col-12">
          <div className="admin-content">
            <div className="admin-head">Dashboard</div>
            <div className="admin-data">
              <div className="row">
                <div className="col-md-6 col-xl-4 dashboard">
                  <div className="card mb-3 h-100">
                    <div className="text-white dashboard_box bg-color-1">
                      <div className="widget-heading">
                        <p><img src="../assets/img/icon/shott-date-time-icon.png" /></p>
                        Last Logged in
                        <span>Nov 23 2020<br /> 10:10 a.m.</span></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4 dashboard">
                  <div className="card mb-3 h-100">
                    <div className="text-white dashboard_box bg-color-2">
                      <div className="widget-heading">
                        <p><img src="../assets/img/icon/enquiry-icon-two.png" /></p>
                        Total 
                        Posts<span>55</span></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3 h-100">
                    <div className="text-white dashboard_box bg-color-3">
                      <div className="widget-heading">
                        <p><img src="../assets/img/icon/enquiry-icon-one.png" /></p>
                        Contact Forms
                        <span>1200</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Dashboard