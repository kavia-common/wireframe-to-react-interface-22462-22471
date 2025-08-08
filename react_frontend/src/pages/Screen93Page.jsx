import React from "react";
import SidebarNav from "../components/SidebarNav";
import "../design-system.css";

// PUBLIC_INTERFACE
function Screen93Page() {
  /**
   * A React page corresponding to the "93" Figma wireframe (screen_45:1100).
   */
  return (
    <div className="screen-frame" style={{ minHeight: "100vh", display: "flex", flexDirection: "row" }}>
      <SidebarNav />
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <header
          style={{
            padding: "var(--space-lg)",
            background: "var(--color-f2f4f8)",
            borderBottom: "1px solid var(--color-dde1e6)",
            minHeight: "80px"
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontFamily: "Roboto,Arial,sans-serif",
              margin: 0
            }}
          >
            Config Server
          </h1>
        </header>
        {/* Tabs bar */}
        <div className="tab-bar" style={{ marginLeft: "var(--space-lg)", marginTop: "var(--space-lg)", marginBottom: "var(--space-xs)" }}>
          <button className="tab active">Profile</button>
          <button className="tab">Rules</button>
        </div>
        <section className="table-container" style={{ margin: "var(--space-lg)" }}>
          {/* "Rules" Table - sample structure */}
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "var(--color-f2f4f8)" }}>
                <th style={{ padding: "12px" }}>Rule Name</th>
                <th style={{ padding: "12px" }}>Priority</th>
                <th style={{ padding: "12px" }}>Description</th>
                <th style={{ padding: "12px" }}>Created Date</th>
                <th style={{ padding: "12px" }}>Modified Date</th>
                <th style={{ padding: "12px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "12px" }}>TEstProfile</td>
                <td style={{ padding: "12px" }}>High</td>
                <td style={{ padding: "12px" }}>TEstProfile</td>
                <td style={{ padding: "12px" }}>17 Feb 2025, 11:00:00</td>
                <td style={{ padding: "12px" }}>17 Feb 2025, 11:00:00</td>
                <td style={{ padding: "12px" }}>✏️ 🗑️</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: "32px", color: "var(--color-coolgray-60)", fontSize: "14px" }}>
            Example static data according to Figma "93" screen—adapt as needed for dynamic usage.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Screen93Page;
