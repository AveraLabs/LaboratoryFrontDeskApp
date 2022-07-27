import React from 'react';
import { Menu } from '../Components/Menu';

import Navbar from '../Components/Navbar'; 
import Sidebar from '../Components/Sidebar';
import { TaBbar } from '../Components/TaBbar';

function AllTestToday() {
    return (
      // <!-- Layout wrapper -->
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
        
           <TaBbar />  
         
          <div className="layout-page">
              <Menu />      
             {/* <!-- / Navbar --> */}
  
             {/* <!-- Content wrapper - All Test Today --> */}
            <div className="content-wrapper">
              {/* <!-- Content --> */}
  
              <div className="container-xxl flex-grow-1 container-p-y">
           
                {/* <!-- Users List Table --> */} 
                
                <div className="card">
                <h5 className="card-header">All tests Today</h5>
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>AVERA ID</th>
                        <th>TEST</th>
                        <th>COST</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      <tr>
                        <td><i className="fa fa-user fa-lg text-danger me-3"></i> <strong>7657c174-284e-483f-9113-948e9128cf9c</strong></td>
                        <td>Blood test</td>
                        <td> 
                        GH₵ 200
                        
                        </td>
                        <td><span className="badge bg-label-primary me-1">Active</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="/userprofile"
                                ><i className="bx bx-show"></i>View</a>
                              {/* <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a
                              > */}
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fa fa-user fa-lg text-info me-3"></i> <strong>194c7967-f32d-4da7-b13a-16f7427d8ec5</strong></td>
                        <td>Liver test</td>
                        <td> 
                        GH₵ 200
                          {/* <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src="../../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src="../../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src="../../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul> */}
                        </td>
                        <td><span className="badge bg-label-success me-1">Completed</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="/userprofile"
                                ><i className="bx bx-show"></i> View </a>
                              {/* <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-2"></i> Delete</a
                              > */}
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fa fa-user fa-lg text-success me-3"></i> <strong>3d539ca7-a27d-4833-ade6-320e27eefb69</strong></td>
                        <td>Hepatitis A</td>
                        <td>
                        GH₵ 200
                          {/* <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src="../../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src="../../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src="../../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul> */}
                        </td>
                        <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="/userprofile"
                                ><i className="bx bx-show"></i> View</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fa fa-user fa-lg text-primary me-3"></i> <strong>09777d45-93c2-45db-9449-012e6c07fc94</strong>
                        </td>
                        <td>Syphillis</td>
                        <td> 
                         GH₵ 200
                          {/* <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src="../../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src="../../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src="../../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul> */}
                        </td>
                        <td><span className="badge bg-label-warning me-1">Pending</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="/userprofile"
                                ><i className="bx bx-show"></i> View </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
        </div> 

              </div>
              {/* <!-- / Content --> */}
  
              {/* <!-- Footer --> */}
              {/* <footer className="content-footer footer bg-footer-theme">
                <div className="container-fluid d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                  <div className="mb-2 mb-md-0">
                    ©
                    <script>
                      document.write(new Date().getFullYear());
                    </script>
                    , made with ❤️ by
                    <a href="https://pixinvent.com" target="_blank" className="footer-link fw-semibold">PIXINVENT</a>
                  </div>
                  <div>
                    <a href="https://themeforest.net/licenses/standard" className="footer-link me-4" target="_blank"
                      >License</a
                    >
                    <a href="https://1.envato.market/pixinvent_portfolio" target="_blank" className="footer-link me-4"
                      >More Themes</a
                    >
  
                    <a
                      href="https://pixinvent.com/demo/frest-clean-bootstrap-admin-dashboard-template/documentation-bs5/"
                      target="_blank"
                      className="footer-link me-4"
                      >Documentation</a
                    >
  
                    <a href="https://pixinvent.ticksy.com/" target="_blank" className="footer-link d-none d-sm-inline-block"
                      >Support</a
                    >
                  </div>
                </div>
              </footer> */}
              {/* <!-- / Footer --> */}
  
              <div className="content-backdrop fade"></div>
            </div>
            {/* <!-- Content wrapper --> */}
          </div>
          {/* <!-- / Layout page --> */}
        </div>
  
        {/* <!-- Overlay --> */}
        <div className="layout-overlay layout-menu-toggle"></div>
  
        {/* <!-- Drag Target Area To SlideIn Menu On Small Screens --> */}
        <div className="drag-target"></div>
      </div>
      
    );
}
 
export default AllTestToday;