import "./DemoNotes.css";
import React from "react";

export default function DemoNotes() {
  return (
    <footer className="demo-notes">
      <h1>Demo Notes</h1>
      <p>Open your console to see effects-as-data telemetry in action.</p>
      <p>
        Your todos are saved in local storage so you should be able to refresh
        and restore.
      </p>
    </footer>
  );
}
