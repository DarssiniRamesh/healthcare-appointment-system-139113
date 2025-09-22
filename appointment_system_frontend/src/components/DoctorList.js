import React from "react";

/**
 * PUBLIC_INTERFACE
 * DoctorList renders a grid of doctor cards for selection.
 */
export default function DoctorList({ doctors, onSelect }) {
  return (
    <div className="content-card">
      <h1 className="h1">Choose Your Doctor</h1>
      <p className="subtle">
        Explore our specialist team and select a doctor that fits your needs.
      </p>
      <div className="doctor-grid" role="list" aria-label="Available doctors">
        {doctors.map((doc) => (
          <article
            key={doc.id}
            role="listitem"
            className="doctor-card"
            aria-label={`${doc.name}, ${doc.specialty}`}
          >
            <div className="doc-avatar" aria-hidden="true" />
            <div className="doc-info">
              <h3 className="doc-name">{doc.name}</h3>
              <p className="doc-specialty">{doc.specialty}</p>
              <p style={{ margin: "6px 0 0", fontSize: 12, color: "var(--text-secondary)" }}>
                {doc.hospital} • {doc.experience} years
              </p>
            </div>
            <div className="action-area">
              <button
                className="btn btn-primary"
                onClick={() => onSelect(doc)}
                aria-label={`Select ${doc.name}`}
              >
                Select
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
