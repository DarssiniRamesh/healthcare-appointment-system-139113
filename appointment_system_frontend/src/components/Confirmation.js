import React from "react";

/**
 * PUBLIC_INTERFACE
 * Confirmation shows a summary and provides a mock confirmation action.
 */
export default function Confirmation({ doctor, slot, patient, onBack, onConfirm }) {
  return (
    <div className="content-card">
      <h1 className="h1">Confirm Your Appointment</h1>
      <p className="subtle">Review the details below before confirming your booking.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 18,
          marginTop: 10,
          marginBottom: 12,
        }}
      >
        <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 12, padding: 16, boxShadow: "var(--shadow)" }}>
          <h3 style={{ margin: 0, marginBottom: 10 }}>Doctor</h3>
          <div className="confirm-row">
            <div>Name</div>
            <div>{doctor.name}</div>
          </div>
          <div className="confirm-row">
            <div>Specialty</div>
            <div>{doctor.specialty}</div>
          </div>
          <div className="confirm-row">
            <div>Location</div>
            <div>{doctor.hospital}</div>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 12, padding: 16, boxShadow: "var(--shadow)" }}>
          <h3 style={{ margin: 0, marginBottom: 10 }}>Appointment</h3>
          <div className="confirm-row">
            <div>Date</div>
            <div>{slot.date}</div>
          </div>
          <div className="confirm-row">
            <div>Time</div>
            <div>{slot.time}</div>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 12, padding: 16, boxShadow: "var(--shadow)" }}>
          <h3 style={{ margin: 0, marginBottom: 10 }}>Patient</h3>
          <div className="confirm-row">
            <div>Name</div>
            <div>{patient.fullName}</div>
          </div>
          <div className="confirm-row">
            <div>Email</div>
            <div>{patient.email}</div>
          </div>
          <div className="confirm-row">
            <div>Phone</div>
            <div>{patient.phone}</div>
          </div>
          <div className="confirm-row">
            <div>DOB</div>
            <div>{patient.dob}</div>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 12, padding: 16, boxShadow: "var(--shadow)" }}>
          <h3 style={{ margin: 0, marginBottom: 10 }}>Notes</h3>
          <div>{patient.notes ? patient.notes : <span style={{ color: "var(--text-secondary)" }}>None</span>}</div>
        </div>
      </div>

      <div className="actions">
        <button className="btn btn-ghost" onClick={onBack} aria-label="Back to edit details">
          Back
        </button>
        <button className="btn btn-primary" onClick={onConfirm} aria-label="Confirm booking">
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
