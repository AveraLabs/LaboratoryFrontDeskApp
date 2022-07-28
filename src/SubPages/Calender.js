import Navbar from '../Components/Navbar'; 

import { Menu } from '../Components/Menu';

import { TabBar } from '../Components/TaBbar';

const Calender = () => {
  return ( 
   
      <div className="layout-wrapper layout-horizontal layout-navbar-full layout-without-menu"> 

        {/* <!-- Layout container --> */}
        <div className="layout-container"> 

          {/* <!-- Menu --> */}
              <TabBar /> 
        
          <div className="layout-page">
              <Menu />
             {/* <!-- Content wrapper - Calender --> */}
             <div className="content-wrapper main-session"> 

            {/* <!-- Content --> */}
               
            <div className="container-xxl flex-grow-1 container-p-y mt-5">
              <div className="card app-calendar-wrapper">
                <div className="row g-0">
                  {/* <!-- Calendar Sidebar --> */}
                  <div className="col app-calendar-sidebar" id="app-calendar-sidebar">
                    <div className="border-bottom p-4 my-sm-0 mb-3">
                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-toggle-sidebar"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#addEventSidebar"
                          aria-controls="addEventSidebar"
                        >
                          <i className="bx bx-plus"></i>
                          <span className="align-middle">Add Event</span>
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      {/* <!-- inline calendar (flatpicker) --> */}
                      <div className="ms-n2">
                        <div className="inline-calendar"></div>
                      </div>

                      <hr className="container-m-nx my-4" />

                      {/* <!-- Filter --> */}
                      <div className="mb-4">
                        <small className="text-small text-muted text-uppercase align-middle">Filter</small>
                      </div>

                      <div className="form-check mb-2">
                        <input
                          className="form-check-input select-all"
                          type="checkbox"
                          id="selectAll"
                          data-value="all"
                          checked
                        />
                        <label className="form-check-label" for="selectAll">View All</label>
                      </div>

                      <div className="app-calendar-events-filter">
                        <div className="form-check form-check-danger mb-2">
                          <input
                            className="form-check-input input-filter"
                            type="checkbox"
                            id="select-personal"
                            data-value="personal"
                            checked
                          />
                          <label className="form-check-label" for="select-personal">Personal</label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input input-filter"
                            type="checkbox"
                            id="select-business"
                            data-value="business"
                            checked
                          />
                          <label className="form-check-label" for="select-business">Business</label>
                        </div>
                        <div className="form-check form-check-warning mb-2">
                          <input
                            className="form-check-input input-filter"
                            type="checkbox"
                            id="select-family"
                            data-value="family"
                            checked
                          />
                          <label className="form-check-label" for="select-family">Family</label>
                        </div>
                        <div className="form-check form-check-success mb-2">
                          <input
                            className="form-check-input input-filter"
                            type="checkbox"
                            id="select-holiday"
                            data-value="holiday"
                            checked
                          />
                          <label className="form-check-label" for="select-holiday">Holiday</label>
                        </div>
                        <div className="form-check form-check-info">
                          <input
                            className="form-check-input input-filter"
                            type="checkbox"
                            id="select-etc"
                            data-value="etc"
                            checked
                          />
                          <label className="form-check-label" for="select-etc">ETC</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /Calendar Sidebar --> */}

                  {/* <!-- Calendar & Modal --> */}
                  <div className="col app-calendar-content">
                    <div className="card shadow-none border-0">
                      <div className="card-body pb-0">
                        {/* <!-- FullCalendar --> */}
                        <div id="calendar"></div>
                      </div>
                    </div>
                    <div className="app-overlay"></div>
                    {/* <!-- FullCalendar Offcanvas --> */}
                    <div
                      className="offcanvas offcanvas-end event-sidebar"
                      tabindex="-1"  
                      id="addEventSidebar"
                      aria-labelledby="addEventSidebarLabel"
                    >
                      <div className="offcanvas-header border-bottom">
                        <h6 className="offcanvas-title" id="addEventSidebarLabel">Add Event</h6>
                        <button
                          type="button"
                          className="btn-close text-reset"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="offcanvas-body">
                        <form className="event-form pt-0" id="eventForm" onsubmit="return false">
                          <div className="mb-3">
                            <label className="form-label" for="eventTitle">Title</label>
                            <input
                              type="text"
                              className="form-control"
                              id="eventTitle"
                              name="eventTitle"
                              placeholder="Event Title"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label" for="eventLabel">Label</label>
                            <select className="select2 select-event-label form-select" id="eventLabel" name="eventLabel">
                              <option data-label="primary" value="Business" selected>Business</option>
                              <option data-label="danger" value="Personal">Personal</option>
                              <option data-label="warning" value="Family">Family</option>
                              <option data-label="success" value="Holiday">Holiday</option>
                              <option data-label="info" value="ETC">ETC</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label className="form-label" for="eventStartDate">Start Date</label>
                            <input
                              type="text"
                              className="form-control"
                              id="eventStartDate"
                              name="eventStartDate"
                              placeholder="Start Date"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label" for="eventEndDate">End Date</label>
                            <input
                              type="text"
                              className="form-control"
                              id="eventEndDate"
                              name="eventEndDate"
                              placeholder="End Date"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="switch">
                              <input type="checkbox" className="switch-input allDay-switch" />
                              <span className="switch-toggle-slider">
                                <span className="switch-on"></span>
                                <span className="switch-off"></span>
                              </span>
                              <span className="switch-label">All Day</span>
                            </label>
                          </div>
                          <div className="mb-3">
                            <label className="form-label" for="eventURL">Event URL</label>
                            <input
                              type="url"
                              className="form-control"
                              id="eventURL"
                              name="eventURL"
                              placeholder="https://www.google.com"
                            />
                          </div>
                          <div className="mb-3 select2-primary">
                            <label className="form-label" for="eventGuests">Add Guests</label>
                            <select
                              className="select2 select-event-guests form-select"
                              id="eventGuests"
                              name="eventGuests"
                              multiple
                            >
                              <option data-avatar="1.png" value="Jane Foster">Jane Foster</option>
                              <option data-avatar="3.png" value="Donna Frank">Donna Frank</option>
                              <option data-avatar="5.png" value="Gabrielle Robertson">Gabrielle Robertson</option>
                              <option data-avatar="7.png" value="Lori Spears">Lori Spears</option>
                              <option data-avatar="9.png" value="Sandy Vega">Sandy Vega</option>
                              <option data-avatar="11.png" value="Cheryl May">Cheryl May</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label className="form-label" for="eventLocation">Location</label>
                            <input
                              type="text"
                              className="form-control"
                              id="eventLocation"
                              name="eventLocation"
                              placeholder="Enter Location"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label" for="eventDescription">Description</label>
                            <textarea className="form-control" name="eventDescription" id="eventDescription"></textarea>
                          </div>
                          <div className="mb-3 d-flex justify-content-sm-between justify-content-start my-4">
                            <div>
                              <button type="submit" className="btn btn-primary btn-add-event me-sm-3 me-1">Add</button>
                              <button type="submit" className="btn btn-primary btn-update-event d-none me-sm-3 me-1">
                                Update
                              </button>
                              <button
                                type="reset"
                                className="btn btn-label-secondary btn-cancel me-sm-0 me-1"
                                data-bs-dismiss="offcanvas"
                              >
                                Cancel
                              </button>
                            </div>
                            <div><button className="btn btn-label-danger btn-delete-event d-none">Delete</button></div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /Calendar & Modal --> */}
                </div>
              </div>
            </div>
            {/* <!-- / Content --> */}  {/* <!-- Layout container --> */}   

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

export default Calender;