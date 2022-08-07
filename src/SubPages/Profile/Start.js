import React from 'react' 
import {Menu} from '../../Components/Menu';
import { TabBar } from '../../Components/TaBbar'; 
import Swal from 'sweetalert2';

function Start () { 

  const handleAlert = () => {  
    Swal.fire({   
      icon: 'success', 
      title: 'Payment Confirmed',  
      type: 'success',   
       confirmButtonColor: '#00FF7F',   
      text: 'Payment of GH₵ 99 by AV-33244 has been confirmed',  
    });  
  }  

  return ( 
    <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu"> 
         
    {/* layout container */}
    <div className="layout-container">
      <TabBar />  
       
      {/* layout page */}
     <div className="layout-page">
        
      <Menu />
     {/* content wrapper */}
     <div className="content-wrapper main-session">
            {/* <!-- Content --> */}

            <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="py-3 breadcrumb-wrapper mb-4">
                <span className="text-muted fw-light"></span> Profile
              </h4>
              <div className="row gy-4">
                {/* <!-- User Sidebar --> */}
                <div className="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
                  {/* <!-- User Card --> */}
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="user-avatar-section">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            className="img-fluid rounded my-4"
                            src="../../assets/img/avatars/10.png"
                            height="110"
                            width="110"
                            alt="User avatar"
                          />
                          <div className="user-info text-center">
                            <h5 className="mb-2">Monica</h5>
                            <span className="badge bg-label-secondary">AV-33244</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-around flex-wrap my-4 py-3">
                        <div className="d-flex align-items-start me-4 mt-3 gap-3">
                          <span className="badge bg-label-primary p-2 rounded"><i className="bx bx-check bx-sm"></i></span>
                          <div>
                            <h5 className="mb-0">2</h5>
                            <span>Number of test</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mt-3 gap-3">
                          <span className="badge bg-label-primary p-2 rounded"><i className="bx bx-customize bx-sm"></i></span>
                          <div>
                            <h5 className="mb-0">GH₵ 99.00</h5>
                            <span>Total Cost</span>
                          </div>
                        </div>
                      </div>
                      <h5 className="pb-2 border-bottom mb-4">Details</h5>
                      <div className="info-container">
                        <ul className="list-unstyled">
                          <li className="mb-3">
                            <span className="fw-bold me-2">Avera ID:</span>
                            <span>AV-33244</span>
                          </li>
                          <li className="mb-3">
                            <span className="fw-bold me-2">Username:</span>
                            <span>violet.dev</span>
                          </li>
                          <li className="mb-3">
                            <span className="fw-bold me-2">Gender:</span>
                            <span className="">Female</span>
                          </li>
                          <li className="mb-3">
                            <span className="fw-bold me-2">Age:</span>
                            <span>35</span>
                          </li>
                          <li className="mb-3">
                            <span className="fw-bold me-2">Languages:</span>
                            <span>French</span>
                          </li> 
                          <li className="mb-3">
                            <span className="fw-bold me-2">Status:</span>
                            <span className="badge bg-label-success">ACTIVE</span>
                          </li> 
                          <li className="mb-3">
                            <span className="fw-bold me-2">Payment Status:</span>
                            <span className="badge bg-label-warning">NOT PAID</span>
                          </li>
                        
                        </ul>
                        <div className="d-flex justify-content-center pt-3">
                      
                          <a href="/frontdesk" className="btn btn-light suspend-user">Patients List</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /User Card --> */}
                  {/* <!-- Plan Card --> */}
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start">
                        <span className="badge bg-label-primary">TOTAL LAB COST</span>
                        <div className="d-flex justify-content-center">
                          <sup className="h5 pricing-currency mt-3 mt-sm-4 mb-0 me-1 text-primary">GH₵</sup>
                          <h1 className="display-3 fw-normal mb-0 text-primary">99</h1>
                          {/* <sub className="fs-6 pricing-duration mt-auto mb-4">/month</sub> */}
                        </div>
                      </div>
                      <ul className="ps-3 g-2 mb-3">
                        <li className="mb-2">test 1</li>
                        <li className="mb-2">test 2</li>
                        <li>test 3</li>
                      </ul>
                    
                      {/* <span>4 days remaining</span> */}
                      <div className="d-grid w-100 mt-3 pt-2">
                        <button className="btn btn-primary" data-bs-target="#upgradePlanModal" data-bs-toggle="modal">
                           Confirm Payment
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /Plan Card --> */}
                </div>
                {/* <!--/ User Sidebar --> */}

                {/* <!-- User Content --> */}
                <div className="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
                  {/* <!-- User Pills --> */}
                  <ul className="nav nav-pills flex-column flex-md-row mb-3">
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0);"><i className="bx bx-user me-1"></i>Labs</a>
                    </li>
                  
                  </ul>
                  {/* <!--/ User Pills --> */}

                  {/* <!-- Project table --> */}
                  <div className="card mb-4">
                    <h5 className="card-header">User's Labs</h5>
                    <div className="table-responsive mb-3">
                      <table className="table datatable-project border-top">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Test</th>
                            <th className="text-nowrap">Cost</th>
                            <th>Status</th>
                            <th>Hours</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                  {/* <!-- /Project table --> */}

                  {/* <!-- Activity Timeline --> */}
                  <div className="card mb-4">
                    <h5 className="card-header">User Activity Timeline</h5>
                    <div className="card-body">
                      <ul className="timeline">
                        <li className="timeline-item timeline-item-transparent">
                          <span className="timeline-point timeline-point-primary"></span>
                          <div className="timeline-event">
                            <div className="timeline-header mb-1">
                              <h6 className="mb-0">Started</h6>
                              <small className="text-muted">12 min ago</small>
                            </div>
                            <p className="mb-2">User has started labs</p>
                            <div className="d-flex">
                            
                            </div>
                          </div>
                        </li>
                        <li className="timeline-item timeline-item-transparent">
                          <span className="timeline-point timeline-point-warning"></span>
                          <div className="timeline-event">
                            <div className="timeline-header mb-1">
                              <h6 className="mb-0">Ongoing</h6>
                              <small className="text-muted">45 min ago</small>
                            </div> 
                            <p className="mb-2">User's labs is in progress</p>
                            {/* <p className="mb-2">Project meeting with john @10:15am</p> */}
                           
                          </div>
                        </li>
                        <li className="timeline-item timeline-item-transparent">
                          <span className="timeline-point timeline-point-info"></span>
                          <div className="timeline-event">
                            <div className="timeline-header mb-1">
                              <h6 className="mb-0">Completed</h6>
                              <small className="text-muted">2 Day Ago</small>
                            </div> 
                            <p className="mb-2">User has completed labs</p>
                            {/* <p className="mb-2">5 team members in a project</p> */}
                           
                          </div>
                        </li>
                       
                        <li className="timeline-end-indicator">
                          <i className="bx bx-check-circle"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- /Activity Timeline --> */}

                  {/* <!-- Invoice table --> */}
                  <div className="card">
                    <div className="table-responsive mb-3">
                      <table className="table datatable-invoice border-top">
                        <thead>
                          <tr>
                            <th></th>
                            <th>ID</th>
                            <th><i className="bx bx-trending-up"></i></th>
                            <th>Total</th>
                            <th>Issued Date</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                  {/* <!-- /Invoice table --> */}
                </div>
                {/* <!--/ User Content --> */}
              </div>

              {/* <!-- Modal --> */}
              

              {/* <!-- Add New Credit Card Modal --> */}
              <div className="modal fade" id="upgradePlanModal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-simple modal-upgrade-plan">
                  <div className="modal-content p-3 p-md-5">
                    <div className="modal-body">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      <div className="text-center mb-4">
                        <h3>Confirm Payment</h3>
                        <p>This is to confirm that patien with avera ID AV-33244 has made payment of the amount below </p>
                      </div>
                      <div className="d-flex justify-content-center align-items-center flex-wrap">
                        <div className="d-flex justify-content-center me-2 mt-2">
                          <sup className="h5 pricing-currency fw-normal pt-2 mt-4 mb-0 me-1 text-primary">GH₵</sup>
                          <h1 className="fw-normal display-1 mb-0 text-primary">99</h1>
                          {/* <sub className="h5 pricing-duration mt-auto mb-3">/month</sub> */}
                        </div>
                        {/* <button className="btn btn-label-danger cancel-subscription mt-3">Cancel Subscription</button> */}
                      </div>
                    </div>
                    <hr className="mx-md-n5 mx-n3" />
                    <div className="modal-body">
                      {/* <h6 className="mb-0">User current plan is standard plan</h6> */}
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <button data-bs-dismiss="modal" arial-label="Close" className="btn btn-label-danger cancel-subscription mt-3">Cancel</button>
                        <button onClick={handleAlert} className="btn btn-label-success cancel-subscription mt-3">Confirm</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Add New Credit Card Modal --> */}

              {/* <!-- /Modal --> */}
            </div>
        
            {/* <!-- / Footer --> */}

            <div className="content-backdrop fade"></div>
          </div>
     </div> 

    </div> 
    </div>
  )
}

export default Start;