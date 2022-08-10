import React from 'react'

import {NavLink} from 'react-router-dom'


export const Menu = () => {

  return (
    
 <aside id="layout-menu" className="tab-menu layout-menu-horizontal menu-horizontal menu bg-menu-theme flex-grow-0">
    <div className="container-xxl d-flex h-100 container-tabs">
      <ul className="menu-inner">

        {/* <!-- Dashboards --> */}
        <NavLink  className="menu-item "  exact activeClassName="active" to='/frontdesk' >
        <li className="menu-link ">
            <i className="menu-icon tf-icons bx bx-customize"></i>
            <div data-i18n="Dashboard" >Dashboard</div>
          
        </li>
        </NavLink>
        {/* <!-- All tests today --> */}
        
        <NavLink className="menu-item" exact activeClassName="active" to='/allteststoday' >
        <li className="menu-link">
            <i className="menu-icon tf-icons bx bx-customize"></i>
            <div data-i18n="All tests today">All tests today</div>
        </li>
        </NavLink>

        {/* <!-- Did not show up --> */}
        <NavLink className="menu-item" exact activeClassName="active" to='/didnotshowup' >

        <li className="menu-link">
            <i className="menu-icon tf-icons bx bx-customize"></i>
            <div data-i18n="Did not show up">Did not show up</div>
        </li>
        </NavLink>

        {/* <!-- Cancelled Appointment --> */}
        <NavLink  className="menu-item" exact activeClassName="active" to='/cancelledappointment' >

        <li className="menu-link">
            <i className="menu-icon tf-icons bx bx-collection"></i>
            <div data-i18n="Cancelled Appointment">Cancelled Appointment</div>

          
        </li>
        </NavLink>

        {/* <!-- Calender --> */}
        <NavLink  className="menu-item" exact activeClassName="active" to='/calender' >
          
        <li className="menu-link">
            <i className="menu-icon tf-icons bx bx-code-block"></i>
            <div data-i18n="Calender">Calender</div>

        </li>
        </NavLink>
      </ul>
    </div>
  </aside>
  );
}
