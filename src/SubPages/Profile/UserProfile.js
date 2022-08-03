import React from 'react' 
import Navbar from '../../Components/Navbar'; 
import {Menu} from '../../Components/Menu';
import { TabBar } from '../../Components/TaBbar';


function UserProfile () {
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
                            <span>vafgot@vultukir.org</span>
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
                          {/* <li className="mb-3">
                            <span className="fw-bold me-2">Contact:</span>
                            <span>(123) 456-7890</span>
                          </li>
                          <li className="mb-3">
                            <span className="fw-bold me-2">Languages:</span>
                            <span>French</span>
                          </li>
                          <li className="mb-3">
                            <span className="fw-bold me-2">Country:</span>
                            <span>England</span>
                          </li> */}
                        </ul>
                        <div className="d-flex justify-content-center pt-3">
                          <a
                            href="javascript:;"
                            className="btn btn-primary me-3"
                            data-bs-target="#editUser"
                            data-bs-toggle="modal"
                            >Start</a
                          >
                          <a href="/frontdesk" className="btn btn-label-danger suspend-user">Patients List</a>
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
                      {/* <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="mb-0">Days</h6>
                        <h6 className="mb-0">65% Completed</h6>
                      </div> */}
                      {/* <div className="progress mb-1" style="height: 8px">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style="width: 65%"
                          aria-valuenow="65"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div> */}
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
                    {/* 
                   
                  
                   */}
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
                              {/* <a href="javascript:void(0)" className="me-3">
                                <img
                                  src="../../assets/img/icons/misc/pdf.png"
                                  alt="PDF image"
                                  width="20"
                                  className="me-2"
                                />
                                <span className="fw-bold text-body">invoices.pdf</span>
                              </a> */}
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
                            {/* <div className="d-flex flex-wrap">
                              <div className="avatar me-3">
                                <img src="../../assets/img/avatars/3.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div>
                                <h6 className="mb-0">Lester McCarthy (Client)</h6>
                                <span>CEO of PIXINVENT</span>
                              </div>
                            </div> */}
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
                            {/* <div className="d-flex align-items-center avatar-group">
                              <div
                                className="avatar pull-up"
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                title="Vinnie Mostowy"
                              >
                                <img src="../../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div
                                className="avatar pull-up"
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                title="Marrie Patty"
                              >
                                <img src="../../assets/img/avatars/12.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div
                                className="avatar pull-up"
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                title="Jimmy Jackson"
                              >
                                <img src="../../assets/img/avatars/9.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div
                                className="avatar pull-up"
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                title="Kristine Gill"
                              >
                                <img src="../../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div
                                className="avatar pull-up"
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                title="Nelson Wilson"
                              >
                                <img src="../../assets/img/avatars/14.png" alt="Avatar" className="rounded-circle" />
                              </div>
                            </div> */}
                          </div>
                        </li>
                        {/* <li className="timeline-item timeline-item-transparent">
                          <span className="timeline-point timeline-point-success"></span>
                          <div className="timeline-event">
                            <div className="timeline-header mb-1">
                              <h6 className="mb-0">Design Review</h6>
                              <small className="text-muted">5 days Ago</small>
                            </div>
                            <p className="mb-0">Weekly review of freshly prepared design for our new app.</p>
                          </div>
                        </li> */}
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
              {/* <!-- Edit User Modal --> */}
              <div className="modal fade" id="editUser" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-simple modal-edit-user">
                  <div className="modal-content p-3 p-md-5">
                    <div className="modal-body">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      <div className="text-center mb-4">
                        <h3>Edit User Information</h3>
                        <p>Updating user details will receive a privacy audit.</p>
                      </div>
                      <form id="editUserForm" className="row g-3" onsubmit="return false">
                        <div className="col-12 col-md-6">
                          <label className="form-label" for="modalEditUserFirstName">First Name</label>
                          <input
                            type="text"
                            id="modalEditUserFirstName"
                            name="modalEditUserFirstName"
                            className="form-control"
                            placeholder="John"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label className="form-label" for="modalEditUserLastName">Last Name</label>
                          <input
                            type="text"
                            id="modalEditUserLastName"
                            name="modalEditUserLastName"
                            className="form-control"
                            placeholder="Doe"
                          />
                        </div>
                        <div className="col-12">
                          <label className="form-label" for="modalEditUserName">Username</label>
                          <input
                            type="text"
                            id="modalEditUserName"
                            name="modalEditUserName"
                            className="form-control"
                            placeholder="john.doe.007"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label className="form-label" for="modalEditUserEmail">Email</label>
                          <input
                            type="text"
                            id="modalEditUserEmail"
                            name="modalEditUserEmail"
                            className="form-control"
                            placeholder="example@domain.com"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label className="form-label" for="modalEditUserStatus">Status</label>
                          <select
                            id="modalEditUserStatus"
                            name="modalEditUserStatus"
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Status</option>
                            <option value="1">Active</option>
                            <option value="2">Inactive</option>
                            <option value="3">Suspended</option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6">
                          <label className="form-label" for="modalEditTaxID">Tax ID</label>
                          <input
                            type="text"
                            id="modalEditTaxID"
                            name="modalEditTaxID"
                            className="form-control modal-edit-tax-id"
                            placeholder="123 456 7890"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label className="form-label" for="modalEditUserPhone">Phone Number</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text">+1</span>
                            <input
                              type="text"
                              id="modalEditUserPhone"
                              name="modalEditUserPhone"
                              className="form-control phone-number-mask"
                              placeholder="202 555 0111"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <label className="form-label" for="modalEditUserLanguage">Language</label>
                          <select
                            id="modalEditUserLanguage"
                            name="modalEditUserLanguage"
                            className="select2 form-select"
                            multiple
                          >
                            <option value="">Select</option>
                            <option value="english" selected>English</option>
                            <option value="spanish">Spanish</option>
                            <option value="french">French</option>
                            <option value="german">German</option>
                            <option value="dutch">Dutch</option>
                            <option value="hebrew">Hebrew</option>
                            <option value="sanskrit">Sanskrit</option>
                            <option value="hindi">Hindi</option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6">
                          <label className="form-label" for="modalEditUserCountry">Country</label>
                          <select
                            id="modalEditUserCountry"
                            name="modalEditUserCountry"
                            className="select2 form-select"
                            data-allow-clear="true"
                          >
                            <option value="">Select</option>
                            <option value="Australia">Australia</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Canada">Canada</option>
                            <option value="China">China</option>
                            <option value="France">France</option>
                            <option value="Germany">Germany</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Japan">Japan</option>
                            <option value="Korea">Korea, Republic of</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Russia">Russian Federation</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label className="switch">
                            <input type="checkbox" className="switch-input" />
                            <span className="switch-toggle-slider">
                              <span className="switch-on"></span>
                              <span className="switch-off"></span>
                            </span>
                            <span className="switch-label">Use as a billing address?</span>
                          </label>
                        </div>
                        <div className="col-12 text-center mt-4">
                          <button type="submit" className="btn btn-primary me-sm-3 me-1">Submit</button>
                          <button
                            type="reset"
                            className="btn btn-label-secondary"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Edit User Modal --> */}

              {/* <!-- Add New Credit Card Modal --> */}
              <div className="modal fade" id="upgradePlanModal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-simple modal-upgrade-plan">
                  <div className="modal-content p-3 p-md-5">
                    <div className="modal-body">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      <div className="text-center mb-4">
                        <h3>Confirm Payment</h3>
                        <p>This is to confirm that patien with avera ID AV-3244 has made payment of the amount below </p>
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
                       <button className="btn btn-label-danger cancel-subscription mt-3">Cancel</button>
                        <button className="btn btn-label-success cancel-subscription mt-3">Confirm</button>
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

export default UserProfile;