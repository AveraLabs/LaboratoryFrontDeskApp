import React from 'react'

export const Menu = () => {
  return (
    
 <aside id="layout-menu" className="layout-menu-horizontal menu-horizontal menu bg-menu-theme flex-grow-0">
    <div className="container-xxl d-flex h-100 space">
      <ul className="menu-inner">
        {/* <!-- Dashboards --> */}
        <li className="menu-item">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Dashboards">Dashboards</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="index.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-pie-chart-alt-2"></i>
                <div data-i18n="Analytics">Analytics</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="dashboards-ecommerce.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-analyse"></i>
                <div data-i18n="eCommerce">eCommerce</div>
              </a>
            </li>
          </ul>
        </li>

        {/* <!-- Layouts --> */}
        <li className="menu-item">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="Layouts">All tests today</div>
          </a>

          <ul className="menu-sub">
            <li className="menu-item">
              <a href="layouts-without-menu.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-menu"></i>
                <div data-i18n="Without menu">Without menu</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="../vertical-menu-template/" className="menu-link" target="_blank">
                <i className="menu-icon tf-icons bx bx-vertical-center"></i>
                <div data-i18n="Vertical">Vertical</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="layouts-fluid.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-fullscreen"></i>
                <div data-i18n="Fluid">Fluid</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="layouts-container.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-exit-fullscreen"></i>
                <div data-i18n="Container">Container</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="layouts-blank.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-square-rounded"></i>
                <div data-i18n="Blank">Blank</div>
              </a>
            </li>
          </ul>
        </li>

        {/* <!-- Apps --> */}
        <li className="menu-item active">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-customize"></i>
            <div data-i18n="Did not show up">Did not show up</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="app-calendar.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-calendar"></i>

                <div data-i18n="Calendar">Calendar</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-food-menu"></i>
                <div data-i18n="Invoice">Invoice</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="app-invoice-list.html" className="menu-link">
                    <div data-i18n="List">List</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="app-invoice-preview.html" className="menu-link">
                    <div data-i18n="Preview">Preview</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="app-invoice-edit.html" className="menu-link">
                    <div data-i18n="Edit">Edit</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="app-invoice-add.html" className="menu-link">
                    <div data-i18n="Add">Add</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item active">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-user"></i>
                <div data-i18n="Users">Users</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item active">
                  <a href="app-user-list.html" className="menu-link">
                    <div data-i18n="List">List</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="javascript:void(0);" className="menu-link menu-toggle">
                    <div data-i18n="View">View</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="app-user-view-account.html" className="menu-link">
                        <div data-i18n="Account">Account</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="app-user-view-security.html" className="menu-link">
                        <div data-i18n="Security">Security</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="app-user-view-billing.html" className="menu-link">
                        <div data-i18n="Billing & Plans">Billing & Plans</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="app-user-view-notifications.html" className="menu-link">
                        <div data-i18n="Notifications">Notifications</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="app-user-view-connections.html" className="menu-link">
                        <div data-i18n="Connections">Connections</div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-check-shield"></i>
                <div data-i18n="Roles & Permissions">Roles & Permission</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="app-access-roles.html" className="menu-link">
                    <div data-i18n="Roles">Roles</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="app-access-permission.html" className="menu-link">
                    <div data-i18n="Permission">Permission</div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* <!-- Pages --> */}
        <li className="menu-item">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-collection"></i>
            <div data-i18n="Pages">Cancelled Appointment</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-user-circle"></i>
                <div data-i18n="User Profile">User Profile</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="pages-profile-user.html" className="menu-link">
                    <div data-i18n="Profile">Profile</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="pages-profile-teams.html" className="menu-link">
                    <div data-i18n="Teams">Teams</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="pages-profile-projects.html" className="menu-link">
                    <div data-i18n="Projects">Projects</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="pages-profile-connections.html" className="menu-link">
                    <div data-i18n="Connections">Connections</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-cog"></i>
                <div data-i18n="Account Settings">Account Settings</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="pages-account-settings-account.html" className="menu-link">
                    <div data-i18n="Account">Account</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="pages-account-settings-security.html" className="menu-link">
                    <div data-i18n="Security">Security</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="pages-account-settings-billing.html" className="menu-link">
                    <div data-i18n="Billing & Plans">Billing & Plans</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="pages-account-settings-notifications.html" className="menu-link">
                    <div data-i18n="Notifications">Notifications</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="pages-account-settings-connections.html" className="menu-link">
                    <div data-i18n="Connections">Connections</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="pages-faq.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-help-circle"></i>
                <div data-i18n="FAQ">FAQ</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bxs-buoy"></i>
                <div data-i18n="Help Center">Help Center</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="pages-help-center-landing.html" className="menu-link">
                    <div data-i18n="Landing">Landing</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="pages-help-center-categories.html" className="menu-link">
                    <div data-i18n="Categories">Categories</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="pages-help-center-article.html" className="menu-link">
                    <div data-i18n="Article">Article</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="pages-pricing.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-diamond"></i>
                <div data-i18n="Pricing">Pricing</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-shape-circle"></i>
                <div data-i18n="Misc">Misc</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="pages-misc-error.html" className="menu-link" target="_blank">
                    <div data-i18n="Error">Error</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="pages-misc-under-maintenance.html" className="menu-link" target="_blank">
                    <div data-i18n="Under Maintenance">Under Maintenance</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="pages-misc-comingsoon.html" className="menu-link" target="_blank">
                    <div data-i18n="Coming Soon">Coming Soon</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="pages-misc-not-authorized.html" className="menu-link" target="_blank">
                    <div data-i18n="Not Authorized">Not Authorized</div>
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-item">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
                <div data-i18n="Authentications">Authentications</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="javascript:void(0);" className="menu-link menu-toggle">
                    <div data-i18n="Login">Login</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="auth-login-basic.html" className="menu-link" target="_blank">
                        <div data-i18n="Basic">Basic</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="auth-login-cover.html" className="menu-link" target="_blank">
                        <div data-i18n="Cover">Cover</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="javascript:void(0);" className="menu-link menu-toggle">
                    <div data-i18n="Register">Register</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="auth-register-basic.html" className="menu-link" target="_blank">
                        <div data-i18n="Basic">Basic</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="auth-register-cover.html" className="menu-link" target="_blank">
                        <div data-i18n="Cover">Cover</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="auth-register-multisteps.html" className="menu-link" target="_blank">
                        <div data-i18n="Multi-steps">Multi-steps</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="javascript:void(0);" className="menu-link menu-toggle">
                    <div data-i18n="Verify Email">Verify Email</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="auth-verify-email-basic.html" className="menu-link" target="_blank">
                        <div data-i18n="Basic">Basic</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="auth-verify-email-cover.html" className="menu-link" target="_blank">
                        <div data-i18n="Cover">Cover</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="javascript:void(0);" className="menu-link menu-toggle">
                    <div data-i18n="Reset Password">Reset Password</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="auth-reset-password-basic.html" className="menu-link" target="_blank">
                        <div data-i18n="Basic">Basic</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="auth-reset-password-cover.html" className="menu-link" target="_blank">
                        <div data-i18n="Cover">Cover</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="javascript:void(0);" className="menu-link menu-toggle">
                    <div data-i18n="Forgot Password">Forgot Password</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="auth-forgot-password-basic.html" className="menu-link" target="_blank">
                        <div data-i18n="Basic">Basic</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="auth-forgot-password-cover.html" className="menu-link" target="_blank">
                        <div data-i18n="Cover">Cover</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="javascript:void(0);" className="menu-link menu-toggle">
                    <div data-i18n="Two Steps">Two Steps</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="auth-two-steps-basic.html" className="menu-link" target="_blank">
                        <div data-i18n="Basic">Basic</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="auth-two-steps-cover.html" className="menu-link" target="_blank">
                        <div data-i18n="Cover">Cover</div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-spreadsheet"></i>
                <div data-i18n="Wizard Examples">Wizard Examples</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="wizard-ex-checkout.html" className="menu-link">
                    <div data-i18n="Checkout">Checkout</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="wizard-ex-property-listing.html" className="menu-link">
                    <div data-i18n="Property Listing">Property Listing</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="wizard-ex-create-deal.html" className="menu-link">
                    <div data-i18n="Create Deal">Create Deal</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="modal-examples.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-window-open"></i>
                <div data-i18n="Modal Examples">Modal Examples</div>
              </a>
            </li>
          </ul>
        </li>

        {/* <!-- Components --> */}
        <li className="menu-item">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-code-block"></i>
            <div data-i18n="Components">Calender</div>
          </a>
          <ul className="menu-sub">
            {/* <!-- Cards --> */}
            <li className="menu-item">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-collection"></i>
                <div data-i18n="Cards">Cards</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="cards-basic.html" className="menu-link">
                    <div data-i18n="Basic">Basic</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="cards-advance.html" className="menu-link">
                    <div data-i18n="Advance">Advance</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="cards-statistics.html" className="menu-link">
                    <div data-i18n="Statistics">Statistics</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="cards-analytics.html" className="menu-link">
                    <div data-i18n="Analytics">Analytics</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="cards-actions.html" className="menu-link">
                    <div data-i18n="Actions">Actions</div>
                  </a>
                </li>
              </ul>
            </li>
            {/* <!-- User interface --> */}
            <li className="menu-item">
              <a href="javascript:void(0)" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-box"></i>
                <div data-i18n="User interface">User interface</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="ui-accordion.html" className="menu-link">
                    <div data-i18n="Accordion">Accordion</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-alerts.html" className="menu-link">
                    <div data-i18n="Alerts">Alerts</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-badges.html" className="menu-link">
                    <div data-i18n="Badges">Badges</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-buttons.html" className="menu-link">
                    <div data-i18n="Buttons">Buttons</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-carousel.html" className="menu-link">
                    <div data-i18n="Carousel">Carousel</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-collapse.html" className="menu-link">
                    <div data-i18n="Collapse">Collapse</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-dropdowns.html" className="menu-link">
                    <div data-i18n="Dropdowns">Dropdowns</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-footer.html" className="menu-link">
                    <div data-i18n="Footer">Footer</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-list-groups.html" className="menu-link">
                    <div data-i18n="List groups">List groups</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-modals.html" className="menu-link">
                    <div data-i18n="Modals">Modals</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-navbar.html" className="menu-link">
                    <div data-i18n="Navbar">Navbar</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-offcanvas.html" className="menu-link">
                    <div data-i18n="Offcanvas">Offcanvas</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-pagination-breadcrumbs.html" className="menu-link">
                    <div data-i18n="Pagination & Breadcrumbs">Pagination &amp; Breadcrumbs</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-progress.html" className="menu-link">
                    <div data-i18n="Progress">Progress</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-spinners.html" className="menu-link">
                    <div data-i18n="Spinners">Spinners</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-tabs-pills.html" className="menu-link">
                    <div data-i18n="Tabs & Pills">Tabs &amp; Pills</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-toasts.html" className="menu-link">
                    <div data-i18n="Toasts">Toasts</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-tooltips-popovers.html" className="menu-link">
                    <div data-i18n="Tooltips & popovers">Tooltips &amp; popovers</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-typography.html" className="menu-link">
                    <div data-i18n="Typography">Typography</div>
                  </a>
                </li>
              </ul>
            </li>
            {/* <!-- Extended components --> */}
            <li className="menu-item">
              <a href="javascript:void(0)" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-copy"></i>
                <div data-i18n="Extended UI">Extended UI</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="extended-ui-avatar.html" className="menu-link">
                    <div data-i18n="Avatar">Avatar</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-blockui.html" className="menu-link">
                    <div data-i18n="BlockUI">BlockUI</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-drag-and-drop.html" className="menu-link">
                    <div data-i18n="Drag & Drop">Drag &amp; Drop</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-media-player.html" className="menu-link">
                    <div data-i18n="Media Player">Media Player</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-perfect-scrollbar.html" className="menu-link">
                    <div data-i18n="Perfect scrollbar">Perfect scrollbar</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-star-ratings.html" className="menu-link">
                    <div data-i18n="Star Ratings">Star Ratings</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-sweetalert2.html" className="menu-link">
                    <div data-i18n="SweetAlert2">SweetAlert2</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-text-divider.html" className="menu-link">
                    <div data-i18n="Text Divider">Text Divider</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="javascript:void(0);" className="menu-link menu-toggle">
                    <div data-i18n="Timeline">Timeline</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="extended-ui-timeline-basic.html" className="menu-link">
                        <div data-i18n="Basic">Basic</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="extended-ui-timeline-fullscreen.html" className="menu-link">
                        <div data-i18n="Fullscreen">Fullscreen</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-tour.html" className="menu-link">
                    <div data-i18n="Tour">Tour</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-treeview.html" className="menu-link">
                    <div data-i18n="Treeview">Treeview</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-misc.html" className="menu-link">
                    <div data-i18n="Miscellaneous">Miscellaneous</div>
                  </a>
                </li>
              </ul>
            </li>
            {/* <!-- Icons --> */}
            <li className="menu-item">
              <a href="javascript:void(0)" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-crown"></i>
                <div data-i18n="Icons">Icons</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="icons-boxicons.html" className="menu-link">
                    <div data-i18n="Boxicons">Boxicons</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="icons-font-awesome.html" className="menu-link">
                    <div data-i18n="Fontawesome">Fontawesome</div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  </aside>
  )
}
