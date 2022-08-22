import React from 'react';
import { DataTable } from '../Components/DataTable';
import { Menu } from '../Components/Menu';

import Navbar from '../Components/Navbar'; 
import Sidebar from '../Components/Sidebar';
import { TabBar } from '../Components/TaBbar';

function AllTestToday() {
    return (
      // <!-- Layout wrapper -->
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">

        <div className="layout-container">
        
           <TabBar />  
         
          <div className="layout-page">

              <Menu />
             {/* <!-- Content wrapper - All Test Today --> */}

            <div className="content-wrapper main-session">
              {/* <!-- Content --> */}
                  
              <div className="container-xxl flex-grow-1 container-p-y mt-5">
                {/* <!-- Users List Table --> */} 
                <div className="card">
                  <h5 className="card-header">All tests Today</h5>
                   <DataTable />
                </div> 

              </div>
              {/* <!-- / Content --> */}
  
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
 
export default AllTestToday;