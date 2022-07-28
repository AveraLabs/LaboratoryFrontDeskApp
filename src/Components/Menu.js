import React from 'react'

export const Menu = () => {
  return (
    
 <aside id="layout-menu" className="layout-menu-horizontal menu-horizontal menu bg-menu-theme flex-grow-0">
    <div className="container-xxl d-flex h-100 space">
      <ul className="menu-inner">
        {/* <!-- Dashboards --> */}
        <li className="menu-item active">
          <a href="/frontdesk" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Dashboards">Dashboards</div>
          </a>
        </li>

        {/* <!-- Layouts --> */}
        <li className="menu-item">
          <a href="/allteststoday" className="menu-link">
            <i className="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="All tests today">All tests today</div>
          </a>
        </li>

        {/* <!-- Apps --> */}
        <li className="menu-item">
          <a href="/didnotshowup" className="menu-link">
            <i className="menu-icon tf-icons bx bx-customize"></i>
            <div data-i18n="Did not show up">Did not show up</div>
          </a>
         
        </li>

        {/* <!-- Pages --> */}
        <li className="menu-item">
          <a href="/cancelledappointment" className="menu-link">
            <i className="menu-icon tf-icons bx bx-collection"></i>
            <div data-i18n="Cancelled Appointment">Cancelled Appointment</div>
          </a>
          
        </li>

        {/* <!-- Components --> */}
        <li className="menu-item">
          <a href="/calender" className="menu-link">
            <i className="menu-icon tf-icons bx bx-code-block"></i>
            <div data-i18n="Calender">Calender</div>
          </a>
         
        </li>
      </ul>
    </div>
  </aside>
  );
}
