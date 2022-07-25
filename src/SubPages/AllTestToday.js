import React from 'react';

import Navbar from '../Components/Navbar'; 
import Sidebar from '../Components/Sidebar';

function AllTestToday() {
    return (
      // <!-- Layout wrapper -->
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* <!-- Menu --> */}
              <Sidebar />  
          {/* <!-- Layout container --> */}
          <div className="layout-page">
              <Navbar />      
             {/* <!-- / Navbar --> */}
  
             {/* <!-- Content wrapper - All Test Today --> */}
            <div className="content-wrapper">
              {/* <!-- Content --> */}
  
              <div className="container-xxl flex-grow-1 container-p-y">
                {/* <div className="row g-4 mb-4">
                  <div className="col-sm-6 col-xl-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="content-left">
                            <span>Current Tests</span>
                            <div className="d-flex align-items-end mt-2">
                              <h4 className="mb-0 me-2">21,459</h4>
                              <small className="text-success">(+29%)</small>
                            </div>
                            <small>Total Users</small>
                          </div>
                          <span className="badge bg-label-primary rounded p-2">
                            <i className="bx bx-user bx-sm"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="content-left">
                            <span>Pending Tests</span>
                            <div className="d-flex align-items-end mt-2">
                              <h4 className="mb-0 me-2">4,567</h4>
                              <small className="text-success">(+18%)</small>
                            </div>
                            <small>Last week analytics </small>
                          </div>
                          <span className="badge bg-label-danger rounded p-2">
                            <i className="bx bx-user-plus bx-sm"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="content-left">
                            <span>Today's tests</span>
                            <div className="d-flex align-items-end mt-2">
                              <h4 className="mb-0 me-2">19,860</h4>
                              <small className="text-danger">(-14%)</small>
                            </div>
                            <small>Last week analytics</small>
                          </div>
                          <span className="badge bg-label-success rounded p-2">
                            <i className="bx bx-group bx-sm"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="content-left">
                            <span>All tests</span>
                            <div className="d-flex align-items-end mt-2">
                              <h4 className="mb-0 me-2">237</h4>
                              <small className="text-success">(+42%)</small>
                            </div>
                            <small>Last week analytics</small>
                          </div>
                          <span className="badge bg-label-warning rounded p-2">
                            <i className="bx bx-user-voice bx-sm"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <!-- Users List Table --> */} 
                
                <div className="card">
                <h5 className="card-header">Pending Bookings</h5>
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
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                        <td>Albert Cook</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
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
                          </ul>
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
                        <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                        <td>Barry Hunter</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
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
                          </ul>
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
                        <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                        <td>Trevor Baker</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
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
                          </ul>
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
                          <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                        </td>
                        <td>Jerry Milton</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
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
                          </ul>
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