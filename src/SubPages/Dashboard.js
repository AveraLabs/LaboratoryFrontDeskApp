import React from 'react' 
import { TabBar } from '../Components/TaBbar';
import { Menu } from '../Components/Menu';
import {Statistics} from '../Components/Statistics';
import { DataTable } from '../Components/DataTable';

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
       
            <Statistics />
            
             <div class="data">
                <h5 class="card-header">Pending Bookings</h5>
                 <DataTable />
              </div>
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