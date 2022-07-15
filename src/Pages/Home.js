import React from 'react';
import Navbar from '../Components/Navbar'; 
import Sidebar from '../Components/Sidebar';
import {Link} from 'react-router-dom';

function Home() {
    return (
      // <!-- Layout wrapper -->
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* <!-- Menu --> */}
  
          <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
              <a href="index.html" className="app-brand-link">
                <span className="app-brand-logo demo">
                  <svg
                    width="26px"
                    height="26px"
                    viewBox="0 0 26 26"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>icon</title>
                    <defs>
                      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                        <stop stop-color="#5A8DEE" offset="0%"></stop>
                        <stop stop-color="#699AF9" offset="100%"></stop>
                      </linearGradient>
                      <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="linearGradient-2">
                        <stop stop-color="#FDAC41" offset="0%"></stop>
                        <stop stop-color="#E38100" offset="100%"></stop>
                      </linearGradient>
                    </defs>
                    <g id="Pages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Login---V2" transform="translate(-667.000000, -290.000000)">
                        <g id="Login" transform="translate(519.000000, 244.000000)">
                          <g id="Logo" transform="translate(148.000000, 42.000000)">
                            <g id="icon" transform="translate(0.000000, 4.000000)">
                              <path
                                d="M13.8863636,4.72727273 C18.9447899,4.72727273 23.0454545,8.82793741 23.0454545,13.8863636 C23.0454545,18.9447899 18.9447899,23.0454545 13.8863636,23.0454545 C8.82793741,23.0454545 4.72727273,18.9447899 4.72727273,13.8863636 C4.72727273,13.5423509 4.74623858,13.2027679 4.78318172,12.8686032 L8.54810407,12.8689442 C8.48567157,13.19852 8.45300462,13.5386269 8.45300462,13.8863636 C8.45300462,16.887125 10.8856023,19.3197227 13.8863636,19.3197227 C16.887125,19.3197227 19.3197227,16.887125 19.3197227,13.8863636 C19.3197227,10.8856023 16.887125,8.45300462 13.8863636,8.45300462 C13.5386269,8.45300462 13.19852,8.48567157 12.8689442,8.54810407 L12.8686032,4.78318172 C13.2027679,4.74623858 13.5423509,4.72727273 13.8863636,4.72727273 Z"
                                id="Combined-Shape"
                                fill="#4880EA"
                              ></path>
                              <path
                                d="M13.5909091,1.77272727 C20.4442608,1.77272727 26,7.19618701 26,13.8863636 C26,20.5765403 20.4442608,26 13.5909091,26 C6.73755742,26 1.18181818,20.5765403 1.18181818,13.8863636 C1.18181818,13.540626 1.19665566,13.1982714 1.22574292,12.8598734 L6.30410592,12.859962 C6.25499466,13.1951893 6.22958398,13.5378796 6.22958398,13.8863636 C6.22958398,17.8551125 9.52536149,21.0724191 13.5909091,21.0724191 C17.6564567,21.0724191 20.9522342,17.8551125 20.9522342,13.8863636 C20.9522342,9.91761479 17.6564567,6.70030817 13.5909091,6.70030817 C13.2336969,6.70030817 12.8824272,6.72514561 12.5388136,6.77314791 L12.5392575,1.81561642 C12.8859498,1.78721495 13.2366963,1.77272727 13.5909091,1.77272727 Z"
                                id="Combined-Shape2"
                                fill="url(#linearGradient-1)"
                              ></path>
                              <rect
                                id="Rectangle"
                                fill="url(#linearGradient-2)"
                                x="0"
                                y="0"
                                width="7.68181818"
                                height="7.68181818"
                              ></rect>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="app-brand-text demo menu-text fw-bold ms-2">Avera Labs</span>
              </a>
  
              <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
                <i className="bx menu-toggle-icon d-none d-xl-block fs-4 align-middle"></i>
                <i className="bx bx-x d-block d-xl-none bx-sm align-middle"></i>
              </a>
            </div>
  
            <div className="menu-divider mt-0"></div>
  
            <div className="menu-inner-shadow"></div>
  
            <ul className="menu-inner py-1">
              {/* <!-- Dashboards --> */}
              <li className="menu-item active">
                <a href="javascript:void(0);" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Dashboards">Pending Bookings</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="index.html" className="menu-link">
                      <div data-i18n="Analytics">All tests today</div>
                    </a>
                  </li>
                  {/* <li className="menu-item">
                    <a href="dashboards-ecommerce.html" className="menu-link">
                      <div data-i18n="eCommerce">eCommerce</div>
                    </a>
                  </li> */}
                </ul>
              </li>
  
              {/* <!-- Layouts --> */}
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-layout"></i>
                  <div data-i18n="Layouts">All tests today</div>
                </a>
  
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="layouts-collapsed-menu.html" className="menu-link">
                      <div data-i18n="Collapsed menu">Collapsed menu</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-content-navbar.html" className="menu-link">
                      <div data-i18n="Content navbar">Content navbar</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-content-navbar-with-sidebar.html" className="menu-link">
                      <div data-i18n="Content nav + Sidebar">Content nav + Sidebar</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="../horizontal-menu-template" className="menu-link" target="_blank">
                      <div data-i18n="Horizontal">Horizontal</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-without-menu.html" className="menu-link">
                      <div data-i18n="Without menu">Without menu</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-without-navbar.html" className="menu-link">
                      <div data-i18n="Without navbar">Without navbar</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-fluid.html" className="menu-link">
                      <div data-i18n="Fluid">Fluid</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-container.html" className="menu-link">
                      <div data-i18n="Container">Container</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-blank.html" className="menu-link">
                      <div data-i18n="Blank">Blank</div>
                    </a>
                  </li>
                </ul>
              </li>
  
              {/* <!-- Apps & Pages --> */}
              <li className="menu-header small text-uppercase"><span className="menu-header-text">OTHER SESSIONS</span></li>
              <li className="menu-item">
                <a href="app-calendar.html" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-calendar"></i>
                  <div data-i18n="Calendar">Did not show up</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-food-menu"></i>
                  <div data-i18n="Invoice">Cancelled appointment</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="app-invoice-list.html" className="menu-link">
                      <div data-i18n="List">List</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-invoice-preview.html" className="menu-link">
                      <div data-i18n="Preview">Preview</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-invoice-edit.html" className="menu-link">
                      <div data-i18n="Edit">Edit</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-invoice-add.html" className="menu-link">
                      <div data-i18n="Add">Add</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-user"></i>
                  <div data-i18n="Users">Calendar</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item active">
                    <a href="app-user-list.html" className="menu-link">
                      <div data-i18n="List">List</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                      <div data-i18n="View">View</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a href="app-user-view-account.html" className="menu-link">
                          <div data-i18n="Account">Account</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="app-user-view-security.html" className="menu-link">
                          <div data-i18n="Security">Security</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="app-user-view-billing.html" className="menu-link">
                          <div data-i18n="Billing & Plans">Billing & Plans</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="app-user-view-notifications.html" className="menu-link">
                          <div data-i18n="Notifications">Notifications</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="app-user-view-connections.html" className="menu-link">
                          <div data-i18n="Connections">Connections</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
        
              <li className="menu-item">
               
                <ul className="menu-sub">
                
                </ul>
              </li>
            </ul>
          </aside>
  
          {/* <!-- Layout container --> */}
          <div className="layout-page">
           
            {/* <!-- Navbar --> */}
           
              <Navbar />   
                  
            {/* <!-- / Navbar --> */}
  
            {/* <!-- Content wrapper --> */}
            <div className="content-wrapper">
              {/* <!-- Content --> */}
  
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row g-4 mb-4">
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
                </div>
                {/* <!-- Users List Table --> */}
                <div className="card">
                  <div className="card-header border-bottom">
                    <h5 className="card-title">Search Filter</h5>
                    <div className="d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0">
                      <div className="col-md-4 user_role"></div>
                      <div className="col-md-4 user_plan"></div>
                      <div className="col-md-4 user_status"></div>
                    </div>
                  </div>
                  <div className="card-datatable table-responsive">
                    <table className="datatables-users table border-top">
                      <thead>
                        <tr>
                          <th></th>
                          <th>User</th>
                          <th>Role</th>
                          <th>Plan</th>
                          <th>Billing</th>
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
 
export default Home;