import React from 'react' 
import Navbar from '../Components/Navbar'; 
import Sidebar from '../Components/Sidebar';

const PendingBookings = () => {
  return (

      // <!-- Layout wrapper -->
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* <!-- Menu --> */} 
              <Sidebar /> 

          {/* <!-- Layout container --> */}
          <div className="layout-page">
            {/* <!-- Navbar --> */}
              <Navbar />      

            {/* <!-- / Navbar --> */}
    
          <div className="content-wrapper"> 
         {/* <!-- Content wrapper - Pending Bookings --> */} 
      
         {/* <!-- Content --> */}

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
          <div className="card-header border-bottom">
            <h5 className="card-title">Pending Bookings</h5>
            <div className="d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0">
              {/* <div className="col-md-4 user_role"></div>
              <div className="col-md-4 user_plan"></div> */}
              {/* <div className="col-md-4 user_status"></div> */}
            </div>
          </div>
          <div className="card-datatable table-responsive">
            <table className="datatables-users table border-top">
              <thead>
                <tr>
                  <th></th>
                  <th>Avera ID</th>
                  <th>Test</th>
                  <th>Cost</th>
                  <th>Gender</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
            </table>
          </div>
          {/* <!-- Offcanvas to add new user --> */}
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasAddUser"
            aria-labelledby="offcanvasAddUserLabel"
          >
            <div className="offcanvas-header border-bottom">
              <h6 id="offcanvasAddUserLabel" className="offcanvas-title">Add User</h6>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body mx-0 flex-grow-0">
              <form className="add-new-user pt-0" id="addNewUserForm" onsubmit="return false">
                <div className="mb-3">
                  <label className="form-label" for="add-user-fullname">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="add-user-fullname"
                    placeholder="John Doe"
                    name="userFullname"
                    aria-label="John Doe"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" for="add-user-email">Email</label>
                  <input
                    type="text"
                    id="add-user-email"
                    className="form-control"
                    placeholder="john.doe@example.com"
                    aria-label="john.doe@example.com"
                    name="userEmail"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" for="add-user-contact">Contact</label>
                  <input
                    type="text"
                    id="add-user-contact"
                    className="form-control phone-mask"
                    placeholder="+1 (609) 988-44-11"
                    aria-label="john.doe@example.com"
                    name="userContact"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" for="add-user-company">Company</label>
                  <input
                    type="text"
                    id="add-user-company"
                    className="form-control"
                    placeholder="Web Developer"
                    aria-label="jdoe1"
                    name="companyName"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" for="country">Country</label>
                  <select id="country" className="select2 form-select">
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
                <div className="mb-3">
                  <label className="form-label" for="user-role">User Role</label>
                  <select id="user-role" className="form-select">
                    <option value="subscriber">Subscriber</option>
                    <option value="editor">Editor</option>
                    <option value="maintainer">Maintainer</option>
                    <option value="author">Author</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="form-label" for="user-plan">Select Plan</label>
                  <select id="user-plan" className="form-select">
                    <option value="basic">Basic</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="company">Company</option>
                    <option value="team">Team</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>
                <button type="reset" className="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
              </form>
            </div>
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