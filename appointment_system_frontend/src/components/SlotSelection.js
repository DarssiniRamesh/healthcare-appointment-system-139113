import React from "react";

/**
 * PUBLIC_INTERFACE
 * SlotSelection renders available appointment time slots for a doctor.
 */
export default function SlotSelection({ doctor, slots, selectedSlot, onSelectSlot, onBack, onNext }) {
  return (
    <div className="content-card">
      <h1 className="h1">Select a Time Slot</h1>
      <p className="subtle">
        Booking with <strong>{doctor.name}</strong> • {doctor.specialty}
      </p>

      <div style={{ display: "flex", gap: 16, marginBottom: 12, alignItems: "center" }}>
        <div className="doc-avatar" aria-hidden="true" />
        <div>
          <div style={{ fontWeight: 700 }}>{doctor.name}</div>
          <div style={{ color: "var(--text-secondary)", fontSize: 12 }}>
            {doctor.hospital} • {doctor.experience} years experience
          </div>
        </div>
      </div>

      <div style={{ marginTop: 16, marginBottom: 12, fontWeight: 600 }}>Available Times</div>
      <div className="slot-grid" role="listbox" aria-label="Available time slots">
        {slots.map((slot) => {
          const isSelected = selectedSlot && selectedSlot.id === slot.id;
          return (
            <div
              key={slot.id}
              role="option"
              aria-selected={isSelected}
              className={`slot ${isSelected ? "selected" : ""}`}
              onClick={() => onSelectSlot(slot)}
            >
              <div style={{ fontWeight: 700 }}>{slot.time}</div>
              <div style={{ color: "var(--text-secondary)", fontSize: 12 }}>{slot.date}</div>
            </div>
          );
        })}
      </div>

      <div className="actions">
        <button className="btn btn-ghost" onClick={onBack} aria-label="Back to doctor selection">
          Back
        </button>
        <button
          className="btn btn-primary"
          onClick={onNext}
          disabled={!selectedSlot}
          aria-disabled={!selectedSlot}
          aria-label="Continue to patient information"
          style={{ opacity: selectedSlot ? 1 : 0.6 }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
