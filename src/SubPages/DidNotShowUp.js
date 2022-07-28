import React from 'react'
import { Menu } from '../Components/Menu';
import { TabBar } from '../Components/TaBbar';

const DidNotShowUp = () => {
  return ( 
    
  <div className="layout-wrapper layout-horizontal layout-without-menu layout-navbar-full">
         
      {/* <!-- Layout container --> */}
    <div className="layout-container">
     
       <TabBar/>     
    
    <div className="layout-page">
       <Menu/>

      <div className="content-wrapper main-session"> 
       
      
       <div className="container-xxl flex-grow-1 container-p-y">   

       <div className="card">
                <h5 className="card-header">Did not show up</h5>
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
                        <td><i className="fa fa-user fa-lg text-danger me-3"></i> <strong>7657c174-284e-483f-9113-948e9128cf9c</strong></td>
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
                             
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fa fa-user fa-lg text-info me-3"></i> <strong>194c7967-f32d-4da7-b13a-16f7427d8ec5</strong></td>
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
                              
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fa fa-user fa-lg text-success me-3"></i> <strong>3d539ca7-a27d-4833-ade6-320e27eefb69</strong></td>
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
                          <i className="fa fa-user fa-lg text-primary me-3"></i> <strong>09777d45-93c2-45db-9449-012e6c07fc94</strong>
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
     </div>  

   </div> 

  </div> 

  </div>
  );
}

export default DidNotShowUp;
