import React from 'react' 
import { TabBar } from '../Components/TaBbar';
import { Menu } from '../Components/Menu';

const PendingBookings = () => {
  return (
      // <!-- Layout wrapper -->
      
      <div className="layout-wrapper layout-horizontal layout-without-menu layout-navbar-full">
         
          {/* <!-- Layout container --> */}
        <div className="layout-container">
         
          <TabBar/>     
         
       <div className="layout-page">
          <Menu/>
       
        <div className="content-wrapper main-session"> 
         {/* <!--  Pending Bookings --> */} 

        <div className="container-xxl flex-grow-1 container-p-y">
       
         <div className="row g-4 mb-4"> 
          <div className="col-sm-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="content-left">
                    <span>Ongoing Tests</span>
                    <div className="d-flex align-items-end mt-2">
                      <h4 className="mb-0 me-2">21,459</h4>
                      <small className="text-success">(+29%)</small>
                    </div>
                    {/* <small>Total Users</small> */}
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
                    {/* <small>Last week analytics </small> */}
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
                    {/* <small>Last week analytics</small> */}
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
                    {/* <small>Last week analytics</small> */}
                  </div>
                  <span className="badge bg-label-warning rounded p-2">
                    <i className="bx bx-user-voice bx-sm"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> 

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
                        <td><i className="fa fa-user fa-lg text-danger me-3"></i> <strong>AV-33244</strong></td>
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
                                ><i className="bx bx-show me-2"></i> View </a>
                              {/* <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a
                              > */}
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fa fa-user fa-lg text-info me-3"></i> <strong>AV-33245</strong></td>
                        <td>Liver test</td>
                        <td> 
                        GH₵ 200
                         
                        </td>
                        <td><span className="badge bg-label-success me-1">Completed</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="/userprofile"
                                ><i className="bx bx-show me-2"></i> View </a>
                              {/* <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-2"></i> Delete</a
                              > */}
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fa fa-user fa-lg text-success me-3"></i> <strong>AV-33246</strong></td>
                        <td>Hepatitis A</td>
                        <td>
                        GH₵ 200
                        
                        </td>
                        <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="/userprofile"
                                ><i className="bx bx-show me-2"></i> View</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fa fa-user fa-lg text-primary me-3"></i> <strong>AV-33247</strong>
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
    
      {/* <!-- / Footer --> */}

      <div className="content-backdrop fade"></div> 
      {/* <!-- Content wrapper --> */}
          </div>
    
        </div>  

       </div>  
           {/* <!-- Overlay --> */}
        <div className="layout-overlay layout-menu-toggle"></div>
  
         {/* <!-- Drag Target Area To SlideIn Menu On Small Screens --> */}
        <div className="drag-target"></div> 

      </div> 
    
  )
}
 
export default PendingBookings;