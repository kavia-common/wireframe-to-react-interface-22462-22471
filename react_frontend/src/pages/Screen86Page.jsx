import React from "react";
import SidebarNav from "../components/SidebarNav";
import "../design-system.css";

// PUBLIC_INTERFACE
function Screen86Page() {
  /**
   * A React page based on the Figma "86" wireframe (screen_1_1768).
   */
  return (
    <div className="screen-frame" style={{minHeight: "100vh", display: "flex", flexDirection: "row"}}>
      <SidebarNav />
      <main style={{flex: 1, display: "flex", flexDirection: "column"}}>
        <header
          style={{
            padding: "var(--space-lg)",
            background: "var(--color-f2f4f8)",
            borderBottom: "1px solid var(--color-dde1e6)",
            minHeight: "80px"
          }}
        >
          <h1 style={{
            fontSize: "32px",
            fontFamily: "Roboto,Arial,sans-serif",
            margin: 0
          }}>Config Server</h1>
        </header>
        <section className="table-container">
          {/* Replace this with mapped data as needed */}
          <table style={{width: "100%", borderCollapse: "collapse"}}>
            <thead>
              <tr style={{background: "var(--color-f2f4f8)"}}>
                <th style={{padding: "12px"}}>Rule Name</th>
                <th style={{padding: "12px"}}>Priority</th>
                <th style={{padding: "12px"}}>Description</th>
                <th style={{padding: "12px"}}>Created Date</th>
                <th style={{padding: "12px"}}>Modified Date</th>
                <th style={{padding: "12px"}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding: "12px"}}>TEstProfile</td>
                <td style={{padding: "12px"}}>High</td>
                <td style={{padding: "12px"}}>TEstProfile</td>
                <td style={{padding: "12px"}}>17 Feb 2025, 11:00:00</td>
                <td style={{padding: "12px"}}>17 Feb 2025, 11:00:00</td>
                <td style={{padding: "12px"}}>✏️ 🗑️</td>
              </tr>
            </tbody>
          </table>
          <p style={{marginTop: "32px", color: "var(--color-coolgray-60)", fontSize:"14px"}}>
            {/* Let extra table columns come from Figma, this is a placeholder */}
            Example static data from the Figma wireframe—adapt as needed.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Screen86Page;
