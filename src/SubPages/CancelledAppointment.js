import React from 'react'
import Navbar from '../Components/Navbar'; 
import Sidebar from '../Components/Sidebar';

const CancelledAppointment = () => {
  return (
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
        {/* <!-- / Content --> */}

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
  )
}
 
export default CancelledAppointment;
