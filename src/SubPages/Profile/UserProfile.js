import React from 'react' 
import Navbar from '../../Components/Navbar'; 
import Sidebar from '../../Components/Sidebar';


function UserProfile () {
  return ( 
    <div className="layout-wrapper layout-content-navbar"> 
         
    {/* layout container */}
    <div className="layout-container">
      
      <Sidebar />  
       
      {/* layout page */}
     <div className="layout-page">
        
      <Navbar />
     
     {/* content wrapper */}
     <div class="content-wrapper">
            {/* <!-- Content --> */}

            <div class="container-xxl flex-grow-1 container-p-y"> 
              <h4 class="py-3 breadcrumb-wrapper mb-4">
                <span class="text-muted fw-light"></span>User Profile
              </h4> 

              <div class="row gy-4">
                {/* <!-- User Sidebar --> */} 

                <div class="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0 card-contain">
                  {/* <!-- User Card --> */}
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="user-avatar-section">
                        <div class="d-flex align-items-center flex-column">
                          <img
                            class="img-fluid rounded my-4"
                            src="../../assets/img/avatars/10.png"
                            height="110"
                            width="110"
                            alt="User avatar"
                          />
                          <div class="user-info text-center">
                            <h5 class="mb-2">Violet Mendoza</h5>
                            <span class="badge bg-label-secondary"> Customer </span>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex justify-content-around flex-wrap my-4 py-3">
                        <div class="d-flex align-items-start me-4 mt-3 gap-3">
                          <span class="badge bg-label-primary p-2 rounded"><i class="bx bx-check bx-sm"></i></span>
                          <div>
                            <h5 class="mb-0">1.23k</h5>
                            <span>Tasks Done</span>
                          </div>
                        </div>
                        <div class="d-flex align-items-start mt-3 gap-3">
                          <span class="badge bg-label-primary p-2 rounded"><i class="bx bx-customize bx-sm"></i></span>
                          <div>
                            <h5 class="mb-0">568</h5>
                            <span>Projects Done</span>
                          </div>
                        </div>
                      </div>
                      <h5 class="pb-2 border-bottom mb-4">Details</h5>
                      <div class="info-container">
                        <ul class="list-unstyled">
                          <li class="mb-3">
                            <span class="fw-bold me-2">Avera ID:</span>
                            <span>violet.dev</span>
                          </li>
                          <li class="mb-3">
                            <span class="fw-bold me-2">Gender:</span>
                            <span>vafgot@vultukir.org</span>
                          </li>
                          <li class="mb-3">
                            <span class="fw-bold me-2">Status:</span>
                            <span class="badge bg-label-success">Active</span>
                          </li>
                          {/* <li class="mb-3">
                            <span class="fw-bold me-2">Role:</span>
                            <span>Author</span>
                          </li>
                          <li class="mb-3">
                            <span class="fw-bold me-2">Tax id:</span>
                            <span>Tax-8965</span>
                          </li>
                          <li class="mb-3">
                            <span class="fw-bold me-2">Contact:</span>
                            <span>(123) 456-7890</span>
                          </li>
                          <li class="mb-3">
                            <span class="fw-bold me-2">Languages:</span>
                            <span>French</span>
                          </li> */}
                          <li class="mb-3">
                            <span class="fw-bold me-2">Cost:</span>
                            <span>England</span>
                          </li>
                        </ul>
                        <div class="d-flex justify-content-center pt-3">
                          <a
                            href=""
                            class="btn btn-primary me-3"
                            data-bs-target="#editUser"
                            data-bs-toggle="modal"
                            >Edit</a
                          >
                          <a href="" class="btn btn-label-danger suspend-user">Suspended</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /User Card --> */}
                  {/* <!-- Plan Card --> */}
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-start">
                        <span class="badge bg-label-primary">Standard</span>
                        <div class="d-flex justify-content-center">
                          <sup class="h5 pricing-currency mt-3 mt-sm-4 mb-0 me-1 text-primary">$</sup>
                          <h1 class="display-3 fw-normal mb-0 text-primary">99</h1>
                          <sub class="fs-6 pricing-duration mt-auto mb-4">/month</sub>
                        </div>
                      </div>
                      <ul class="ps-3 g-2 mb-3">
                        <li class="mb-2">10 Users</li>
                        <li class="mb-2">Up to 10 GB storage</li>
                        <li>Basic Support</li>
                      </ul>
                      <div class="d-flex justify-content-between align-items-center mb-1">
                        <h6 class="mb-0">Days</h6>
                        <h6 class="mb-0">65% Completed</h6>
                      </div>
                      {/* <div class="progress mb-1" style="height: 8px">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 65%"
                          aria-valuenow="65"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div> */}
                      <span>4 days remaining</span>
                      <div class="d-grid w-100 mt-3 pt-2">
                        <button class="btn btn-primary" data-bs-target="#upgradePlanModal" data-bs-toggle="modal">
                          Upgrade Plan
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /Plan Card --> */}
                </div>
                {/* <!--/ User Sidebar --> */}

                {/* <!-- User Content --> */}
              
                {/* <!--/ User Content --> */}
              </div>

              {/* <!-- Modal --> */}
              {/* <!-- Edit User Modal --> */}
            
              {/* <!--/ Edit User Modal --> */}

              {/* <!-- Add New Credit Card Modal --> */}
           
              {/* <!--/ Add New Credit Card Modal --> */}

              {/* <!-- /Modal --> */}
            </div>
            {/* <!-- / Content --> */}

           
        
            {/* <!-- / Footer --> */}

            <div class="content-backdrop fade"></div>
          </div>
     </div> 

    </div> 
    </div>
  )
}

export default UserProfile;