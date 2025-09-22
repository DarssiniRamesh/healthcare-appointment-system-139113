import React from "react";

/**
 * PUBLIC_INTERFACE
 * Success screen with booking confirmation message and reference code.
 */
export default function Success({ reference, onNewBooking }) {
  return (
    <div className="content-card" role="status" aria-live="polite">
      <h1 className="h1">Appointment Confirmed</h1>
      <p className="subtle">Thank you. Your visit has been scheduled successfully.</p>
      <div
        style={{
          padding: 18,
          border: "1px solid rgba(16,185,129,0.25)",
          borderRadius: 14,
          background: "linear-gradient(135deg, rgba(16,185,129,0.06), rgba(244,114,182,0.06))",
          boxShadow: "var(--shadow)",
          marginBottom: 12,
        }}
      >
        <div style={{ fontWeight: 700, marginBottom: 6, color: "var(--color-success)" }}>
          Confirmation Reference
        </div>
        <div style={{ fontSize: 18 }}>{reference}</div>
      </div>
      <div className="actions">
        <button className="btn btn-secondary" onClick={onNewBooking}>
          Book Another Appointment
        </button>
      </div>
    </div>
  );
}
