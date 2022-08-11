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
            
           <div className="offcanvas offcanvas-end" id="add-new-record">
                <div className="offcanvas-header border-bottom">
                  <h5 className="offcanvas-title" id="exampleModalLabel">New Record</h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body flex-grow-1">
                  <form className="add-new-record pt-0 row g-2" id="form-add-new-record" onsubmit="return false">
                    <div className="col-sm-12">
                      <label className="form-label" for="basicFullname">Full Name</label>
                      <div className="input-group input-group-merge">
                        <span id="basicFullname2" className="input-group-text"><i className="bx bx-user"></i></span>
                        <input
                          type="text"
                          id="basicFullname"
                          className="form-control dt-full-name"
                          name="basicFullname"
                          placeholder="John Doe"
                          aria-label="John Doe"
                          aria-describedby="basicFullname2"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <label className="form-label" for="basicPost">Post</label>
                      <div className="input-group input-group-merge">
                        <span id="basicPost2" className="input-group-text"><i className="bx bxs-briefcase"></i></span>
                        <input
                          type="text"
                          id="basicPost"
                          name="basicPost"
                          className="form-control dt-post"
                          placeholder="Web Developer"
                          aria-label="Web Developer"
                          aria-describedby="basicPost2"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <label className="form-label" for="basicEmail">Email</label>
                      <div className="input-group input-group-merge">
                        <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                        <input
                          type="text"
                          id="basicEmail"
                          name="basicEmail"
                          className="form-control dt-email"
                          placeholder="john.doe@example.com"
                          aria-label="john.doe@example.com"
                        />
                      </div>
                      <div className="form-text">You can use letters, numbers & periods</div>
                    </div>
                    <div className="col-sm-12">
                      <label className="form-label" for="basicDate">Joining Date</label>
                      <div className="input-group input-group-merge">
                        <span id="basicDate2" className="input-group-text"><i className="bx bx-calendar"></i></span>
                        <input
                          type="text"
                          className="form-control dt-date"
                          id="basicDate"
                          name="basicDate"
                          aria-describedby="basicDate2"
                          placeholder="MM/DD/YYYY"
                          aria-label="MM/DD/YYYY"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <label className="form-label" for="basicSalary">Salary</label>
                      <div className="input-group input-group-merge">
                        <span id="basicSalary2" className="input-group-text"><i className="bx bx-dollar"></i></span>
                        <input
                          type="number"
                          id="basicSalary"
                          name="basicSalary"
                          className="form-control dt-salary"
                          placeholder="12000"
                          aria-label="12000"
                          aria-describedby="basicSalary2"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <button type="submit" className="btn btn-primary data-submit me-sm-3 me-1">Submit</button>
                      <button type="reset" className="btn btn-outline-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                    </div>
                  </form>
                </div>
              </div>

        {/* <!-- Users List Table --> */} 
           <div className="card">
                <h5 className="card-header">Pending Bookings</h5>
                <div className="card-datatable table-responsive">
                  <table className="dt-multilingual table table-bordered">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Avera ID</th>
                        <th>Test</th>
                        <th>Cost</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                  </table>
                </div>
         </div>

        {/* <div className="card">
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
                              <a className="dropdown-item" href="/viewprofile"
                                ><i className="bx bx-show me-2"></i> View </a>
                              <a className="dropdown-item" href="/startprocess"
                                ><i className="bx bx-send me-1"></i> Start</a
                              >
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
                              <a className="dropdown-item" href="/viewprofile"
                                ><i className="bx bx-show me-2"></i> View </a>
                              <a className="dropdown-item" href="/startprocess"
                                ><i className="bx bx-send me-1"></i> Start</a
                              >
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
                              <a className="dropdown-item" href="/viewprofile"
                                ><i className="bx bx-show me-2"></i> View</a> 
                                <a className="dropdown-item" href="/startprocess"
                                ><i className="bx bx-send me-1"></i> Start</a>
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
                          
                        </td>
                        <td><span className="badge bg-label-warning me-1">Pending</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="/viewprofile"
                                ><i className="bx bx-show"></i> View </a> 
                                <a className="dropdown-item" href="/startprocess"
                                ><i className="bx bx-send"></i> Start </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
        </div> */}
      </div>
      {/* <!-- / Content --> */}

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