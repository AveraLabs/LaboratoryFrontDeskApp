import React from 'react'
import { DataTable } from '../Components/DataTable';
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
       
       <div className="container-xxl flex-grow-1 container-p-y mt-5">   
       <div className="card">
                <h5 className="card-header">Did not show up</h5>
                  <DataTable />
              </div>
       </div>  
     </div>  

   </div> 

  </div> 

  </div>
  );
}

export default DidNotShowUp;
