import React from 'react';
import Navbar from '../Components/Navbar'; 
import Sidebar from '../Components/Sidebar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Home() {
  
    return (
      // <!-- Layout wrapper -->
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* <!-- Menu --> */}
  
          <aside id="layout-menu"  className="layout-menu menu-vertical menu bg-menu-theme">
            <div  className="app-brand demo">
              <a href="index.html"  className="app-brand-link">
                <span  className="app-brand-logo demo">
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
                <span  className="app-brand-text demo menu-text fw-bold ms-2">Avera Labs</span>
              </a>
  
              <a href="javascript:void(0);"  className="layout-menu-toggle menu-link text-large ms-auto">
                <i  className="bx menu-toggle-icon d-none d-xl-block fs-4 align-middle"></i>
                <i  className="bx bx-x d-block d-xl-none bx-sm align-middle"></i>
              </a>
            </div>
  
            <div  className="menu-divider mt-0"></div>
  
            <div  className="menu-inner-shadow"></div>
  
            <ul  className="menu-inner py-1">
              {/* <!-- Page --> */}
              <li  className="menu-item active">
                <a href="index.html"  className="menu-link">
                  <i  className="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Page 1">Page 1</div>
                </a>
              </li>
              <li  className="menu-item">
                <a href="page-2.html"  className="menu-link">
                  <i  className="menu-icon tf-icons bx bx-detail"></i>
                  <div data-i18n="Page 2">Page 2</div>
                </a>
              </li>
            </ul>
          </aside>
          {/* <!-- / Menu --> */}
  
          {/* <!-- Layout container --> */}
          <div  className="layout-page">
            {/* <!-- Navbar --> */}
  
            <nav  className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
              <div  className="container-fluid">
                <div  className="navbar-nav align-items-center">
                  <a  className="nav-link style-switcher-toggle hide-arrow" href="javascript:void(0);">
                    <i  className="bx bx-sm"></i>
                  </a>
                </div>
  
                <div  className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                  <a  className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                    <i  className="bx bx-menu bx-sm"></i>
                  </a>
                </div>
  
                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                  <ul className="navbar-nav flex-row align-items-center ms-auto">
                   
                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                      <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <div className="avatar avatar-online">
                          <img src="./assets/img/avatars/1.png" alt className="rounded-circle" />
                        </div>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar avatar-online">
                                  <img src="../../assets/img/avatars/1.png" alt className="rounded-circle" />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <span className="fw-semibold d-block lh-1">John Doe</span>
                                <small>Admin</small>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <div className="dropdown-divider"></div>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bx bx-user me-2"></i>
                            <span className="align-middle">My Profile</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bx bx-cog me-2"></i>
                            <span className="align-middle">Settings</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <span className="d-flex align-items-center align-middle">
                              <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                              <span className="flex-grow-1 align-middle">Billing</span>
                              <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20"
                                >4</span
                              >
                            </span>
                          </a>
                        </li>
                        <li>
                          <div className="dropdown-divider"></div>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bx bx-power-off me-2"></i>
                            <span className="align-middle">Log Out</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* <!--/ User --> */}
                  </ul>
                </div>
              </div>
            </nav>
  
            {/* <!-- / Navbar --> */}
  
            {/* <!-- Content wrapper --> */}
            <div className="content-wrapper">
              {/* <!-- Content --> */}
  
              <div  className="container-xxl flex-grow-1 container-p-y">
                <h4  className="py-3 breadcrumb-wrapper mb-4">Page 1</h4>
                <p>
                  Sample page.<br />For more layout options refer
                  <a
                    href="https://pixinvent.com/demo/frest-clean-bootstrap-admin-dashboard-template/documentation-bs5//layouts.html"
                    target="_blank"
                    className="fw-bold"
                    >Layout docs</a
                  >.
                </p>
              </div>
              {/* <!-- / Content --> */}
  
              {/* <!-- Footer --> */}
              {/* <footer  className="content-footer footer bg-footer-theme">
                <div  className="container-fluid d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                  <div  className="mb-2 mb-md-0">
                    ©
                    <script>
                      document.write(new Date().getFullYear());
                    </script>
                    , made with ❤️ by
                    <a href="https://pixinvent.com" target="_blank" className="footer-link fw-semibold">PIXINVENT</a>
                  </div>
                  <div>
                    <a
                      href="https://pixinvent.com/demo/frest-clean-bootstrap-admin-dashboard-template/documentation-bs5/"
                      target="_blank"
                      className="footer-link me-4"
                      >Documentation</a
                    >
                  </div>
                </div>
              </footer> */}
              {/* <!-- / Footer --> */}
  
              <div  className="content-backdrop fade"></div>
            </div>
            {/* <!-- Content wrapper -->
          </div> */}
          {/* <!-- / Layout page --> */}
        </div>
  
        {/* <!-- Overlay --> */}
        <div  className="layout-overlay layout-menu-toggle"></div>
  
        {/* <!-- Drag Target Area To SlideIn Menu On Small Screens --> */}
        <div className="drag-target"></div>
      </div>  
       {/* <!-- / Layout wrapper --> */}
      </div>
    )
  
}
 
export default Home;