import React from "react";
import { NavLink } from "react-router-dom";
import "../design-system.css";

// PUBLIC_INTERFACE
function SidebarNav() {
  /**
   * Minimal Sidebar Navigation component as per Figma "86" wireframe.
   */
  return (
    <nav className="vertical-menu">
      <div className="menu-section">
        <div className="menu-item">
          {/* Insert SVG logo if desired */}
          <span style={{marginRight: '0.5em'}}>[Logo]</span>
          <span>Company</span>
        </div>
        <hr />
      </div>
      <div className="menu-section">
        <NavLink to="/" end className={({isActive}) => isActive ? "menu-item active" : "menu-item"}>Dashboard</NavLink>
        <NavLink to="/devices" className="menu-item">Devices</NavLink>
        <NavLink to="/analytics" className="menu-item">Analytics</NavLink>
        <NavLink to="/fw-apps" className="menu-item">Firmware and Apps</NavLink>
        <NavLink to="/users" className="menu-item">Users</NavLink>
        <div className="menu-item">
          More
          <span className="icon" aria-label="badge" title="Notifications" style={{marginLeft:"0.4em"}}>●</span>
        </div>
      </div>
    </nav>
  );
}

export default SidebarNav;
