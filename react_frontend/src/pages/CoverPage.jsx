import React from "react";
import "../design-system.css";

// PUBLIC_INTERFACE
function CoverPage() {
  /**
   * CoverPage component corresponding to the Cover Figma wireframe.
   */
  return (
    <div className="screen-frame" style={{background: "var(--color-ffffff)", minWidth: "1920px", minHeight: "1080px"}}>
      <div style={{display: "flex", flexDirection: "column", padding: "80px"}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "1760px",
            height: "200px",
            background: "var(--color-ffffff)",
            marginBottom: "528px"
          }}
        >
          <h1
            style={{
              fontFamily: "Lato,Arial,sans-serif",
              fontSize: "160px",
              fontWeight: 900,
              color: "var(--color-4d5358)",
              margin: "0 0 8px 0",
              lineHeight: "192px"
            }}
          >
            iCX
          </h1>
          <hr style={{border: "none", borderTop: "4px solid var(--color-4d5358)", margin: "0", width: "1760px"}} />
        </div>
        <div style={{width: "955px", height: "192px"}}>
          <h2
            style={{
              fontFamily: "Lato,Arial,sans-serif",
              fontSize: "160px",
              fontWeight: 500,
              color: "var(--color-4d5358)",
              margin: 0,
              lineHeight: "192px"
            }}
          >
            Config Server
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CoverPage;
