import React from 'react';
import Navbar from '../Components/Navbar'; 
import Sidebar from '../Components/Sidebar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Home() {
    return (
      // <!-- Layout wrapper -->
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          {/* <!-- Menu --> */}
  
          <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
            <div class="app-brand demo">
              <a href="index.html" class="app-brand-link">
                <span class="app-brand-logo demo">
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
                <span class="app-brand-text demo menu-text fw-bold ms-2">Avera Labs</span>
              </a>
  
              <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
                <i class="bx menu-toggle-icon d-none d-xl-block fs-4 align-middle"></i>
                <i class="bx bx-x d-block d-xl-none bx-sm align-middle"></i>
              </a>
            </div>
  
            <div class="menu-divider mt-0"></div>
  
            <div class="menu-inner-shadow"></div>
  
            <ul class="menu-inner py-1">
              {/* <!-- Dashboards --> */}
              <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link">
                  <i class="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Dashboards">Pending Bookings</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="index.html" class="menu-link">
                      <div data-i18n="Analytics">All tests today</div>
                    </a>
                  </li>
                  {/* <li class="menu-item">
                    <a href="dashboards-ecommerce.html" class="menu-link">
                      <div data-i18n="eCommerce">eCommerce</div>
                    </a>
                  </li> */}
                </ul>
              </li>
  
              {/* <!-- Layouts --> */}
              <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link">
                  <i class="menu-icon tf-icons bx bx-layout"></i>
                  <div data-i18n="Layouts">All tests today</div>
                </a>
  
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="layouts-collapsed-menu.html" class="menu-link">
                      <div data-i18n="Collapsed menu">Collapsed menu</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-content-navbar.html" class="menu-link">
                      <div data-i18n="Content navbar">Content navbar</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-content-navbar-with-sidebar.html" class="menu-link">
                      <div data-i18n="Content nav + Sidebar">Content nav + Sidebar</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="../horizontal-menu-template" class="menu-link" target="_blank">
                      <div data-i18n="Horizontal">Horizontal</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-without-menu.html" class="menu-link">
                      <div data-i18n="Without menu">Without menu</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-without-navbar.html" class="menu-link">
                      <div data-i18n="Without navbar">Without navbar</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-fluid.html" class="menu-link">
                      <div data-i18n="Fluid">Fluid</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-container.html" class="menu-link">
                      <div data-i18n="Container">Container</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-blank.html" class="menu-link">
                      <div data-i18n="Blank">Blank</div>
                    </a>
                  </li>
                </ul>
              </li>
  
              {/* <!-- Apps & Pages --> */}
              <li class="menu-header small text-uppercase"><span class="menu-header-text">OTHER SESSIONS</span></li>
              <li class="menu-item">
                <a href="app-calendar.html" class="menu-link">
                  <i class="menu-icon tf-icons bx bx-calendar"></i>
                  <div data-i18n="Calendar">Did not show up</div>
                </a>
              </li>
              <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link">
                  <i class="menu-icon tf-icons bx bx-food-menu"></i>
                  <div data-i18n="Invoice">Cancelled appointment</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="app-invoice-list.html" class="menu-link">
                      <div data-i18n="List">List</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="app-invoice-preview.html" class="menu-link">
                      <div data-i18n="Preview">Preview</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="app-invoice-edit.html" class="menu-link">
                      <div data-i18n="Edit">Edit</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="app-invoice-add.html" class="menu-link">
                      <div data-i18n="Add">Add</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="menu-item active">
                <a href="javascript:void(0);" class="menu-link">
                  <i class="menu-icon tf-icons bx bx-user"></i>
                  <div data-i18n="Users">Calendar</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item active">
                    <a href="app-user-list.html" class="menu-link">
                      <div data-i18n="List">List</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="javascript:void(0);" class="menu-link menu-toggle">
                      <div data-i18n="View">View</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a href="app-user-view-account.html" class="menu-link">
                          <div data-i18n="Account">Account</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="app-user-view-security.html" class="menu-link">
                          <div data-i18n="Security">Security</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="app-user-view-billing.html" class="menu-link">
                          <div data-i18n="Billing & Plans">Billing & Plans</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="app-user-view-notifications.html" class="menu-link">
                          <div data-i18n="Notifications">Notifications</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="app-user-view-connections.html" class="menu-link">
                          <div data-i18n="Connections">Connections</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-check-shield"></i>
                  <div data-i18n="Roles & Permissions">Roles & Permissions</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="app-access-roles.html" class="menu-link">
                      <div data-i18n="Roles">Roles</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="app-access-permission.html" class="menu-link">
                      <div data-i18n="Permission">Permission</div>
                    </a>
                  </li>
                </ul>
              </li> */}
        
              <li class="menu-item">
                {/* <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-user-check"></i>
                  <div data-i18n="Authentications">Authentications</div>
                </a> */}
                <ul class="menu-sub">
                  {/* <li class="menu-item">
                    <a href="javascript:void(0);" class="menu-link menu-toggle">
                      <div data-i18n="Login">Login</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a href="auth-login-basic.html" class="menu-link" target="_blank">
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="auth-login-cover.html" class="menu-link" target="_blank">
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li class="menu-item">
                    <a href="javascript:void(0);" class="menu-link menu-toggle">
                      <div data-i18n="Register">Register</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a href="auth-register-basic.html" class="menu-link" target="_blank">
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="auth-register-cover.html" class="menu-link" target="_blank">
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="auth-register-multisteps.html" class="menu-link" target="_blank">
                          <div data-i18n="Multi-steps">Multi-steps</div>
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li class="menu-item">
                    <a href="javascript:void(0);" class="menu-link menu-toggle">
                      <div data-i18n="Verify Email">Verify Email</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a href="auth-verify-email-basic.html" class="menu-link" target="_blank">
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="auth-verify-email-cover.html" class="menu-link" target="_blank">
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li class="menu-item">
                    <a href="javascript:void(0);" class="menu-link menu-toggle">
                      <div data-i18n="Reset Password">Reset Password</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a href="auth-reset-password-basic.html" class="menu-link" target="_blank">
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="auth-reset-password-cover.html" class="menu-link" target="_blank">
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li class="menu-item">
                    <a href="javascript:void(0);" class="menu-link menu-toggle">
                      <div data-i18n="Forgot Password">Forgot Password</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a href="auth-forgot-password-basic.html" class="menu-link" target="_blank">
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="auth-forgot-password-cover.html" class="menu-link" target="_blank">
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li class="menu-item">
                    <a href="javascript:void(0);" class="menu-link menu-toggle">
                      <div data-i18n="Two Steps">Two Steps</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a href="auth-two-steps-basic.html" class="menu-link" target="_blank">
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="auth-two-steps-cover.html" class="menu-link" target="_blank">
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </li>
              {/* <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-spreadsheet"></i>
                  <div data-i18n="Wizard Examples">Wizard Examples</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="wizard-ex-checkout.html" class="menu-link">
                      <div data-i18n="Checkout">Checkout</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="wizard-ex-property-listing.html" class="menu-link">
                      <div data-i18n="Property Listing">Property Listing</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="wizard-ex-create-deal.html" class="menu-link">
                      <div data-i18n="Create Deal">Create Deal</div>
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* <li class="menu-item">
                <a href="modal-examples.html" class="menu-link">
                  <i class="menu-icon tf-icons bx bx-window-open"></i>
                  <div data-i18n="Modal Examples">Modal Examples</div>
                </a>
              </li> */}
  
              {/* <!-- Components --> */}
              {/* <li class="menu-header small text-uppercase"><span class="menu-header-text">Components</span></li> */}
              {/* <!-- Cards --> */}
            
              {/* <!-- User interface --> */}
          
              {/* <!-- Extended components --> */}
             
  
              {/* <!-- Icons --> */}
              {/* <li class="menu-item">
                <a href="javascript:void(0)" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-crown"></i>
                  <div data-i18n="Icons">Icons</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="icons-boxicons.html" class="menu-link">
                      <div data-i18n="Boxicons">Boxicons</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="icons-font-awesome.html" class="menu-link">
                      <div data-i18n="Fontawesome">Fontawesome</div>
                    </a>
                  </li>
                </ul>
              </li> */}
  
              {/* <!-- Forms & Tables --> */}
              {/* <li class="menu-header small text-uppercase"><span class="menu-header-text">Forms &amp; Tables</span></li> */}
              {/* <!-- Forms --> */}
         
      
            
              {/* <!-- Tables --> */}
           
              {/* <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-grid"></i>
                  <div data-i18n="Datatables">Datatables</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="tables-datatables-basic.html" class="menu-link">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="tables-datatables-advanced.html" class="menu-link">
                      <div data-i18n="Advanced">Advanced</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="tables-datatables-extensions.html" class="menu-link">
                      <div data-i18n="Extensions">Extensions</div>
                    </a>
                  </li>
                </ul>
              </li> */}
  
              {/* <!-- Charts & Maps --> */}
              {/* <li class="menu-header small text-uppercase"><span class="menu-header-text">Charts &amp; Maps</span></li> */}
              {/* <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-chart"></i>
                  <div data-i18n="Charts">Charts</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="charts-apex.html" class="menu-link">
                      <div data-i18n="Apex Charts">Apex Charts</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="charts-chartjs.html" class="menu-link">
                      <div data-i18n="ChartJS">ChartJS</div>
                    </a>
                  </li>
                </ul>
              </li> */}
          
  
              {/* <!-- Misc --> */}
              {/* <li class="menu-header small text-uppercase"><span class="menu-header-text">Misc</span></li> */}
              {/* <li class="menu-item">
                <a href="https://pixinvent.ticksy.com/" target="_blank" class="menu-link">
                  <i class="menu-icon tf-icons bx bx-support"></i>
                  <div data-i18n="Support">Support</div>
                </a>
              </li> */}
              {/* <li class="menu-item">
                <a
                  href="https://pixinvent.com/demo/frest-clean-bootstrap-admin-dashboard-template/documentation-bs5/"
                  target="_blank"
                  class="menu-link"
                >
                  <i class="menu-icon tf-icons bx bx-file"></i>
                  <div data-i18n="Documentation">Documentation</div>
                </a>
              </li> */}
            </ul>
          </aside>
  
          {/* <!-- Layout container --> */}
          <div class="layout-page">
            {/* <!-- Navbar --> */}
  
            <nav class="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
              <div class="container-fluid">
                <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                  <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                    <i class="bx bx-menu bx-sm"></i>
                  </a>
                </div>
  
                <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                  {/* <!-- Search --> */}
                  <div class="navbar-nav align-items-center">
                    <div class="nav-item navbar-search-wrapper mb-0">
                      <a class="nav-item nav-link search-toggler px-0" href="javascript:void(0);">
                        <i class="bx bx-search-alt bx-sm"></i>
                        <span class="d-none d-md-inline-block text-muted">Search (Ctrl+/)</span>
                      </a>
                    </div>
                  </div>
                  {/* <!-- /Search --> */}
  
                  <ul class="navbar-nav flex-row align-items-center ms-auto">
                    {/* <!-- Language --> */}
                    <li class="nav-item dropdown-language dropdown me-2 me-xl-0">
                      <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <i class="fi fi-us fis rounded-circle fs-3 me-1"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);" data-language="en">
                            <i class="fi fi-us fis rounded-circle fs-4 me-1"></i>
                            <span class="align-middle">English</span>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);" data-language="fr">
                            <i class="fi fi-fr fis rounded-circle fs-4 me-1"></i>
                            <span class="align-middle">French</span>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);" data-language="de">
                            <i class="fi fi-de fis rounded-circle fs-4 me-1"></i>
                            <span class="align-middle">German</span>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);" data-language="pt">
                            <i class="fi fi-pt fis rounded-circle fs-4 me-1"></i>
                            <span class="align-middle">Portuguese</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* <!--/ Language --> */}
  
                    {/* <!-- Style Switcher --> */}
                    <li class="nav-item me-2 me-xl-0">
                      <a class="nav-link style-switcher-toggle hide-arrow" href="javascript:void(0);">
                        <i class="bx bx-sm"></i>
                      </a>
                    </li>
                    {/* <!--/ Style Switcher --> */}
  
                    {/* <!-- Quick links  --> */}
                    <li class="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                      <a
                        class="nav-link dropdown-toggle hide-arrow"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        <i class="bx bx-grid-alt bx-sm"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end py-0">
                        <div class="dropdown-menu-header border-bottom">
                          <div class="dropdown-header d-flex align-items-center py-3">
                            <h5 class="text-body mb-0 me-auto">Shortcuts</h5>
                            <a
                              href="javascript:void(0)"
                              class="dropdown-shortcuts-add text-body"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Add shortcuts"
                              ><i class="bx bx-sm bx-plus-circle"></i
                            ></a>
                          </div>
                        </div>
                        <div class="dropdown-shortcuts-list scrollable-container">
                          <div class="row row-bordered overflow-visible g-0">
                            <div class="dropdown-shortcuts-item col">
                              <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                <i class="bx bx-calendar fs-4"></i>
                              </span>
                              <a href="app-calendar.html" class="stretched-link">Calendar</a>
                              <small class="text-muted mb-0">Appointments</small>
                            </div>
                            <div class="dropdown-shortcuts-item col">
                              <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                <i class="bx bx-food-menu fs-4"></i>
                              </span>
                              <a href="app-invoice-list.html" class="stretched-link">Invoice App</a>
                              <small class="text-muted mb-0">Manage Accounts</small>
                            </div>
                          </div>
                          <div class="row row-bordered overflow-visible g-0">
                            <div class="dropdown-shortcuts-item col">
                              <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                <i class="bx bx-user fs-4"></i>
                              </span>
                              <a href="app-user-list.html" class="stretched-link">User App</a>
                              <small class="text-muted mb-0">Manage Users</small>
                            </div>
                            <div class="dropdown-shortcuts-item col">
                              <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                <i class="bx bx-check-shield fs-4"></i>
                              </span>
                              <a href="app-access-roles.html" class="stretched-link">Role Management</a>
                              <small class="text-muted mb-0">Permission</small>
                            </div>
                          </div>
                          <div class="row row-bordered overflow-visible g-0">
                            <div class="dropdown-shortcuts-item col">
                              <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                <i class="bx bx-pie-chart-alt-2 fs-4"></i>
                              </span>
                              <a href="index.html" class="stretched-link">Dashboard</a>
                              <small class="text-muted mb-0">User Profile</small>
                            </div>
                            <div class="dropdown-shortcuts-item col">
                              <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                <i class="bx bx-cog fs-4"></i>
                              </span>
                              <a href="pages-account-settings-account.html" class="stretched-link">Setting</a>
                              <small class="text-muted mb-0">Account Settings</small>
                            </div>
                          </div>
                          <div class="row row-bordered overflow-visible g-0">
                            <div class="dropdown-shortcuts-item col">
                              <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                <i class="bx bx-help-circle fs-4"></i>
                              </span>
                              <a href="pages-help-center-landing.html" class="stretched-link">Help Center</a>
                              <small class="text-muted mb-0">FAQs & Articles</small>
                            </div>
                            <div class="dropdown-shortcuts-item col">
                              <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                <i class="bx bx-window-open fs-4"></i>
                              </span>
                              <a href="modal-examples.html" class="stretched-link">Modals</a>
                              <small class="text-muted mb-0">Useful Popups</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <!-- Quick links --> */}
  
                    {/* <!-- Notification --> */}
                    <li class="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
                      <a
                        class="nav-link dropdown-toggle hide-arrow"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        <i class="bx bx-bell bx-sm"></i>
                        <span class="badge bg-danger rounded-pill badge-notifications">5</span>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end py-0">
                        <li class="dropdown-menu-header border-bottom">
                          <div class="dropdown-header d-flex align-items-center py-3">
                            <h5 class="text-body mb-0 me-auto">Notification</h5>
                            <a
                              href="javascript:void(0)"
                              class="dropdown-notifications-all text-body"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Mark all as read"
                              ><i class="bx fs-4 bx-envelope-open"></i
                            ></a>
                          </div>
                        </li>
                        <li class="dropdown-notifications-list scrollable-container">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item list-group-item-action dropdown-notifications-item">
                              <div class="d-flex">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar">
                                    <img src="../../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
                                  </div>
                                </div>
                                <div class="flex-grow-1">
                                  <h6 class="mb-1">Congratulation Lettie 🎉</h6>
                                  <p class="mb-0">Won the monthly best seller gold badge</p>
                                  <small class="text-muted">1h ago</small>
                                </div>
                                <div class="flex-shrink-0 dropdown-notifications-actions">
                                  <a href="javascript:void(0)" class="dropdown-notifications-read"
                                    ><span class="badge badge-dot"></span
                                  ></a>
                                  <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                    ><span class="bx bx-x"></span
                                  ></a>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item list-group-item-action dropdown-notifications-item">
                              <div class="d-flex">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar">
                                    <span class="avatar-initial rounded-circle bg-label-danger">CF</span>
                                  </div>
                                </div>
                                <div class="flex-grow-1">
                                  <h6 class="mb-1">Charles Franklin</h6>
                                  <p class="mb-0">Accepted your connection</p>
                                  <small class="text-muted">12hr ago</small>
                                </div>
                                <div class="flex-shrink-0 dropdown-notifications-actions">
                                  <a href="javascript:void(0)" class="dropdown-notifications-read"
                                    ><span class="badge badge-dot"></span
                                  ></a>
                                  <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                    ><span class="bx bx-x"></span
                                  ></a>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                              <div class="d-flex">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar">
                                    <img src="../../assets/img/avatars/2.png" alt class="w-px-40 h-auto rounded-circle" />
                                  </div>
                                </div>
                                <div class="flex-grow-1">
                                  <h6 class="mb-1">New Message ✉️</h6>
                                  <p class="mb-0">You have new message from Natalie</p>
                                  <small class="text-muted">1h ago</small>
                                </div>
                                <div class="flex-shrink-0 dropdown-notifications-actions">
                                  <a href="javascript:void(0)" class="dropdown-notifications-read"
                                    ><span class="badge badge-dot"></span
                                  ></a>
                                  <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                    ><span class="bx bx-x"></span
                                  ></a>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item list-group-item-action dropdown-notifications-item">
                              <div class="d-flex">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar">
                                    <span class="avatar-initial rounded-circle bg-label-success"
                                      ><i class="bx bx-cart"></i
                                    ></span>
                                  </div>
                                </div>
                                <div class="flex-grow-1">
                                  <h6 class="mb-1">Whoo! You have new order 🛒</h6>
                                  <p class="mb-0">ACME Inc. made new order $1,154</p>
                                  <small class="text-muted">1 day ago</small>
                                </div>
                                <div class="flex-shrink-0 dropdown-notifications-actions">
                                  <a href="javascript:void(0)" class="dropdown-notifications-read"
                                    ><span class="badge badge-dot"></span
                                  ></a>
                                  <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                    ><span class="bx bx-x"></span
                                  ></a>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                              <div class="d-flex">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar">
                                    <img src="../../assets/img/avatars/9.png" alt class="w-px-40 h-auto rounded-circle" />
                                  </div>
                                </div>
                                <div class="flex-grow-1">
                                  <h6 class="mb-1">Application has been approved 🚀</h6>
                                  <p class="mb-0">Your ABC project application has been approved.</p>
                                  <small class="text-muted">2 days ago</small>
                                </div>
                                <div class="flex-shrink-0 dropdown-notifications-actions">
                                  <a href="javascript:void(0)" class="dropdown-notifications-read"
                                    ><span class="badge badge-dot"></span
                                  ></a>
                                  <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                    ><span class="bx bx-x"></span
                                  ></a>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                              <div class="d-flex">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar">
                                    <span class="avatar-initial rounded-circle bg-label-success"
                                      ><i class="bx bx-pie-chart-alt"></i
                                    ></span>
                                  </div>
                                </div>
                                <div class="flex-grow-1">
                                  <h6 class="mb-1">Monthly report is generated</h6>
                                  <p class="mb-0">July monthly financial report is generated</p>
                                  <small class="text-muted">3 days ago</small>
                                </div>
                                <div class="flex-shrink-0 dropdown-notifications-actions">
                                  <a href="javascript:void(0)" class="dropdown-notifications-read"
                                    ><span class="badge badge-dot"></span
                                  ></a>
                                  <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                    ><span class="bx bx-x"></span
                                  ></a>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                              <div class="d-flex">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar">
                                    <img src="../../assets/img/avatars/5.png" alt class="w-px-40 h-auto rounded-circle" />
                                  </div>
                                </div>
                                <div class="flex-grow-1">
                                  <h6 class="mb-1">Send connection request</h6>
                                  <p class="mb-0">Peter sent you connection request</p>
                                  <small class="text-muted">4 days ago</small>
                                </div>
                                <div class="flex-shrink-0 dropdown-notifications-actions">
                                  <a href="javascript:void(0)" class="dropdown-notifications-read"
                                    ><span class="badge badge-dot"></span
                                  ></a>
                                  <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                    ><span class="bx bx-x"></span
                                  ></a>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item list-group-item-action dropdown-notifications-item">
                              <div class="d-flex">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar">
                                    <img src="../../assets/img/avatars/6.png" alt class="w-px-40 h-auto rounded-circle" />
                                  </div>
                                </div>
                                <div class="flex-grow-1">
                                  <h6 class="mb-1">New message from Jane</h6>
                                  <p class="mb-0">Your have new message from Jane</p>
                                  <small class="text-muted">5 days ago</small>
                                </div>
                                <div class="flex-shrink-0 dropdown-notifications-actions">
                                  <a href="javascript:void(0)" class="dropdown-notifications-read"
                                    ><span class="badge badge-dot"></span
                                  ></a>
                                  <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                    ><span class="bx bx-x"></span
                                  ></a>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                              <div class="d-flex">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar">
                                    <span class="avatar-initial rounded-circle bg-label-warning"
                                      ><i class="bx bx-error"></i
                                    ></span>
                                  </div>
                                </div>
                                <div class="flex-grow-1">
                                  <h6 class="mb-1">CPU is running high</h6>
                                  <p class="mb-0">CPU Utilization Percent is currently at 88.63%,</p>
                                  <small class="text-muted">5 days ago</small>
                                </div>
                                <div class="flex-shrink-0 dropdown-notifications-actions">
                                  <a href="javascript:void(0)" class="dropdown-notifications-read"
                                    ><span class="badge badge-dot"></span
                                  ></a>
                                  <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                    ><span class="bx bx-x"></span
                                  ></a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li class="dropdown-menu-footer border-top">
                          <a href="javascript:void(0);" class="dropdown-item d-flex justify-content-center p-3">
                            View all notifications
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* <!--/ Notification --> */}
  
                    {/* <!-- User --> */}
                    <li class="nav-item navbar-dropdown dropdown-user dropdown">
                      <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <div class="avatar avatar-online">
                          <img src="../../assets/img/avatars/1.png" alt class="rounded-circle" />
                        </div>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a class="dropdown-item" href="pages-account-settings-account.html">
                            <div class="d-flex">
                              <div class="flex-shrink-0 me-3">
                                <div class="avatar avatar-online">
                                  <img src="../../assets/img/avatars/1.png" alt class="rounded-circle" />
                                </div>
                              </div>
                              <div class="flex-grow-1">
                                <span class="fw-semibold d-block lh-1">John Doe</span>
                                <small>Admin</small>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <div class="dropdown-divider"></div>
                        </li>
                        <li>
                          <a class="dropdown-item" href="pages-profile-user.html">
                            <i class="bx bx-user me-2"></i>
                            <span class="align-middle">My Profile</span>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="pages-account-settings-account.html">
                            <i class="bx bx-cog me-2"></i>
                            <span class="align-middle">Settings</span>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="pages-account-settings-billing.html">
                            <span class="d-flex align-items-center align-middle">
                              <i class="flex-shrink-0 bx bx-credit-card me-2"></i>
                              <span class="flex-grow-1 align-middle">Billing</span>
                              <span class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20"
                                >4</span
                              >
                            </span>
                          </a>
                        </li>
                        <li>
                          <div class="dropdown-divider"></div>
                        </li>
                        <li>
                          <a class="dropdown-item" href="pages-help-center-landing.html">
                            <i class="bx bx-support me-2"></i>
                            <span class="align-middle">Help</span>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="pages-faq.html">
                            <i class="bx bx-help-circle me-2"></i>
                            <span class="align-middle">FAQ</span>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="pages-pricing.html">
                            <i class="bx bx-dollar me-2"></i>
                            <span class="align-middle">Pricing</span>
                          </a>
                        </li>
                        <li>
                          <div class="dropdown-divider"></div>
                        </li>
                        <li>
                          <a class="dropdown-item" href="auth-login-cover.html" target="_blank">
                            <i class="bx bx-power-off me-2"></i>
                            <span class="align-middle">Log Out</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* <!--/ User --> */}
                  </ul>
                </div>
  
                {/* <!-- Search Small Screens --> */}
                <div class="navbar-search-wrapper search-input-wrapper d-none">
                  <input
                    type="text"
                    class="form-control search-input container-fluid border-0"
                    placeholder="Search..."
                    aria-label="Search..."
                  />
                  <i class="bx bx-x bx-sm search-toggler cursor-pointer"></i>
                </div>
              </div>
            </nav>
  
            {/* <!-- / Navbar --> */}
  
            {/* <!-- Content wrapper --> */}
            <div class="content-wrapper">
              {/* <!-- Content --> */}
  
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row g-4 mb-4">
                  <div class="col-sm-6 col-xl-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex align-items-start justify-content-between">
                          <div class="content-left">
                            <span>Current Tests</span>
                            <div class="d-flex align-items-end mt-2">
                              <h4 class="mb-0 me-2">21,459</h4>
                              <small class="text-success">(+29%)</small>
                            </div>
                            <small>Total Users</small>
                          </div>
                          <span class="badge bg-label-primary rounded p-2">
                            <i class="bx bx-user bx-sm"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex align-items-start justify-content-between">
                          <div class="content-left">
                            <span>Pending Tests</span>
                            <div class="d-flex align-items-end mt-2">
                              <h4 class="mb-0 me-2">4,567</h4>
                              <small class="text-success">(+18%)</small>
                            </div>
                            <small>Last week analytics </small>
                          </div>
                          <span class="badge bg-label-danger rounded p-2">
                            <i class="bx bx-user-plus bx-sm"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex align-items-start justify-content-between">
                          <div class="content-left">
                            <span>Today's tests</span>
                            <div class="d-flex align-items-end mt-2">
                              <h4 class="mb-0 me-2">19,860</h4>
                              <small class="text-danger">(-14%)</small>
                            </div>
                            <small>Last week analytics</small>
                          </div>
                          <span class="badge bg-label-success rounded p-2">
                            <i class="bx bx-group bx-sm"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex align-items-start justify-content-between">
                          <div class="content-left">
                            <span>All tests</span>
                            <div class="d-flex align-items-end mt-2">
                              <h4 class="mb-0 me-2">237</h4>
                              <small class="text-success">(+42%)</small>
                            </div>
                            <small>Last week analytics</small>
                          </div>
                          <span class="badge bg-label-warning rounded p-2">
                            <i class="bx bx-user-voice bx-sm"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Users List Table --> */}
                <div class="card">
                  <div class="card-header border-bottom">
                    <h5 class="card-title">Search Filter</h5>
                    <div class="d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0">
                      <div class="col-md-4 user_role"></div>
                      <div class="col-md-4 user_plan"></div>
                      <div class="col-md-4 user_status"></div>
                    </div>
                  </div>
                  <div class="card-datatable table-responsive">
                    <table class="datatables-users table border-top">
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
                    class="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offcanvasAddUser"
                    aria-labelledby="offcanvasAddUserLabel"
                  >
                    <div class="offcanvas-header border-bottom">
                      <h6 id="offcanvasAddUserLabel" class="offcanvas-title">Add User</h6>
                      <button
                        type="button"
                        class="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="offcanvas-body mx-0 flex-grow-0">
                      <form class="add-new-user pt-0" id="addNewUserForm" onsubmit="return false">
                        <div class="mb-3">
                          <label class="form-label" for="add-user-fullname">Full Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="add-user-fullname"
                            placeholder="John Doe"
                            name="userFullname"
                            aria-label="John Doe"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label" for="add-user-email">Email</label>
                          <input
                            type="text"
                            id="add-user-email"
                            class="form-control"
                            placeholder="john.doe@example.com"
                            aria-label="john.doe@example.com"
                            name="userEmail"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label" for="add-user-contact">Contact</label>
                          <input
                            type="text"
                            id="add-user-contact"
                            class="form-control phone-mask"
                            placeholder="+1 (609) 988-44-11"
                            aria-label="john.doe@example.com"
                            name="userContact"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label" for="add-user-company">Company</label>
                          <input
                            type="text"
                            id="add-user-company"
                            class="form-control"
                            placeholder="Web Developer"
                            aria-label="jdoe1"
                            name="companyName"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label" for="country">Country</label>
                          <select id="country" class="select2 form-select">
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
                        <div class="mb-3">
                          <label class="form-label" for="user-role">User Role</label>
                          <select id="user-role" class="form-select">
                            <option value="subscriber">Subscriber</option>
                            <option value="editor">Editor</option>
                            <option value="maintainer">Maintainer</option>
                            <option value="author">Author</option>
                            <option value="admin">Admin</option>
                          </select>
                        </div>
                        <div class="mb-4">
                          <label class="form-label" for="user-plan">Select Plan</label>
                          <select id="user-plan" class="form-select">
                            <option value="basic">Basic</option>
                            <option value="enterprise">Enterprise</option>
                            <option value="company">Company</option>
                            <option value="team">Team</option>
                          </select>
                        </div>
                        <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>
                        <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- / Content --> */}
  
              {/* <!-- Footer --> */}
              {/* <footer class="content-footer footer bg-footer-theme">
                <div class="container-fluid d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                  <div class="mb-2 mb-md-0">
                    ©
                    <script>
                      document.write(new Date().getFullYear());
                    </script>
                    , made with ❤️ by
                    <a href="https://pixinvent.com" target="_blank" class="footer-link fw-semibold">PIXINVENT</a>
                  </div>
                  <div>
                    <a href="https://themeforest.net/licenses/standard" class="footer-link me-4" target="_blank"
                      >License</a
                    >
                    <a href="https://1.envato.market/pixinvent_portfolio" target="_blank" class="footer-link me-4"
                      >More Themes</a
                    >
  
                    <a
                      href="https://pixinvent.com/demo/frest-clean-bootstrap-admin-dashboard-template/documentation-bs5/"
                      target="_blank"
                      class="footer-link me-4"
                      >Documentation</a
                    >
  
                    <a href="https://pixinvent.ticksy.com/" target="_blank" class="footer-link d-none d-sm-inline-block"
                      >Support</a
                    >
                  </div>
                </div>
              </footer> */}
              {/* <!-- / Footer --> */}
  
              <div class="content-backdrop fade"></div>
            </div>
            {/* <!-- Content wrapper --> */}
          </div>
          {/* <!-- / Layout page --> */}
        </div>
  
        {/* <!-- Overlay --> */}
        <div class="layout-overlay layout-menu-toggle"></div>
  
        {/* <!-- Drag Target Area To SlideIn Menu On Small Screens --> */}
        <div class="drag-target"></div>
      </div>
      
    
    );
  
}
 
export default Home;